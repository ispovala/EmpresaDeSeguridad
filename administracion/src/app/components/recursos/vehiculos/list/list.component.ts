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
      .result.then(
        (result) => {
          this.vehiculoService.create(result).subscribe(
            (response) => {
              this.refreshList();
            },
            (error) => {}
          );
        },
        (reason) => {}
      );
  }

  openDM(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
      .result.then(
        (result) => {
          this.vehiculoService.delete(result.placa).subscribe(
            (response) => {
              this.refreshList();
            },
            (error) => {
              console.error(error);
            }
          );
        },
        (reason) => {}
      );
  }

  openVM(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then(
        (result) => {},
        (reason) => {}
      );
  }

  refreshList(): void {
    this.retrieveVehiculos();
    this.currentVehiculo = {};
  }

  setActiveVehiculo(vehiculo: Vehiculo): void {
    this.currentVehiculo = vehiculo;
  }
}
