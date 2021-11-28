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
  currentIndex = -1;
  closeResult: string = '';

  constructor(
    private candadoSatelitalService: CandadoSatelitalService,
    private modalService: NgbModal,
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

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
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
    this.currentCandadoSatelital = new CandadoSatelital();
    this.currentIndex = -1;
  }

  setActiveVehiculo(candadoSatelital: CandadoSatelital, index: number): void {
    this.currentCandadoSatelital = candadoSatelital;
    this.currentIndex = index;
  }
}
