import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandadoSatelital } from 'src/app/core/models/recursos/candado-satelital.model';
import { CandadoSatelitalService } from 'src/app/core/services/recursos/candado-satelital.service';

@Component({
  selector: 'candados-satelitales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class CandadosSatelitalesListComponent implements OnInit {
  candadosSatelitales?: CandadoSatelital[];
  currentCandadoSatelital: CandadoSatelital = new CandadoSatelital();

  constructor(
    private candadoSatelitalService: CandadoSatelitalService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.refreshList();
  }

  retrieveVehiculos(): void {
    this.candadoSatelitalService.getAll().subscribe(
      (data) => {
        this.candadosSatelitales = data;
      },
      (error) => {
        console.error(error);
      }
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
          this.candadoSatelitalService.create(result).subscribe(
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

  openDM(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'sm' })
      .result.then(
        (result) => {
          this.candadoSatelitalService.delete(result.id).subscribe(
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
    this.currentCandadoSatelital = new CandadoSatelital();
  }

  setActiveCandadoSatelital(candadoSatelital: CandadoSatelital): void {
    this.currentCandadoSatelital = candadoSatelital;
  }
}
