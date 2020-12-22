import { Inventory } from '../app/_models/inventory';

export interface AppState {
  readonly inventory: Inventory[];
}