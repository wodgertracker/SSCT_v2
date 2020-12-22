import { Injectable } from '@angular/core'
import { Action } from '@ngrx/store'
import { Inventory } from '../app/_models/inventory'

// Section 2
export const ADD_TUTORIAL       = '[TUTORIAL] Add'
export const REMOVE_TUTORIAL    = '[TUTORIAL] Remove'

// Section 3
export class AddInventory implements Action {
    readonly type = ADD_TUTORIAL

    constructor(public payload: Inventory) {}
}

export class RemoveInventory implements Action {
    readonly type = REMOVE_TUTORIAL

    constructor(public payload: number) {}
}

// Section 4
export type Actions = AddInventory | RemoveInventory