import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { Tipos } from 'src/app/core/models/recursos/tipos.model';
import { Vehiculo } from 'src/app/core/models/recursos/vehiculo/vehiculo.model';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcaService } from 'src/app/core/services/recursos/marca.service';
import { TipoService } from 'src/app/core/services/recursos/tipo.service';
import { VehiculoService } from 'src/app/core/services/recursos/vehiculo/vehiculo.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { MatDatepicker } from '@angular/material/datepicker';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
  selector: 'createOrEditVehiculoModal',
  templateUrl: './create-or-edit-vehiculo-modal.component.html',
  styleUrls: ['./create-or-edit-vehiculo-modal.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CreateOrEditVehiculoModalComponent
  /*implements OnInit, AfterViewInit, ControlValueAccessor*/
{
  /*
  @ViewChild('createOrEditModal') modal?: ModalDirective;

  @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

  active = false;
  saving = false;

  private tiposVehiculo?: Tipos[];
  private marcasVehiculo?: Marcas[];
  private colores?: Color[];

  vehiculo: Vehiculo = new Vehiculo();
  //yearPicker: Date = new Date();
  private selectedFile?: File;

  _yearPickerCtrl: FormControl = new FormControl();

  private _onDestroy: Subject<void> = new Subject<void>();

  onChange = (date: any) => {
    this.vehiculo.year = date;
    //console.log(this.vehiculo.year);
  };
  onTouched = () => {};

  _takeFocusAway($datepicker: MatDatepicker<any>) {
    $datepicker.disabled = true;
    /*setTimeout(() => {
      $datepicker._datepickerInput['_elementRef'].nativeElement.blur();
      $datepicker.disabled = false;
    }, 600);*//*
  }

  writeValue(date: any): void {
    if (date) {
      this._writeValue(date);
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  ngAfterViewInit() {
    this._subscribeToChanges(this._yearPickerCtrl);
  }

  private _subscribeToChanges(control: FormControl) {
    if (!control) {
      return;
    }

    control.valueChanges.pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      const valor = new Date(value);
      //this.dateChange.emit(valor);
      this.onChange(valor);
      this.onTouched();
    });
  }

  private _writeValue(date: any): any {
    if (!date) {
      return;
    }

    this._yearPickerCtrl.setValue(date, { emitEvent: false });
  }

  constructor(
    private vehiculoService: VehiculoService,
    private tiposService: TiposService,
    private marcasService: MarcasService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.retrieveTiposVehiculo();
    this.retrieveMarcasVehiculo();
    this.retrieveColores();
    this.vehiculo.year = new Date();
  }

  show(placa?: string): void {
    if (!placa) {
      this.vehiculo = new Vehiculo();
      this.active = true;
      this.modal ? this.modal.show() : undefined;
    } else {
      this.vehiculoService.get(placa).subscribe((result) => {
        this.vehiculo = result;
        this.active = true;
        this.modal ? this.modal.show() : undefined;
      });
    }
  }

  save(): void {

    //console.log(this.vehiculo.year?.getFullYear());
    //this.close();
    //this.modalSave.emit(null);

    this.saving = true;

    if (this.vehiculo.placa) {
      this.vehiculoService
        .create(this.vehiculo)
        .pipe(
          finalize(() => {
            this.saving = false;
          })
        )
        .subscribe(() => {
          this.close();
          this.modalSave.emit(null);
        });
    }
  }

  close(): void {
    this.active = false;
    this.modal ? this.modal.hide() : undefined;
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
  setYear(event: any) {
    this.vehiculo.year = event.target.value;
    console.log(this.vehiculo.year);
  }*/
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

  onChangePlaca(event: any) {
    this.vehiculo.placa = event.target.value;
  }

  onChangeMotor(event: Event) {
    this.vehiculo.motor = (event.target as HTMLInputElement).value;
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
  }*/
}
