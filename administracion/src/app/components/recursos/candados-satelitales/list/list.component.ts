import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandadoSatelital } from 'src/app/core/models/recursos/candado-satelital/candado-satelital.model';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { Tipos } from 'src/app/core/models/recursos/tipos.model';
import { CandadoSatelitalService } from 'src/app/core/services/recursos/candado-satelital/candado-satelital.service';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcaService } from 'src/app/core/services/recursos/marca.service';
import { TipoService } from 'src/app/core/services/recursos/tipo.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'candados-satelitales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class CandadosSatelitalesListComponent implements OnInit {
  private candadosSatelitales: CandadoSatelital[];
  private tiposCandadoSatelital?: Tipos[];
  private marcasCandadoSatelital?: Marcas[];
  private colores?: Color[];
  currentCandadoSatelital: CandadoSatelital = new CandadoSatelital();
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private candadoSatelitalService: CandadoSatelitalService,
    private tiposService: TipoService,
    private marcasService: MarcaService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {
    this.candadosSatelitales = [];
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.retrieveTiposCandadoSatelital();
    this.retrieveMarcasCandadoSatelital();
    this.retrieveColores();
    this.refreshList();

    this.form = this.formBuilder.group({
      id: [null],
      color: [null, Validators.required],
      marca: [null, Validators.required],
      observaciones: [null, Validators.required],
      tipo: [null, Validators.required],
    });
  }

  get getCandadoSatelital() {
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
    } else if (!form.controls.tipo.value) {
      this.infoAlert('Seleccione un tipo válido');
    } else if (!form.controls.color.value) {
      this.infoAlert('Seleccione un color válido');
    } else if (!form.controls.observaciones.value) {
      this.infoAlert('Escriba las observaciones');
    }
  }

  private retrieveVehiculos(): void {
    this.candadoSatelitalService.getAll().subscribe(
      (data) => {
        this.candadosSatelitales = data;
        this.candadosSatelitales?.forEach((value: CandadoSatelital) => {
          value.nombreColor = this.colores?.find(
            (color) => color.id === value.color
          )?.nombre;
          value.nombreMarca = this.marcasCandadoSatelital?.find(
            (marca) => marca.id === value.marca
          )?.nombre;
          value.nombreTipo = this.tiposCandadoSatelital?.find(
            (tipo) => tipo.id === value.tipo
          )?.nombre;
        });
      },
      (error) => {}
    );
  }

  private retrieveTiposCandadoSatelital(): void {
    this.tiposService.getAll(2).subscribe(
      (data) => {
        this.tiposCandadoSatelital = data;
      },
      (error) => {}
    );
  }

  private retrieveMarcasCandadoSatelital(): void {
    this.marcasService.getAll(2).subscribe(
      (data) => {
        this.marcasCandadoSatelital = data;
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

  getCandadosSatelitales(): CandadoSatelital[] {
    return this.candadosSatelitales;
  }

  getTiposCandadoSatelital(): Tipos[] | undefined {
    return this.tiposCandadoSatelital;
  }

  getMarcasCandadoSatelital(): Marcas[] | undefined {
    return this.marcasCandadoSatelital;
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
          this.currentCandadoSatelital = {
            color: result.color.value,
            marca: result.marca.value,
            tipo: result.tipo.value,
            observaciones: result.observaciones.value,
          };
          this.candadoSatelitalService
            .create(this.currentCandadoSatelital)
            .subscribe(
              () => {
                this.actionSuccessfully(
                  'Candado satelital creado exitosamente'
                );
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
          this.currentCandadoSatelital = {
            id: result.id.value,
            color: result.color.value,
            marca: result.marca.value,
            tipo: result.tipo.value,
            observaciones: result.observaciones.value,
          };
          this.candadoSatelitalService
            .update(
              this.currentCandadoSatelital.id,
              this.currentCandadoSatelital
            )
            .subscribe(
              () => {
                this.actionSuccessfully(
                  'Candado satelital modificado exitosamente'
                );
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
          this.candadoSatelitalService.update(result.id, result).subscribe(
            () => {
              this.actionSuccessfully(
                'Candado satelital eliminado exitosamente'
              );
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
    this.retrieveVehiculos();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentCandadoSatelital = {};
    this.form.reset();
  }

  setActiveCandadoSatelital(candadoSatelital: CandadoSatelital): void {
    this.currentCandadoSatelital = candadoSatelital;
    this.form.setValue({
      id: candadoSatelital.id,
      marca: candadoSatelital.marca,
      tipo: candadoSatelital.tipo,
      color: candadoSatelital.color,
      observaciones: candadoSatelital.observaciones,
    });
  }
}
