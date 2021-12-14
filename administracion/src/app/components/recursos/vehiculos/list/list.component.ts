import { Component, forwardRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Vehiculo } from 'src/app/core/models/recursos/vehiculo/vehiculo.model';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { VehiculoService } from 'src/app/core/services/recursos/vehiculo/vehiculo.service';
import * as _moment from 'moment';
import { MatDatepicker } from '@angular/material/datepicker';
import { Moment } from 'moment';
import { Tipos } from 'src/app/core/models/recursos/tipos.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { TiposService } from 'src/app/core/services/recursos/tipos.service';
import { MarcasService } from 'src/app/core/services/recursos/marcas.service';

export const YEAR_MODE_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'vehiculos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => VehiculosListComponent),
      multi: true,
    },
  ],
})
export class VehiculosListComponent implements OnInit, ControlValueAccessor {
  currentVehiculo: Vehiculo = new Vehiculo();
  private vehiculos?: Vehiculo[];
  private tiposVehiculo?: Tipos[];
  private marcasVehiculo?: Marcas[];
  private colores?: Color[];
  private selectedFile?: File;

  _max?: Moment;
  @Input() get max(): number | Date | undefined {
    return this._max ? this._max.year() : undefined;
  }
  set max(max: number | Date | undefined) {
    if (max) {
      const momentDate =
        typeof max === 'number' ? _moment([max, 0, 1]) : _moment(max);
      this._max = momentDate.isValid() ? momentDate : undefined;
    }
  }

  _min?: Moment;
  @Input() get min(): number | Date | undefined {
    return this._min ? this._min.year() : undefined;
  }
  set min(min: number | Date | undefined) {
    if (min) {
      const momentDate =
        typeof min === 'number' ? _moment([min, 0, 1]) : _moment(min);
      this._min = momentDate.isValid() ? momentDate : undefined;
    }
  }

  @Input() touchUi = false;

  @ViewChild(MatDatepicker) _picker?: MatDatepicker<Moment>;

  _inputCtrl: FormControl = new FormControl();

  // Function to call when the date changes.
  onChange = (year: Date) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  writeValue(date: Date): void {
    if (date && this._isYearEnabled(date.getFullYear())) {
      const momentDate = _moment(date);
      if (momentDate.isValid()) {
        this._inputCtrl.setValue(_moment(date), { emitEvent: false });
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    isDisabled
      ? (this._picker != undefined ? this._picker.disabled = true : undefined)
      : (this._picker != undefined ? this._picker.disabled = false : undefined);

    isDisabled ? this._inputCtrl.disable() : this._inputCtrl.enable();
  }

  _yearSelectedHandler(chosenDate: Moment, datepicker: MatDatepicker<Moment>) {
    if (!this._isYearEnabled(chosenDate.year())) {
      datepicker.close();
      return;
    }

    this._inputCtrl.setValue(chosenDate, { emitEvent: false });
    this.onChange(chosenDate.toDate());
    this.onTouched();
    datepicker.close();
  }

  _openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }

  _openDatepickerOnFocus(datepicker: MatDatepicker<Moment>) {
    setTimeout(() => {
      if (!datepicker.opened) {
        datepicker.open();
      }
    });
  }

  /** Whether the given year is enabled. */
  private _isYearEnabled(year: number) {
    // disable if the year is greater than maxDate lower than minDate
    if (
      year === undefined ||
      year === null ||
      (this._max && year > this._max.year()) ||
      (this._min && year < this._min.year())
    ) {
      return false;
    }

    return true;
  }

  constructor(
    private vehiculoService: VehiculoService,
    private tiposService: TiposService,
    private marcasService: MarcasService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.retrieveTiposVehiculo();
    this.retrieveMarcasVehiculo();
    this.retrieveColores();
    this.refreshList();
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

  getVehiculos(): Vehiculo[] | undefined {
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

  onFileSelected(event: Event): void {
    const files = (event.target as HTMLInputElement).files;
    if (files != null) {
      this.selectedFile = files[0];
    }
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
          if (!result.placa) {
            this.vehiculoService.create(result).subscribe(
              () => {
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

  openEM(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        backdrop: 'static',
      })
      .result.then(
        (result) => {
          this.vehiculoService.update(result.placa, result).subscribe(
            () => {
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
          this.vehiculoService.update(result.placa, result).subscribe(
            () => {
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
      .result.then((result) => {
        if (
          result != null &&
          result != undefined &&
          result != '' &&
          result !== 'edit'
        )
          this.resetCurrent();
      });
  }

  refreshList(): void {
    this.retrieveVehiculos();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentVehiculo = {};
  }

  setActiveVehiculo(vehiculo: Vehiculo): void {
    this.currentVehiculo = vehiculo;
  }
}
