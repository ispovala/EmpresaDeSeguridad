import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import * as moment from 'moment';
import { Moment } from 'moment';
import { CreateOrEditVehiculoModalComponent } from '../../recursos/vehiculos/ce-modal/create-or-edit-vehiculo-modal.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
  },
};

@Component({
  selector: 'year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class YearPickerComponent
  implements ControlValueAccessor, AfterViewInit
{

  minDate = new Date(1900, 1, 1);
  maxDate = new Date();
  /*
  date = new FormControl({ value: moment(), disabled: true });

  chosenYearHandler(normalizedYear: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = this.date.value;
    ctrlValue.year(normalizedYear.year());
    this.date.setValue(ctrlValue);
    datepicker.close();
  }
  */

  /*
  _max?: Moment;
  @Input()
  get max(): number | Date | undefined {
    return this._max ? this._max.year() : undefined;
  }
  set max(max: number | Date | undefined) {
    if (max) {
      const momentDate =
        typeof max === 'number' ? moment([max, 0, 1]) : moment(max);
      this._max = momentDate.isValid() ? momentDate : undefined;
    }
  }

  _min?: Moment;
  @Input()
  get min(): number | Date | undefined {
    return this._min ? this._min.year() : undefined;
  }
  set min(min: number | Date | undefined) {
    if (min) {
      const momentDate =
        typeof min === 'number' ? moment([min, 0, 1]) : moment(min);
      this._min = momentDate.isValid() ? momentDate : undefined;
    }
  }
  */

  @ViewChild(MatDatepicker) _picker?: MatDatepicker<Moment>;

  _inputCtrl: FormControl = new FormControl({ value: moment(), disabled: true });

  // Function to call when the date changes.
  onChange = (year: Date) => {};

  // Function to call when the input is touched (when a star is clicked).
  onTouched = () => {};

  /** send the focus away from the input so it doesn't open again */
  _takeFocusAway = (datepicker: MatDatepicker<Moment>) => {};

  constructor(private parent: CreateOrEditVehiculoModalComponent) {}

  ngAfterViewInit() {
    /*this._takeFocusAway = this.parent._takeFocusAway;*/
  }

  writeValue(date: Date): void {
    if (date && this._isYearEnabled(date.getFullYear())) {
      const momentDate = moment(date);
      if (momentDate.isValid()) {
        momentDate.set({ date: 1 });
        this._inputCtrl.setValue(moment(date), { emitEvent: false });
      }
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    isDisabled
      ? (this._picker != undefined ? this._picker.disabled = true : undefined)
      : (this._picker != undefined ? this._picker.disabled = false : undefined);

    isDisabled ? this._inputCtrl.disable() : this._inputCtrl.enable();
  }

  _yearSelectedHandler(chosenDate: Moment, datepicker: MatDatepicker<Moment>) {
    datepicker.close();

    if (!this._isYearEnabled(chosenDate.year())) {
      return;
    }

    chosenDate.set({ date: 1 });

    this._inputCtrl.setValue(chosenDate, { emitEvent: false });
    this.onChange(chosenDate.toDate());
    this.onTouched();
  }

  _openDatepickerOnClick(datepicker: MatDatepicker<Moment>) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }

  /** Whether the given year is enabled. */
  private _isYearEnabled(year: number) {
    // disable if the year is greater than maxDate lower than minDate
    if (
      year === undefined ||
      year === null ||
      (this.maxDate && year > this.maxDate.getFullYear()) ||
      (this.minDate && year < this.minDate.getFullYear())
    ) {
      return false;
    }

    return true;
  }
}
