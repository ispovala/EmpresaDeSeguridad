import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CandadoSatelital } from 'src/app/core/models/recursos/candado-satelital/candado-satelital.model';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { Tipos } from 'src/app/core/models/recursos/tipos.model';
import { CandadoSatelitalService } from 'src/app/core/services/recursos/candado-satelital/candado-satelital.service';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcasService } from 'src/app/core/services/recursos/marcas.service';
import { TiposService } from 'src/app/core/services/recursos/tipos.service';

@Component({
  selector: 'candados-satelitales-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class CandadosSatelitalesListComponent implements OnInit {
  private candadosSatelitales?: CandadoSatelital[];
  private tiposCandadoSatelital?: Tipos[];
  private marcasCandadoSatelital?: Marcas[];
  private colores?: Color[];
  currentCandadoSatelital: CandadoSatelital = new CandadoSatelital();

  constructor(
    private candadoSatelitalService: CandadoSatelitalService,
    private tiposService: TiposService,
    private marcasService: MarcasService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.retrieveTiposCandadoSatelital();
    this.retrieveMarcasCandadoSatelital();
    this.retrieveColores();
    this.refreshList();
  }

  private retrieveVehiculos(): void {
    this.candadoSatelitalService.getAll().subscribe(
      (data) => {
        this.candadosSatelitales = data;
        this.candadosSatelitales?.forEach((value: CandadoSatelital) => {
          value.nombreColor = this.colores?.find(
            (color) => color.id === value.color
          )?.nombre;
          value.nombreMarca = this.marcasCandadoSatelital?.find(
            (marca) => marca.id === value.marca
          )?.nombre;
          value.nombreTipo = this.tiposCandadoSatelital?.find(
            (tipo) => tipo.id === value.tipo
          )?.nombre;
        });
      },
      (error) => {}
    );
  }

  private retrieveTiposCandadoSatelital(): void {
    this.tiposService.getAll(2).subscribe(
      (data) => {
        this.tiposCandadoSatelital = data;
      },
      (error) => {}
    );
  }

  private retrieveMarcasCandadoSatelital(): void {
    this.marcasService.getAll(2).subscribe(
      (data) => {
        this.marcasCandadoSatelital = data;
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

  getCandadosSatelitales(): CandadoSatelital[] | undefined {
    return this.candadosSatelitales;
  }

  getTiposCandadoSatelital(): Tipos[] | undefined {
    return this.tiposCandadoSatelital;
  }

  getMarcasCandadoSatelital(): Marcas[] | undefined {
    return this.marcasCandadoSatelital;
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
          this.candadoSatelitalService.create(result).subscribe(
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
          this.candadoSatelitalService.update(result.id, result).subscribe(
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
          this.candadoSatelitalService.update(result.id, result).subscribe(
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
        ) {
          this.resetCurrent();
        }
      });
  }

  refreshList(): void {
    this.retrieveVehiculos();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentCandadoSatelital = {};
  }

  setActiveCandadoSatelital(candadoSatelital: CandadoSatelital): void {
    this.currentCandadoSatelital = candadoSatelital;
  }
}
