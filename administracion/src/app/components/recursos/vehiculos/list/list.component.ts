import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Vehiculo } from 'src/app/core/models/recursos/vehiculo.model';
import { VehiculoService } from 'src/app/core/services/recursos/vehiculo.service';

@Component({
  selector: 'vehiculos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class VehiculosListComponent implements OnInit {
  vehiculos?: Vehiculo[];
  currentVehiculo: Vehiculo = new Vehiculo();

  constructor(
    private vehiculoService: VehiculoService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }

  retrieveVehiculos(): void {
    this.vehiculoService.getAll().subscribe(
      (data) => {
        this.vehiculos = data;
      },
      (error) => {}
    );
  }

  openCM(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        backdrop: 'static',
      })
      .result.then((result) => {
        this.vehiculoService.create(result).subscribe(
          () => {
            this.refreshList();
          },
          (error) => {}
        );
      });
  }

  openDM(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
      .result.then(
        (result) => {
          this.vehiculoService.delete(result.placa).subscribe(
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
      .result.then(() => {
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
