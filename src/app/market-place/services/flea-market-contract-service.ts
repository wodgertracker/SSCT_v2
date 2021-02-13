
import { Injectable } from '@angular/core';
import { MarketPlaceAnchorModule } from '../market-place-anchor.module';
import { FleaMarketContractToken } from './tokens/flea-market-contract-token';
import { Observable, from, of, forkJoin } from 'rxjs';
import { map, tap, switchMap, mergeMap, exhaustMap } from 'rxjs/operators';
import { ethers, utils } from 'ethers';
import { PurchaseWidgetModel } from '../models';

@Injectable({ providedIn: MarketPlaceAnchorModule })
export class FleaMarketContractService {
  constructor(private contractToken: FleaMarketContractToken) {
  }

  public createPurchaseContract(product: any): Observable<string> {

    const commission = Math.floor(parseFloat(product.commission) * 100);
    const bytes32Key = utils.formatBytes32String(product.productKey);
    const wei = utils.parseEther(product.etherValue);

    const token =
      this.contractToken.createPurchaseContract(bytes32Key, product.description, product.ipfsHash, commission, {
        value: wei
      });
    return from(token)
      .pipe(
        switchMap((tx: any) => {

          console.log('Transaction', tx);
   
          // The following function waits for the transaction to be mined and it Returned a Promise which would resolve to the TransactionReceipt once it is mined.
          return from(tx.wait()).pipe(
            tap((txReceipt: any) => console.log('TransactionReceipt: ', txReceipt)),

            
          // The following function receipt will have an "events" Array, which will havethe emitted 'event LogCreatePurchaseContract(address sender, address contractAddress)'.
            map(txReceipt => txReceipt.events.pop()),
            map(txEvent => txEvent.args.contractAddress),
            tap(address => console.log('address: ', address)));
        }));

  }

  // The following function shows how to use a first observable in the project  
  private widgetObservable = (id: number): Observable<PurchaseWidgetModel> =>
    from(this.contractToken.getContractKeyAtIndex(id)).pipe(
      switchMap(key => from(this.contractToken.getContractByKey(key)).pipe(
        map(address => {

          const widget: PurchaseWidgetModel = {
            productKey: utils.parseBytes32String(key as ethers.utils.Arrayish),
            contractAddress: address as string
          };

          return widget;

        })
      ))
    )

  // The following function is based on https://www.learnrxjs.io/operators/combination/forkjoin.html
  public getPurchaseContractList(): Observable<PurchaseWidgetModel[]> {

    return from(this.contractToken.getContractCount()).pipe(

      map((bigNumber: ethers.utils.BigNumber) => bigNumber.toNumber()),
      tap((contractCount: number) => console.log('contractCount: ', contractCount)),

      switchMap((contractCount: number) => {

        if (contractCount === 0) {
          return of([]);
        } else {
          // we get array [0,1,....contractCount-1]
          const countArr: number[] = Array.from(Array(contractCount)).map((e, i) => i);
          const source = of(countArr);

          return source.pipe(
            mergeMap(ids => forkJoin(ids.map(this.widgetObservable)))

          );

        }
      })
    );
  }

  public getName(): Observable<string> {

    return from(this.contractToken.contractName()).pipe(
      map(name => name as string)
    );

  }

  public removePurchaseContract(productKey: string): Observable<string> {

    const bytes32Key = utils.formatBytes32String(productKey);

    // The function Calls the contract method, getting back the transaction tx
    const token = this.contractToken.removeContractByKey(bytes32Key);
    return from(token)
      .pipe(
        switchMap((tx: any) => {

          console.log('removeContractByKey Transaction', tx);
           
          //The following function waits for the transaction to be mined Returned a Promise which would resolve to the TransactionReceipt once it is mined.
          return from(tx.wait()).pipe(
            tap((txReceipt: any) => console.log('TransactionReceipt: ', txReceipt)),

        
            // The function will call  the last event
            map(txReceipt => txReceipt.events.pop()),
            tap(txEvent => console.log('txEvent: ', txEvent)),
            map(txEvent => {
              // The function retrieves the key parameter value from the event
              const key = txEvent.args.key;
              return utils.parseBytes32String(key as ethers.utils.Arrayish);
            }),

          );
        }));

  }


}




