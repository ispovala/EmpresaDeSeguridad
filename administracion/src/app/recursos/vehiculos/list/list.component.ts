import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  currentIndex = -1;
  closeResult: string = '';

  constructor(
    private vehiculoService: VehiculoService,
    private modalService: NgbModal,
  ) {}

  ngOnInit(): void {
    this.retrieveVehiculos();
  }

  retrieveVehiculos(): void {
    this.vehiculoService.getAll().subscribe(
      (data) => {
        this.vehiculos = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        result => {
          this.vehiculoService.create(result)
            .subscribe(
              response => {
                this.refreshList();
              },
              error => {
                console.error(error);
            });
        },
        reason => {
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  refreshList(): void {
    this.retrieveVehiculos();
    this.currentVehiculo = new Vehiculo();
    this.currentIndex = -1;
  }

  setActiveVehiculo(vehiculo: Vehiculo, index: number): void {
    this.currentVehiculo = vehiculo;
    this.currentIndex = index;
  }
}
