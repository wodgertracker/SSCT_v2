
import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackBarInterface } from '../../models';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-snack-bar',
    styleUrls: ['./snack-bar.component.css'],
    templateUrl: './snack-bar.component.html'
})
export class SnackBarComponent {
    constructor(
        @Inject(MAT_SNACK_BAR_DATA)
        public data: SnackBarInterface) { }
}
