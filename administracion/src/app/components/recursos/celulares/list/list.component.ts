import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Celular } from 'src/app/core/models/recursos/celular/celular.model';
import { OperadoraCelular } from 'src/app/core/models/recursos/celular/operadora-celular.model';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { Modelo } from 'src/app/core/models/recursos/modelo.model';
import { CelularService } from 'src/app/core/services/recursos/celular/celular.service';
import { OperadoraCelularService } from 'src/app/core/services/recursos/celular/operadora-celular.service';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcaService } from 'src/app/core/services/recursos/marca.service';
import { ModeloService } from 'src/app/core/services/recursos/modelo.service';

@Component({
  selector: 'celulares-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class CelularesListComponent implements OnInit {
  private celulares: Celular[];
  private operadorasCelular?: OperadoraCelular[];
  private modelosCelular?: Modelo[];
  private marcasCelular?: Marcas[];
  private colores?: Color[];
  currentCelular: Celular = new Celular();

  constructor(
    private celularService: CelularService,
    private marcasService: MarcaService,
    private modelosService: ModeloService,
    private operadorasService: OperadoraCelularService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {
    this.celulares = [];
  }

  ngOnInit(): void {
    this.retrieveMarcasCelulares();
    this.retrieveOperadorasCelular();
    this.retrieveColores();
    this.refreshList();
  }

  private retrieveCelulares(): void {
    this.celularService.getAll().subscribe(
      (data) => {
        this.celulares = data;
        this.celulares?.forEach((value: Celular) => {
          value.nombreColor = this.colores?.find(
            (color) => color.id === value.color
          )?.nombre;
          value.nombreMarca = this.marcasCelular?.find(
            (marca) => marca.id === value.marca
          )?.nombre;
          value.nombreOperadora = this.operadorasCelular?.find(
            (operadora) => operadora.id === value.operadora
          )?.nombre;
          this.modelosService.getAll(value.marca).subscribe(
            (data) => {
              value.nombreModelo = data?.find(
                (modelo) => modelo.id === value.modelo
              )?.nombre;
            },
            (error) => {}
          );
        });
      },
      (error) => {}
    );
  }

  private retrieveMarcasCelulares(): void {
    this.marcasService.getAll(3).subscribe(
      (data) => {
        this.marcasCelular = data;
      },
      (error) => {}
    );
  }

  retrieveModelosCelular(): void {
    if (this.currentCelular.marca) {
      this.modelosService.getAll(this.currentCelular.marca).subscribe(
        (data) => {
          this.modelosCelular = data;
        },
        (error) => {}
      );
    }
  }

  private retrieveOperadorasCelular(): void {
    this.operadorasService.getAll().subscribe((data) => {
      this.operadorasCelular = data;
    });
  }

  private retrieveColores(): void {
    this.colorService.getAll().subscribe(
      (data) => {
        this.colores = data;
      },
      (error) => {}
    );
  }

  getCelulares(): Celular[] {
    return this.celulares;
  }

  getModelosCelular(): Modelo[] | undefined {
    return this.modelosCelular;
  }

  getOperadorasCelular(): OperadoraCelular[] | undefined {
    return this.operadorasCelular;
  }

  getMarcasCelular(): Marcas[] | undefined {
    return this.marcasCelular;
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
          this.celularService.create(result).subscribe(
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
    this.retrieveModelosCelular();
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-basic-title',
        size: 'lg',
        backdrop: 'static',
      })
      .result.then(
        (result) => {
          this.celularService.update(result.id, result).subscribe(
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
          this.celularService.update(result.id, result).subscribe(
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
    this.retrieveCelulares();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentCelular = {};
  }

  setActiveCelular(celular: Celular): void {
    this.currentCelular = celular;
  }
}
