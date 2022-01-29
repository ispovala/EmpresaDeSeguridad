import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Vehiculo } from 'src/app/core/models/recursos/vehiculo/vehiculo.model';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { VehiculoService } from 'src/app/core/services/recursos/vehiculo/vehiculo.service';
import { Tipos } from 'src/app/core/models/recursos/tipos.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { TipoService } from 'src/app/core/services/recursos/tipo.service';
import { MarcaService } from 'src/app/core/services/recursos/marca.service';
import { CalendarCellViewModel } from 'ngx-bootstrap/datepicker/models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'vehiculos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class VehiculosListComponent implements OnInit {
  currentVehiculo: Vehiculo = new Vehiculo();
  private vehiculos: Vehiculo[];
  private tiposVehiculo?: Tipos[];
  private marcasVehiculo?: Marcas[];
  private colores?: Color[];
  form: FormGroup;
  formForEdit: FormGroup;

  minDate: Date = new Date(1950, 1, 1);
  maxDate: Date = new Date();
  //date = new FormControl({ value: moment() });

  /*private selectedFile?: File;*/

  constructor(
    private formBuilder: FormBuilder,
    private vehiculoService: VehiculoService,
    private tiposService: TipoService,
    private marcasService: MarcaService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {
    this.vehiculos = [];
    this.form = new FormGroup({});
    this.formForEdit = new FormGroup({});
  }

  ngOnInit(): void {
    this.retrieveTiposVehiculo();
    this.retrieveMarcasVehiculo();
    this.retrieveColores();
    this.refreshList();

    this.form = this.formBuilder.group({
      marca: [null, Validators.required],
      tipo: [null, Validators.required],
      color: [null, Validators.required],
      placa: [
        null,
        [Validators.required, Validators.pattern('^[A-Z]{3}[-][0-9]{4}$')],
      ],
      year: [null, Validators.required],
      motor: [null, Validators.required],
      observaciones: [null, Validators.required],
    });

    this.formForEdit = this.formBuilder.group({
      marca: [null, Validators.required],
      tipo: [null, Validators.required],
      color: [null, Validators.required],
      placa: [
        { value: null, disabled: true },
        [(Validators.required, Validators.pattern('^[A-Z]{3}[-][0-9]{4}$'))],
      ],
      year: [null, Validators.required],
      motor: [null, Validators.required],
      observaciones: [null, Validators.required],
    });
  }

  onOpenCalendar(container: any) {
    container.setViewMode('year');
    container.yearSelectHandler = (event: CalendarCellViewModel): void => {
      container.value = event.date;
      this.currentVehiculo.year = event.date.getFullYear();
      return;
    };
  }

  get getVehiculo() {
    return this.form.controls;
  }

  get getVehiculoForEdit() {
    return this.formForEdit.controls;
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
    } else if (
      !form.controls.placa.value ||
      form.controls.placa.errors?.pattern
    ) {
      this.infoAlert('Placa no válida');
    } else if (
      !form.controls.year.value ||
      form.controls.year.value.getFullYear() < this.minDate.getFullYear() ||
      form.controls.year.value.getFullYear() > this.maxDate.getFullYear()
    ) {
      this.infoAlert('Año no válido');
    } else if (!form.controls.motor.value) {
      this.infoAlert('Escriba una descripción del motor');
    } else if (!form.controls.observaciones.value) {
      this.infoAlert('Escriba las observaciones');
    }
  }

  private retrieveVehiculos(): void {
    this.vehiculoService.getAll().subscribe(
      (data) => {
        this.vehiculos = data;
        this.vehiculos?.forEach((value: Vehiculo) => {
          value.nombreColor = this.colores?.find(
            (color) => color.id === value.color
          )?.nombre;
          value.nombreMarca = this.marcasVehiculo?.find(
            (marca) => marca.id === value.marca
          )?.nombre;
          value.nombreTipo = this.tiposVehiculo?.find(
            (tipo) => tipo.id === value.tipo
          )?.nombre;
        });
      },
      (error) => {}
    );
  }

  private retrieveTiposVehiculo(): void {
    this.tiposService.getAll(4).subscribe(
      (data) => {
        this.tiposVehiculo = data;
      },
      (error) => {}
    );
  }

  private retrieveMarcasVehiculo(): void {
    this.marcasService.getAll(4).subscribe(
      (data) => {
        this.marcasVehiculo = data;
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

  getVehiculos(): Vehiculo[] {
    return this.vehiculos;
  }

  getTiposVehiculo(): Tipos[] | undefined {
    return this.tiposVehiculo;
  }

  getMarcasVehiculo(): Marcas[] | undefined {
    return this.marcasVehiculo;
  }

  getColores(): Color[] | undefined {
    return this.colores;
  }
  /*
  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files != null) {
      this.selectedFile = files[0];
    }
  }

  getFileSelected(): File | undefined {
    return this.selectedFile;
  }
*/

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
          this.currentVehiculo = {
            placa: result.placa.value,
            color: result.color.value,
            marca: result.marca.value,
            motor: result.motor.value,
            observaciones: result.observaciones.value,
            tipo: result.tipo.value,
            year: result.year.value.getFullYear(),
          };
          this.vehiculoService.create(this.currentVehiculo).subscribe(
            () => {
              this.actionSuccessfully('Vehículo creado exitosamente');
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
          if (!this.formForEdit.valid) {
            this.validateForm(this.formForEdit);
            return;
          }
          this.currentVehiculo = {
            placa: result.placa.value,
            color: result.color.value,
            marca: result.marca.value,
            motor: result.motor.value,
            observaciones: result.observaciones.value,
            tipo: result.tipo.value,
            year: result.year.value.getFullYear(),
          };
          this.vehiculoService
            .update(this.currentVehiculo.placa, this.currentVehiculo)
            .subscribe(
              () => {
                this.actionSuccessfully('Vehículo modificado exitosamente');
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
          if (result.placa) {
            result.is_deleted = true;
            this.vehiculoService.update(result.placa, result).subscribe(
              () => {
                this.actionSuccessfully('Vehículo eliminado exitosamente');
                this.refreshList();
              },
              (error) => {}
            );
          }
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
    //this.createOrEditVehiculoModal.close();
    this.retrieveVehiculos();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentVehiculo = {};
    this.form.reset();
    this.formForEdit.reset();
  }

  setActiveVehiculo(vehiculo: Vehiculo): void {
    this.currentVehiculo = vehiculo;
    this.formForEdit.setValue({
      marca: vehiculo.marca,
      tipo: vehiculo.tipo,
      color: vehiculo.color,
      placa: vehiculo.placa,
      year: new Date(Number(vehiculo.year), 1, 1, 1, 1, 1, 1),
      motor: vehiculo.motor,
      observaciones: vehiculo.observaciones,
    });
  }
}
