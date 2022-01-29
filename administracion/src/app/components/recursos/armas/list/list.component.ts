import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Arma } from 'src/app/core/models/recursos/arma/arma.model';
import { CalibreArma } from 'src/app/core/models/recursos/arma/calibre-arma.model';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { Tipos } from 'src/app/core/models/recursos/tipos.model';
import { ArmaService } from 'src/app/core/services/recursos/arma/arma.service';
import { CalibreArmaService } from 'src/app/core/services/recursos/arma/calibre-arma.service';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcaService } from 'src/app/core/services/recursos/marca.service';
import { TipoService } from 'src/app/core/services/recursos/tipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'armas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ArmasListComponent implements OnInit {
  private armas: Arma[];
  private calibresArma?: CalibreArma[];
  private tiposArma?: Tipos[];
  private marcasArma?: Marcas[];
  private colores?: Color[];
  currentArma: Arma = new Arma();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private armaService: ArmaService,
    private calibresArmaService: CalibreArmaService,
    private tiposService: TipoService,
    private marcasService: MarcaService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {
    this.armas = [];
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.retrieveCalibresArma();
    this.retrieveTiposArma();
    this.retrieveMarcasArma();
    this.retrieveColores();
    this.refreshList();

    this.form = this.formBuilder.group({
      id: [null],
      calibre: [null, Validators.required],
      color: [null, Validators.required],
      marca: [null, Validators.required],
      observaciones: [null, Validators.required],
      tipo: [null, Validators.required],
    });
  }

  get getArma() {
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
    if (!form.controls.marca.value) {
      this.infoAlert('Seleccione una marca válida');
    } else if (!form.controls.calibre.value) {
      this.infoAlert('Seleccione un calibre válido');
    } else if (!form.controls.tipo.value) {
      this.infoAlert('Seleccione un tipo válido');
    } else if (!form.controls.color.value) {
      this.infoAlert('Seleccione un color válido');
    } else if (!form.controls.observaciones.value) {
      this.infoAlert('Escriba las observaciones');
    }
  }

  private retrieveArmas(): void {
    this.armaService.getAll().subscribe(
      (data) => {
        this.armas = data;
        this.armas?.forEach((value: Arma) => {
          value.nombreCalibre = this.calibresArma?.find(
            (calibre) => calibre.id === value.calibre
          )?.nombre;
          value.nombreColor = this.colores?.find(
            (color) => color.id === value.color
          )?.nombre;
          value.nombreMarca = this.marcasArma?.find(
            (marca) => marca.id === value.marca
          )?.nombre;
          value.nombreTipo = this.tiposArma?.find(
            (tipo) => tipo.id === value.tipo
          )?.nombre;
        });
      },
      (error) => {}
    );
  }

  private retrieveCalibresArma(): void {
    this.calibresArmaService.getAll().subscribe(
      (data) => {
        this.calibresArma = data;
      },
      (error) => {}
    );
  }

  private retrieveTiposArma(): void {
    this.tiposService.getAll(1).subscribe(
      (data) => {
        this.tiposArma = data;
      },
      (error) => {}
    );
  }

  private retrieveMarcasArma(): void {
    this.marcasService.getAll(1).subscribe(
      (data) => {
        this.marcasArma = data;
      },
      (error) => {}
    );
  }

  private retrieveColores(): void {
    this.colorService.getAll().subscribe(
      (data) => {
        this.colores = data;
      },
      (error) => {}
    );
  }

  getArmas(): Arma[] {
    return this.armas;
  }

  getCalibresArma(): CalibreArma[] | undefined {
    return this.calibresArma;
  }

  getTiposArma(): Tipos[] | undefined {
    return this.tiposArma;
  }

  getMarcasArma(): Marcas[] | undefined {
    return this.marcasArma;
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
          this.currentArma = {
            calibre: result.calibre.value,
            color: result.color.value,
            marca: result.marca.value,
            tipo: result.tipo.value,
            observaciones: result.observaciones.value,
          };
          this.armaService.create(this.currentArma).subscribe(
            () => {
              this.actionSuccessfully('Arma creada exitosamente');
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

  openEM(content: any) {
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
          this.currentArma = {
            id: result.id.value,
            calibre: result.calibre.value,
            color: result.color.value,
            marca: result.marca.value,
            tipo: result.tipo.value,
            observaciones: result.observaciones.value,
          };
          this.armaService
            .update(this.currentArma.id, this.currentArma)
            .subscribe(
              () => {
                this.actionSuccessfully('Arma modificada exitosamente');
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
          this.armaService.update(result.id, result).subscribe(
            () => {
              this.actionSuccessfully('Arma eliminada exitosamente');
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
    this.retrieveArmas();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentArma = {};
    this.form.reset();
  }

  setActiveArma(arma: Arma): void {
    this.currentArma = arma;
    this.form.setValue({
      id: arma.id,
      calibre: arma.calibre,
      marca: arma.marca,
      tipo: arma.tipo,
      color: arma.color,
      observaciones: arma.observaciones,
    });
  }
}
