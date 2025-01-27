import { Component, OnInit } from '@angular/core';
import { FleaMarketContractService } from '../../services/flea-market-contract-service';
import { Observable } from 'rxjs';

import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-marketplace-home',
  templateUrl: './market-place-home.component.html',
})
export class MarketPlaceHomeComponent implements OnInit  {

  name$: Observable<string>;

  constructor(
    private fleaSrv: FleaMarketContractService,

  ) { }

  ngOnInit() {

    this.name$ = this.fleaSrv.getName();
  }

}
