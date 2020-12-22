import { Action } from '@ngrx/store'
import { Inventory } from '../_models/inventory'
import * as InventoryActions from '../../actions/inventory.actions'

// Section 1
const initialState: Inventory= {
    name: 'Initial Tutorial',
    type :'string',
    description:'string',
    units :1,
    quantity:1

}

// Section 2
export function reducer(state: Inventory[] = [initialState], action: InventoryActions.Actions
    
    
) {

    // Section 3
    switch(action.type) {
        case InventoryActions.ADD_TUTORIAL:
            return [...state, action.payload];
        default:
            return state;
    }
}