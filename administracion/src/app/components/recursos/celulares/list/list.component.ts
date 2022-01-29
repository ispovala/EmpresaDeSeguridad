import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Celular } from 'src/app/core/models/recursos/celular/celular.model';
import { OperadoraCelular } from 'src/app/core/models/recursos/celular/operadora-celular.model';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { Modelo } from 'src/app/core/models/recursos/modelo.model';
import { CelularService } from 'src/app/core/services/recursos/celular/celular.service';
import { OperadoraCelularService } from 'src/app/core/services/recursos/celular/operadora-celular.service';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcaService } from 'src/app/core/services/recursos/marca.service';
import { ModeloService } from 'src/app/core/services/recursos/modelo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'celulares-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class CelularesListComponent implements OnInit {
  private celulares: Celular[];
  private operadorasCelular?: OperadoraCelular[];
  private modelosCelular?: Modelo[];
  private marcasCelular?: Marcas[];
  private colores?: Color[];
  currentCelular: Celular = new Celular();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private celularService: CelularService,
    private marcasService: MarcaService,
    private modelosService: ModeloService,
    private operadorasService: OperadoraCelularService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {
    this.celulares = [];
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.retrieveMarcasCelulares();
    this.retrieveOperadorasCelular();
    this.retrieveColores();
    this.refreshList();

    this.form = this.formBuilder.group({
      id: [null],
      numero_contacto: [
        null,
        [Validators.required, Validators.pattern('^[0-9]{10}$')],
      ],
      marca: [null, Validators.required],
      modelo: [null, Validators.required],
      color: [null, Validators.required],
      operadora: [null, Validators.required],
      observaciones: [null, Validators.required],
    });
  }

  get getCelular() {
    return this.form.controls;
  }

  private infoAlert(msg: string) {
    Swal.fire({
      icon: 'info',
      title: msg,
      timer: 3000,
      showConfirmButton: false,
    });
  }

  private validateForm(form: FormGroup) {
    if (
      !form.controls.numero_contacto.value ||
      form.controls.numero_contacto.errors?.pattern
    ) {
      this.infoAlert('Número no válido');
    } else if (!form.controls.marca.value) {
      this.infoAlert('Seleccione una marca válida');
    } else if (!form.controls.modelo.value) {
      this.infoAlert('Seleccione un modelo válido');
    } else if (!form.controls.operadora.value) {
      this.infoAlert('Seleccione una operadora válida');
    } else if (!form.controls.color.value) {
      this.infoAlert('Seleccione un color válido');
    } else if (!form.controls.observaciones.value) {
      this.infoAlert('Escriba las observaciones');
    }
  }

  private retrieveCelulares(): void {
    this.celularService.getAll().subscribe(
      (data) => {
        this.celulares = data;
        this.celulares?.forEach((value: Celular) => {
          value.nombreColor = this.colores?.find(
            (color) => color.id === value.color
          )?.nombre;
          value.nombreMarca = this.marcasCelular?.find(
            (marca) => marca.id === value.marca
          )?.nombre;
          value.nombreOperadora = this.operadorasCelular?.find(
            (operadora) => operadora.id === value.operadora
          )?.nombre;
          this.modelosService.getAll(value.marca).subscribe(
            (data) => {
              value.nombreModelo = data?.find(
                (modelo) => modelo.id === value.modelo
              )?.nombre;
            },
            (error) => {}
          );
        });
      },
      (error) => {}
    );
  }

  private retrieveMarcasCelulares(): void {
    this.marcasService.getAll(3).subscribe(
      (data) => {
        this.marcasCelular = data;
      },
      (error) => {}
    );
  }

  retrieveModelosCelular(): void {
    if (this.form.controls.marca.value) {
      this.modelosService.getAll(this.form.controls.marca.value).subscribe(
        (data) => {
          this.modelosCelular = data;
        },
        (error) => {}
      );
    }
  }

  private retrieveOperadorasCelular(): void {
    this.operadorasService.getAll().subscribe((data) => {
      this.operadorasCelular = data;
    });
  }

  private retrieveColores(): void {
    this.colorService.getAll().subscribe(
      (data) => {
        this.colores = data;
      },
      (error) => {}
    );
  }

  getCelulares(): Celular[] {
    return this.celulares;
  }

  getModelosCelular(): Modelo[] | undefined {
    return this.modelosCelular;
  }

  getOperadorasCelular(): OperadoraCelular[] | undefined {
    return this.operadorasCelular;
  }

  getMarcasCelular(): Marcas[] | undefined {
    return this.marcasCelular;
  }

  getColores(): Color[] | undefined {
    return this.colores;
  }

  private actionSuccessfully(msg: string) {
    Swal.fire({
      icon: 'success',
      title: msg,
      timer: 3000,
      showConfirmButton: false,
    });
  }

  openCM(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        backdrop: 'static',
      })
      .result.then(
        (result) => {
          if (!this.form.valid) {
            this.validateForm(this.form);
            return;
          }
          this.currentCelular = {
            numero_contacto: result.numero_contacto.value,
            marca: result.marca.value,
            modelo: result.modelo.value,
            operadora: result.operadora.value,
            color: result.color.value,
            observaciones: result.observaciones.value,
          };
          this.celularService.create(this.currentCelular).subscribe(
            () => {
              this.actionSuccessfully('Celular creado exitosamente');
              this.refreshList();
            },
            (error) => {}
          );
        },
        () => {
          this.resetCurrent();
          this.modelosCelular = [];
        }
      );
  }

  openEM(content: any) {
    this.retrieveModelosCelular();
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        backdrop: 'static',
      })
      .result.then(
        (result) => {
          if (!this.form.valid) {
            this.validateForm(this.form);
            return;
          }
          this.currentCelular = {
            id: result.id.value,
            numero_contacto: result.numero_contacto.value,
            marca: result.marca.value,
            modelo: result.modelo.value,
            operadora: result.operadora.value,
            color: result.color.value,
            observaciones: result.observaciones.value,
          };
          this.celularService
            .update(this.currentCelular.id, this.currentCelular)
            .subscribe(
              () => {
                this.actionSuccessfully('Celular modificado exitosamente');
                this.refreshList();
              },
              (error) => {}
            );
        },
        () => {
          this.resetCurrent();
        }
      );
  }

  openDM(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
      .result.then(
        (result) => {
          result.is_deleted = true;
          this.celularService.update(result.id, result).subscribe(
            () => {
              this.actionSuccessfully('Celular eliminado exitosamente');
              this.refreshList();
            },
            (error) => {}
          );
        },
        () => {
          this.resetCurrent();
        }
      );
  }

  openVM(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        backdrop: 'static',
      })
      .result.then(
        (result) => {},
        () => {
          this.resetCurrent();
        }
      );
  }

  refreshList(): void {
    this.retrieveCelulares();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentCelular = {};
    this.form.reset();
  }

  setActiveCelular(celular: Celular): void {
    this.currentCelular = celular;
    this.form.setValue({
      id: celular.id,
      numero_contacto: celular.numero_contacto,
      marca: celular.marca,
      modelo: celular.modelo,
      operadora: celular.operadora,
      color: celular.color,
      observaciones: celular.observaciones,
    });
  }
}
