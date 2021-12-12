import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Color } from 'src/app/core/models/recursos/color.model';
import { MarcaVehiculo } from 'src/app/core/models/recursos/vehiculo/marca-vehiculo.model';
import { TipoVehiculo } from 'src/app/core/models/recursos/vehiculo/tipo-vehiculo.model';
import { Vehiculo } from 'src/app/core/models/recursos/vehiculo/vehiculo.model';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcaVehiculoService } from 'src/app/core/services/recursos/vehiculo/marca-vehiculo.service';
import { TipoVehiculoService } from 'src/app/core/services/recursos/vehiculo/tipo-vehiculo.service';
import { VehiculoService } from 'src/app/core/services/recursos/vehiculo/vehiculo.service';

@Component({
  selector: 'vehiculos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class VehiculosListComponent implements OnInit {
  private vehiculos?: Vehiculo[];
  private tiposVehiculo?: TipoVehiculo[];
  private marcasVehiculo?: MarcaVehiculo[];
  private colores?: Color[];
  currentVehiculo: Vehiculo = new Vehiculo();

  constructor(
    private vehiculoService: VehiculoService,
    private tipoVehiculoService: TipoVehiculoService,
    private marcaVehiculoService: MarcaVehiculoService,
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
    this.tipoVehiculoService.getAll().subscribe(
      (data) => {
        this.tiposVehiculo = data;
      },
      (error) => {}
    );
  }

  private retrieveMarcasVehiculo(): void {
    this.marcaVehiculoService.getAll().subscribe(
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

  getTiposVehiculo(): TipoVehiculo[] | undefined {
    return this.tiposVehiculo;
  }

  getMarcasVehiculo(): MarcaVehiculo[] | undefined {
    return this.marcasVehiculo;
  }

  getColores(): Color[] | undefined {
    return this.colores;
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
          this.vehiculoService.create(result).subscribe(
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
