import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Arma } from 'src/app/core/models/recursos/arma/arma.model';
import { CalibreArma } from 'src/app/core/models/recursos/arma/calibre-arma.model';
import { Color } from 'src/app/core/models/recursos/color.model';
import { Marcas } from 'src/app/core/models/recursos/marcas.model';
import { Tipos } from 'src/app/core/models/recursos/tipos.model';
import { ArmaService } from 'src/app/core/services/recursos/arma/arma.service';
import { CalibreArmaService } from 'src/app/core/services/recursos/arma/calibre-arma.service';
import { ColorService } from 'src/app/core/services/recursos/color.service';
import { MarcaService } from 'src/app/core/services/recursos/marca.service';
import { TipoService } from 'src/app/core/services/recursos/tipo.service';

@Component({
  selector: 'armas-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ArmasListComponent implements OnInit {
  private armas: Arma[];
  private calibresArma?: CalibreArma[];
  private tiposArma?: Tipos[];
  private marcasArma?: Marcas[];
  private colores?: Color[];
  currentArma: Arma = new Arma();

  constructor(
    private armaService: ArmaService,
    private calibresArmaService: CalibreArmaService,
    private tiposService: TipoService,
    private marcasService: MarcaService,
    private colorService: ColorService,
    private modalService: NgbModal
  ) {
    this.armas = [];
  }

  ngOnInit(): void {
    this.retrieveCalibresArma();
    this.retrieveTiposArma();
    this.retrieveMarcasArma();
    this.retrieveColores();
    this.refreshList();
  }

  private retrieveArmas(): void {
    this.armaService.getAll().subscribe(
      (data) => {
        this.armas = data;
        this.armas?.forEach((value: Arma) => {
          value.nombreCalibre = this.calibresArma?.find(
            (calibre) => calibre.id === value.calibre
          )?.nombre;
          value.nombreColor = this.colores?.find(
            (color) => color.id === value.color
          )?.nombre;
          value.nombreMarca = this.marcasArma?.find(
            (marca) => marca.id === value.marca
          )?.nombre;
          value.nombreTipo = this.tiposArma?.find(
            (tipo) => tipo.id === value.tipo
          )?.nombre;
        });
      },
      (error) => {}
    );
  }

  private retrieveCalibresArma(): void {
    this.calibresArmaService.getAll().subscribe(
      (data) => {
        this.calibresArma = data;
      },
      (error) => {}
    );
  }

  private retrieveTiposArma(): void {
    this.tiposService.getAll(1).subscribe(
      (data) => {
        this.tiposArma = data;
      },
      (error) => {}
    );
  }

  private retrieveMarcasArma(): void {
    this.marcasService.getAll(1).subscribe(
      (data) => {
        this.marcasArma = data;
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

  getArmas(): Arma[] {
    return this.armas;
  }

  getCalibresArma(): CalibreArma[] | undefined {
    return this.calibresArma;
  }

  getTiposArma(): Tipos[] | undefined {
    return this.tiposArma;
  }

  getMarcasArma(): Marcas[] | undefined {
    return this.marcasArma;
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
          this.armaService.create(result).subscribe(
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
          this.armaService.update(result.id, result).subscribe(
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
          this.armaService.update(result.id, result).subscribe(
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
    this.retrieveArmas();
    this.resetCurrent();
  }

  resetCurrent(): void {
    this.currentArma = {};
  }

  setActiveArma(arma: Arma): void {
    this.currentArma = arma;
  }
}
