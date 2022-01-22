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

  minDate = new Date(1950, 1, 1);
  maxDate = new Date();
  //date = new FormControl({ value: moment() });

  /*private selectedFile?: File;*/

  constructor(
    private vehiculoService: VehiculoService,
    private tiposService: TipoService,
    private marcasService: MarcaService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {
    this.vehiculos = [];
  }

  ngOnInit(): void {
    this.retrieveTiposVehiculo();
    this.retrieveMarcasVehiculo();
    this.retrieveColores();
    this.refreshList();
  }

  onOpenCalendar(container: any) {
    container.setViewMode('year');
    container.yearSelectHandler = (event: CalendarCellViewModel): void => {
      container.value = event.date;
      this.currentVehiculo.year = event.date.getFullYear();
      return;
    };
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
  openCM(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        backdrop: 'static',
      })
      .result.then(
        (result) => {
          if (result.placa) {
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
          if (result.placa) {
            this.vehiculoService.update(result.placa, result).subscribe(
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

  openDM(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
      .result.then(
        (result) => {
          if (result.placa) {
            result.is_deleted = true;
            this.vehiculoService.update(result.placa, result).subscribe(
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
  }

  setActiveVehiculo(vehiculo: Vehiculo): void {
    this.currentVehiculo = vehiculo;
  }
}
