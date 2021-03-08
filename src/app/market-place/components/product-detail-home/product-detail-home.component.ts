
import { Component, } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-product-detail-home',
    template: `
       <h3 class='mat-subheading-2'> To load a purchase contract details please select the corresponding item from the left panel</h3>
    `,
  })
  export class ProductDetailHomeComponent {

  }

