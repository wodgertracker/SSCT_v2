(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["market-place-market-place-module"],{

/***/ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js ***!
  \*******************************************************************/
/*! exports provided: Dictionary, createEntityAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dictionary", function() { return Dictionary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/**
 * @license NgRx 9.2.1
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */



/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/entity_state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template V
 * @return {?}
 */
function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
/**
 * @template V
 * @return {?}
 */
function createInitialStateFactory() {
    /**
     * @param {?=} additionalState
     * @return {?}
     */
    function getInitialState(additionalState = {}) {
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/state_selectors.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @return {?}
 */
function createSelectorsFactory() {
    /**
     * @param {?=} selectState
     * @return {?}
     */
    function getSelectors(selectState) {
        /** @type {?} */
        const selectIds = (/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.ids);
        /** @type {?} */
        const selectEntities = (/**
         * @param {?} state
         * @return {?}
         */
        (state) => state.entities);
        /** @type {?} */
        const selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, (/**
         * @param {?} ids
         * @param {?} entities
         * @return {?}
         */
        (ids, entities) => ids.map((/**
         * @param {?} id
         * @return {?}
         */
        (id) => ((/** @type {?} */ (entities)))[id]))));
        /** @type {?} */
        const selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, (/**
         * @param {?} ids
         * @return {?}
         */
        ids => ids.length));
        if (!selectState) {
            return {
                selectIds,
                selectEntities,
                selectAll,
                selectTotal,
            };
        }
        return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
        };
    }
    return { getSelectors };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/state_adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const DidMutate = {
    EntitiesOnly: 0,
    Both: 1,
    None: 2,
};
DidMutate[DidMutate.EntitiesOnly] = 'EntitiesOnly';
DidMutate[DidMutate.Both] = 'Both';
DidMutate[DidMutate.None] = 'None';
/**
 * @template V, R
 * @param {?} mutator
 * @return {?}
 */
function createStateOperator(mutator) {
    return (/**
     * @template S
     * @param {?} arg
     * @param {?} state
     * @return {?}
     */
    function operation(arg, state) {
        /** @type {?} */
        const clonedEntityState = {
            ids: [...state.ids],
            entities: Object.assign({}, state.entities),
        };
        /** @type {?} */
        const didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return Object.assign(Object.assign({}, state), { entities: clonedEntityState.entities });
        }
        return state;
    });
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} entity
 * @param {?} selectId
 * @return {?}
 */
function selectIdValue(entity, selectId) {
    /** @type {?} */
    const key = selectId(entity);
    if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])() && key === undefined) {
        console.warn('@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.', 'You should probably provide your own `selectId` implementation.', 'The entity that was passed:', entity, 'The `selectId` implementation:', selectId.toString());
    }
    return key;
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/unsorted_state_adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} selectId
 * @return {?}
 */
function createUnsortedStateAdapter(selectId) {
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function addOneMutably(entity, state) {
        /** @type {?} */
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function addManyMutably(entities, state) {
        /** @type {?} */
        let didMutate = false;
        for (const entity of entities) {
            didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function setAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function setOneMutably(entity, state) {
        /** @type {?} */
        const key = selectIdValue(entity, selectId);
        if (key in state.entities) {
            state.entities[key] = entity;
            return DidMutate.EntitiesOnly;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    /**
     * @param {?} key
     * @param {?} state
     * @return {?}
     */
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    /**
     * @param {?} keysOrPredicate
     * @param {?} state
     * @return {?}
     */
    function removeManyMutably(keysOrPredicate, state) {
        /** @type {?} */
        const keys = keysOrPredicate instanceof Array
            ? keysOrPredicate
            : state.ids.filter((/**
             * @param {?} key
             * @return {?}
             */
            (key) => keysOrPredicate(state.entities[key])));
        /** @type {?} */
        const didMutate = keys
            .filter((/**
         * @param {?} key
         * @return {?}
         */
        (key) => key in state.entities))
            .map((/**
         * @param {?} key
         * @return {?}
         */
        (key) => delete state.entities[key])).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter((/**
             * @param {?} id
             * @return {?}
             */
            (id) => id in state.entities));
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    /**
     * @template S
     * @param {?} state
     * @return {?}
     */
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    /**
     * @param {?} keys
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function takeNewKey(keys, update, state) {
        /** @type {?} */
        const original = state.entities[update.id];
        /** @type {?} */
        const updated = Object.assign({}, original, update.changes);
        /** @type {?} */
        const newKey = selectIdValue(updated, selectId);
        /** @type {?} */
        const hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    /**
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    /**
     * @param {?} updates
     * @param {?} state
     * @return {?}
     */
    function updateManyMutably(updates, state) {
        /** @type {?} */
        const newKeys = {};
        updates = updates.filter((/**
         * @param {?} update
         * @return {?}
         */
        update => update.id in state.entities));
        /** @type {?} */
        const didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            /** @type {?} */
            const didMutateIds = updates.filter((/**
             * @param {?} update
             * @return {?}
             */
            update => takeNewKey(newKeys, update, state))).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map((/**
                 * @param {?} id
                 * @return {?}
                 */
                (id) => newKeys[id] || id));
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    /**
     * @param {?} map
     * @param {?} state
     * @return {?}
     */
    function mapMutably(map, state) {
        /** @type {?} */
        const changes = state.ids.reduce((/**
         * @param {?} changes
         * @param {?} id
         * @return {?}
         */
        (changes, id) => {
            /** @type {?} */
            const change = map(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id, changes: change });
            }
            return changes;
        }), []);
        /** @type {?} */
        const updates = changes.filter((/**
         * @param {?} __0
         * @return {?}
         */
        ({ id }) => id in state.entities));
        return updateManyMutably(updates, state);
    }
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function upsertManyMutably(entities, state) {
        /** @type {?} */
        const added = [];
        /** @type {?} */
        const updated = [];
        for (const entity of entities) {
            /** @type {?} */
            const id = selectIdValue(entity, selectId);
            if (id in state.entities) {
                updated.push({ id, changes: entity });
            }
            else {
                added.push(entity);
            }
        }
        /** @type {?} */
        const didMutateByUpdated = updateManyMutably(updated, state);
        /** @type {?} */
        const didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    return {
        removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(setAllMutably),
        setAll: createStateOperator(setAllMutably),
        setOne: createStateOperator(setOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
        map: createStateOperator(mapMutably),
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/sorted_state_adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?} selectId
 * @param {?} sort
 * @return {?}
 */
function createSortedStateAdapter(selectId, sort) {
    const { removeOne, removeMany, removeAll } = createUnsortedStateAdapter(selectId);
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    /**
     * @param {?} newModels
     * @param {?} state
     * @return {?}
     */
    function addManyMutably(newModels, state) {
        /** @type {?} */
        const models = newModels.filter((/**
         * @param {?} model
         * @return {?}
         */
        model => !(selectIdValue(model, selectId) in state.entities)));
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    /**
     * @param {?} models
     * @param {?} state
     * @return {?}
     */
    function setAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function setOneMutably(entity, state) {
        /** @type {?} */
        const id = selectIdValue(entity, selectId);
        if (id in state.entities) {
            state.ids = state.ids.filter((/**
             * @param {?} val
             * @return {?}
             */
            (val) => val !== id));
            merge([entity], state);
            return DidMutate.Both;
        }
        else {
            return addOneMutably(entity, state);
        }
    }
    /**
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    /**
     * @param {?} models
     * @param {?} update
     * @param {?} state
     * @return {?}
     */
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        /** @type {?} */
        const original = state.entities[update.id];
        /** @type {?} */
        const updated = Object.assign({}, original, update.changes);
        /** @type {?} */
        const newKey = selectIdValue(updated, selectId);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    /**
     * @param {?} updates
     * @param {?} state
     * @return {?}
     */
    function updateManyMutably(updates, state) {
        /** @type {?} */
        const models = [];
        /** @type {?} */
        const didMutateIds = updates.filter((/**
         * @param {?} update
         * @return {?}
         */
        update => takeUpdatedModel(models, update, state))).length >
            0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            /** @type {?} */
            const originalIds = state.ids;
            /** @type {?} */
            const updatedIndexes = [];
            state.ids = state.ids.filter((/**
             * @param {?} id
             * @param {?} index
             * @return {?}
             */
            (id, index) => {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes.push(index);
                    return false;
                }
            }));
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes.every((/**
                 * @param {?} i
                 * @return {?}
                 */
                (i) => state.ids[i] === originalIds[i]))) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    /**
     * @param {?} updatesOrMap
     * @param {?} state
     * @return {?}
     */
    function mapMutably(updatesOrMap, state) {
        /** @type {?} */
        const updates = state.ids.reduce((/**
         * @param {?} changes
         * @param {?} id
         * @return {?}
         */
        (changes, id) => {
            /** @type {?} */
            const change = updatesOrMap(state.entities[id]);
            if (change !== state.entities[id]) {
                changes.push({ id, changes: change });
            }
            return changes;
        }), []);
        return updateManyMutably(updates, state);
    }
    /**
     * @param {?} entity
     * @param {?} state
     * @return {?}
     */
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    /**
     * @param {?} entities
     * @param {?} state
     * @return {?}
     */
    function upsertManyMutably(entities, state) {
        /** @type {?} */
        const added = [];
        /** @type {?} */
        const updated = [];
        for (const entity of entities) {
            /** @type {?} */
            const id = selectIdValue(entity, selectId);
            if (id in state.entities) {
                updated.push({ id, changes: entity });
            }
            else {
                added.push(entity);
            }
        }
        /** @type {?} */
        const didMutateByUpdated = updateManyMutably(updated, state);
        /** @type {?} */
        const didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
    }
    /**
     * @param {?} models
     * @param {?} state
     * @return {?}
     */
    function merge(models, state) {
        models.sort(sort);
        /** @type {?} */
        const ids = [];
        /** @type {?} */
        let i = 0;
        /** @type {?} */
        let j = 0;
        while (i < models.length && j < state.ids.length) {
            /** @type {?} */
            const model = models[i];
            /** @type {?} */
            const modelId = selectIdValue(model, selectId);
            /** @type {?} */
            const entityId = state.ids[j];
            /** @type {?} */
            const entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach((/**
         * @param {?} model
         * @param {?} i
         * @return {?}
         */
        (model, i) => {
            state.entities[selectId(model)] = model;
        }));
    }
    return {
        removeOne,
        removeMany,
        removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(setAllMutably),
        setAll: createStateOperator(setAllMutably),
        setOne: createStateOperator(setOneMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        map: createStateOperator(mapMutably),
    };
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/create_adapter.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @template T
 * @param {?=} options
 * @return {?}
 */
function createEntityAdapter(options = {}) {
    const { selectId, sortComparer } = Object.assign({ sortComparer: false, selectId: (/**
         * @param {?} instance
         * @return {?}
         */
        (instance) => instance.id) }, options);
    /** @type {?} */
    const stateFactory = createInitialStateFactory();
    /** @type {?} */
    const selectorsFactory = createSelectorsFactory();
    /** @type {?} */
    const stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return Object.assign(Object.assign(Object.assign({ selectId,
        sortComparer }, stateFactory), selectorsFactory), stateAdapter);
}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 * @template T
 */
function DictionaryNum() { }
/**
 * @abstract
 * @template T
 */
class Dictionary {
}
/**
 * @record
 * @template T
 */
function UpdateStr() { }
if (false) {}
/**
 * @record
 * @template T
 */
function UpdateNum() { }
if (false) {}
/**
 * @record
 * @template T
 */
function EntityState() { }
if (false) {}
/**
 * @record
 * @template T
 */
function EntityDefinition() { }
if (false) {}
/**
 * @record
 * @template T
 */
function EntityStateAdapter() { }
if (false) {}
/**
 * @record
 * @template T, V
 */
function EntitySelectors() { }
if (false) {}
/**
 * @record
 * @template T
 */
function EntityAdapter() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/src/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: modules/entity/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=entity.js.map

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/market-place-home/market-place-home.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/market-place-home/market-place-home.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"mat-headline text-center\">Inventory Management System</h1>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/purchase-contract-detail/purchase-contract-detail.component.html":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/purchase-contract-detail/purchase-contract-detail.component.html ***!
  \************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"contract; then selectedTmpl; else noSelectedTmpl\">\n</ng-container>\n\n<ng-template #selectedTmpl>\n\n  <mat-card-content>\n    <section fxLayout=\"row\" fxLayoutAlign=\"start center\">\n     \n      <h3 class=\"mat-h3\" fxFlex=\"38\" fxFlexOffset=\"2\">Contract Status:</h3>\n      <mat-chip fxFlex [selected]=\"true\" [color]=\"statusColors[contract.state].color\">{{\n        enumToString(statusColors[contract.state].state)\n                  }}</mat-chip>\n\n      <span fxFlex=\"20\" fxFlexOffset=\"23\">\n        <button mat-icon-button color=\"warn\" matTooltip=\"Abort contract by seller\" matTooltipPosition=\"above\"\n          (click)=\"abortMe.emit()\" [disabled]=\"!canAbort\">\n          <mat-icon>flash_on</mat-icon>\n        </button>\n\n        <button mat-icon-button color=\"warn\" matTooltip=\"Remove contract by owner\" matTooltipPosition=\"above\"\n          (click)=\"remove.emit(contract.productKey)\" [disabled]=\"!removeFromListing\">\n          <mat-icon>delete_forever</mat-icon>\n        </button>\n      </span>\n\n    </section>\n\n\n    <section>\n      <mat-list dense>\n        <mat-list-item>\n          <h3 class=\"mat-h3\">Product Key:</h3>\n          <span>{{ contract.productKey }}</span>\n        </mat-list-item>\n\n        <mat-list-item>\n          <h3 class=\"mat-h3\">Product Description</h3>\n          <span>{{ contract.description }}</span>\n        </mat-list-item>\n\n        <!-- \n        <mat-list-item>\n          <h3 class=\"mat-h3\">Contract Address</h3>\n          <span>{{ contract.contractAddress }}</span>\n        </mat-list-item>\n        -->\n\n        <mat-list-item>\n          <h3 class=\"mat-h3\">Price</h3>\n          <span>{{ contract.price }} ETH</span>\n        </mat-list-item>\n\n        <mat-list-item>\n          <h3 class=\"mat-h3\">Balance</h3>\n          <span>{{ contract.balance }} ETH</span>\n        </mat-list-item>\n\n        <mat-list-item>\n          <h3 class=\"mat-h3\">Seller Address</h3>\n          <span>{{ contract.sellerAddress }}</span>\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"contract.buyerAddress\">\n          <h3 class=\"mat-h3\">Buyer Address</h3>\n          <span>{{ contract.buyerAddress }}</span>\n        </mat-list-item>\n\n        <mat-list-item *ngIf=\"showCommission\">\n          <h3 class=\"mat-h3\">Quantity</h3>\n          <span>{{ contract.commission/100}}</span>\n        </mat-list-item>\n\n\n      </mat-list>\n    </section>\n\n    <mat-divider></mat-divider>\n\n    <section fxLayout=\"row\" fxLayoutAlign=\"start center\" style=\"padding: 15px 0px\">\n\n      <h3 class=\"mat-h3\" fxFlex=\"36\" fxFlexOffset=\"2\">Product Image</h3>\n      <img #ipfsImage height=\"120px\" width=\"120px\">\n\n    </section>\n\n    <mat-divider></mat-divider>\n\n    <section fxLayout=\"row wrap\" fxLayoutAlign=\"space-between center\" style=\"margin-top: 10px\">\n\n      <mat-form-field appearance=\"outline\" *ngIf=\"canBuy\">\n        <mat-label>Value in ETH. (2X price)</mat-label>\n        <input matInput [formControl]=\"buyerConfirmPrice\" required>\n        <mat-error *ngIf=\"buyerConfirmPrice.invalid && buyerConfirmPrice.touched\">{{validatorError}}</mat-error>\n        <mat-icon matSuffix>sentiment_very_satisfied</mat-icon>\n        <mat-hint>Producer Confirm Purchase</mat-hint>\n      </mat-form-field>\n\n      <button mat-raised-button color=\"warn\" *ngIf=\"canBuy\" [disabled]=\"!(buyerConfirmPrice.valid && buyerConfirmPrice.dirty)\" (click)=\"buy.emit(buyerConfirmPrice.value)\">\n        Producer Execute Purchase</button>\n      <button mat-raised-button color=\"accent\" *ngIf=\"canDelivery\" (click)=\"delivery.emit()\">\n        Supplier Confirm Delivery</button> \n      <button mat-raised-button color=\"primary\" matTooltip=\"Seller click to receive escrow\" matTooltipPosition=\"above\" *ngIf=\"canReleaseEscrow\" (click)=\"releaseEscrow.emit()\">\n        Supplier Receive Escrow <mat-icon>local_bar</mat-icon>\n      </button>\n     \n\n    </section>\n    <mat-card-footer>\n\n    </mat-card-footer>\n\n  </mat-card-content>\n\n\n</ng-template>\n\n\n\n<ng-template #noSelectedTmpl>\n  ...Please wait for the contract to load.\n</ng-template>\n\n\n\n<!-- \n  <p>Debug purchase contract details: {{ contract | json }}</p>\n  <p>IPFS image: {{ image }}</p>\n  -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/purchase-contract-list/purchase-contract-list.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/purchase-contract-list/purchase-contract-list.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n\n<mat-list>\n\n    <mat-list-item *ngFor=\"let product of products\" (click)=\"selectMe.emit(product)\">\n        <img matListAvatar src=\"../../../../assets/img/purchase-contract.png\">\n        <h3 class=\"mat-h3\" mat-line>{{product.productKey}}</h3>\n        <small class=\"mat-caption gray-color\" mat-line> {{product.contractAddress}} </small>\n        <mat-divider></mat-divider>\n    </mat-list-item>\n\n</mat-list>\n   \n\n\n   \n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<h2 mat-dialog-title>IPFS Product Image</h2>\n\n<div *ngIf=\"(image$ | async) as image else loading\">\n</div>\n\n <mat-dialog-content class=\"text-center\">\n    \n    <img #ipfsImage height=\"300px\" width=\"300px\">\n    \n    <ng-template #loading>\n        <mat-progress-spinner \n            color=\"warn\"\n            mode=\"indeterminate\"\n            value=\"50\"\n            diameter=\"100\"\n            strokeWidth=\"10\">\n        </mat-progress-spinner>\n    </ng-template>\n    \n </mat-dialog-content>\n\n <mat-dialog-actions>\n    <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"true\"  cdkFocusInitial>OK</button>\n </mat-dialog-actions>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-chip-list> </mat-chip-list>\n<div fxLayout=\"row\" fxLayoutAlign=\"center start\">\n\n  <mat-card fxFlex=\"60\">\n    <mat-card-subtitle>\n      New Inventory Contract\n    </mat-card-subtitle>\n\n    <form [formGroup]=\"frmGroup\" novalidate>\n\n      <mat-card-content>\n        <div fxLayout=\"row\" fxLayoutGap=\"6px\">\n          <span class=\"red-color\">*</span>\n          <div class=\"mat-caption text-muted\">required fields</div>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field [color]=\"'accent'\" fxFlex>\n            <input matInput placeholder=\"Unique Product Key *\" formControlName=\"productKey\" />\n            <mat-error *ngIf=\"required('productKey')\">Value is required</mat-error>\n            <mat-error *ngIf=\"invalid32BytesKey('productKey')\">\n              Invalid product key string. Must be less than 32 bytes</mat-error>\n          </mat-form-field>\n        </div>\n\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field [color]=\"'accent'\" fxFlex>\n            <input matInput placeholder=\"Description *\" formControlName=\"description\" />\n            <mat-error *ngIf=\"required('description')\">Value is required</mat-error>\n          </mat-form-field>\n        </div>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <mat-form-field [color]=\"'accent'\" fxFlex=\"45\">\n            <input matInput placeholder=\"Value in ether. Has to include 2x price *\" formControlName=\"etherValue\" />\n            <span matSuffix>$ETH</span>\n            <mat-error *ngIf=\"required('etherValue')\">Value is required</mat-error>\n            <mat-error *ngIf=\"invalidPattern('etherValue')\">Invalid ether value format. Has to be (#.###)</mat-error>\n          </mat-form-field>\n\n\n          <mat-form-field [color]=\"'accent'\" fxFlex=\"45\" fxFlexOffset=\"40px\">\n            <mat-select placeholder=\"Quantity *\" formControlName=\"commission\">\n              <mat-option *ngFor=\"let item of commissions\" [value]=\"item\">\n                {{item}}\n              </mat-option>\n            </mat-select>\n            <span matSuffix></span>\n            <mat-error *ngIf=\"required('description')\">Value is required</mat-error>\n          </mat-form-field>\n\n        </div>\n\n\n      </mat-card-content>\n\n      <input type=\"file\" #file style=\"display: none\" (change)=\"onFileChange($event)\" />\n\n      <mat-card-actions>\n        <button mat-raised-button color=\"primary\" (click)=\"selectFile()\">\n           Product Image \n          <mat-icon>category</mat-icon>\n        </button>\n\n        <button mat-raised-button color=\"accent\" *ngIf=\"fileBlob\" (click)=\"uploadFile()\"\n          [disabled]=\"formControl('fileArg').invalid\">\n          Upload To IPFS\n          <mat-icon>offline_bolt</mat-icon>\n        </button>\n\n      </mat-card-actions>\n\n      <mat-card-content *ngIf=\"fileBlob\">\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n          <div fxFlex=\"25\" class=\"text-center\">Image</div>\n          <div fxFlex class=\"text-center\">IPFS Hash</div>\n          <div fxFlex=\"15\" class=\"text-center\">Upload Status</div>\n        </div>\n        <p></p>\n\n        <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n\n          <ng-container *ngIf=\"formControl('fileArg').invalid; then showError; else showImage\">\n          </ng-container>\n\n          <ng-template #showError>\n            <div fxFlex=\"25\" class=\"text-center\">\n\n              <mat-error mat-line *ngIf=\"requiredFile('fileArg')\">You must choose a file</mat-error>\n              <mat-error mat-line *ngIf=\"invalidPatternFile('fileArg')\">Invalid file image extension</mat-error>\n\n            </div>\n          </ng-template>\n\n          <ng-template #showImage>\n            <div fxFlex=\"25\" class=\"text-center\">\n              <img [src]=\"fileContent\" height=\"200\" width=\"200\" />\n              <p> {{fileBlob.name }} </p>\n            </div>\n          </ng-template>\n\n\n          <div fxFlex>\n            <div *ngIf=\"(ipfsHash$ | async) as ipfsHash;\" class=\"text-center\">\n\n              <button mat-stroked-button color=\"warn\" matTooltip=\"Click to show image from IPFS\" (click)=\"loadImage()\">\n                {{ipfsHash}}\n                <mat-icon>visibility</mat-icon>\n              </button>\n            </div>\n\n          </div>\n\n          <div fxFlex=\"15\" class=\"text-center\">\n\n            <div *ngIf=\"(uploadStatus$ | async) as status;\">\n\n              <div *ngIf=\"inProgress(status); else idle\">\n                <mat-progress-spinner color=\"warn\" mode=\"indeterminate\" value=\"50\" diameter=\"50\" strokeWidth=\"5\">\n                </mat-progress-spinner>\n              </div>\n\n              <ng-template #idle>\n                <mat-chip *ngIf=\"isPending(status)\">{{ status }}</mat-chip>\n                <mat-chip *ngIf=\"isSuccess(status)\" selected=\"true\" color=\"accent\">\n                  {{ status }}\n                </mat-chip>\n                <mat-chip *ngIf=\"isError(status)\" selected=\"true\" color=\"warn\">\n                  {{status}}\n                </mat-chip>\n              </ng-template>\n\n            </div>\n\n          </div>\n\n        </div>\n\n      </mat-card-content>\n\n      <mat-card-actions fxLayout=\"row\" fxLayoutAlign=\"end center\">\n        <button mat-flat-button color=\"warn\" [disabled]=\"frmGroup.pristine || frmGroup.invalid\" (click)=\"onCreate()\"\n          class='margin-right--10'>Create Contract</button>\n      </mat-card-actions>\n\n      <!--\n\n          <mat-card-content>\n\n              Control invalid: {{ formControl('fileArg').invalid | json}}\n              <br>\n              Control pristine: {{ formControl('fileArg').pristine | json}}\n\n          </mat-card-content>\n\n            -->\n\n    </form>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/containers/view-product-collection/view-product-collection.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/containers/view-product-collection/view-product-collection.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center stretch\" fxLayoutGap=\"16px\">\n\n\n    <mat-card fxFlex=\"50\">\n\n        <mat-card-subtitle>Inventory  List</mat-card-subtitle>\n\n        <mat-card-content fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\n            <mat-form-field color=\"accent\" fxFlex=\"40\">\n                <input matInput placeholder=\"Search for contact by key\" #contractKey>\n            </mat-form-field>\n            <div>\n                <a mat-mini-fab color=\"warn\" style=\"margin-right: 20px\"\n                routerLink='./make/new'\n                 matTooltip=\"create new contract\" matTooltipPosition=\"left\">\n                    <mat-icon>Add</mat-icon>\n                </a>\n            </div>\n        </mat-card-content>\n\n        <mat-card-content>\n            <app-purchase-contract-list [products]=\"filteredProducts$ | async\"\n                (selectMe)=\"selectPurchaseContract($event)\">\n            </app-purchase-contract-list>\n\n            <p *ngIf=\"(filteredProducts$ | async)?.length === 0\">\n                    No Products to Show \n            </p>\n        </mat-card-content>\n    </mat-card>\n\n\n    <mat-card fxFlex=\"50\">\n        <mat-card-subtitle>Purchase Contract Details</mat-card-subtitle>\n\n        <router-outlet></router-outlet>\n\n    </mat-card>\n\n\n\n\n\n\n\n</div>");

/***/ }),

/***/ "./src/app/market-place/components/index.ts":
/*!**************************************************!*\
  !*** ./src/app/market-place/components/index.ts ***!
  \**************************************************/
/*! exports provided: MarketPlaceHomeComponent, PurchaseContractListComponent, ShowIpfsImageComponent, ProductDetailHomeComponent, PurchaseContractDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _market_place_home_market_place_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./market-place-home/market-place-home.component */ "./src/app/market-place/components/market-place-home/market-place-home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceHomeComponent", function() { return _market_place_home_market_place_home_component__WEBPACK_IMPORTED_MODULE_0__["MarketPlaceHomeComponent"]; });

/* harmony import */ var _purchase_contract_list_purchase_contract_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-contract-list/purchase-contract-list.component */ "./src/app/market-place/components/purchase-contract-list/purchase-contract-list.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractListComponent", function() { return _purchase_contract_list_purchase_contract_list_component__WEBPACK_IMPORTED_MODULE_1__["PurchaseContractListComponent"]; });

/* harmony import */ var _show_ipfs_image_show_ipfs_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./show-ipfs-image/show-ipfs-image.component */ "./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShowIpfsImageComponent", function() { return _show_ipfs_image_show_ipfs_image_component__WEBPACK_IMPORTED_MODULE_2__["ShowIpfsImageComponent"]; });

/* harmony import */ var _product_detail_home_product_detail_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail-home/product-detail-home.component */ "./src/app/market-place/components/product-detail-home/product-detail-home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductDetailHomeComponent", function() { return _product_detail_home_product_detail_home_component__WEBPACK_IMPORTED_MODULE_3__["ProductDetailHomeComponent"]; });

/* harmony import */ var _purchase_contract_detail_purchase_contract_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchase-contract-detail/purchase-contract-detail.component */ "./src/app/market-place/components/purchase-contract-detail/purchase-contract-detail.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractDetailComponent", function() { return _purchase_contract_detail_purchase_contract_detail_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseContractDetailComponent"]; });








/***/ }),

/***/ "./src/app/market-place/components/market-place-home/market-place-home.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/market-place/components/market-place-home/market-place-home.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MarketPlaceHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceHomeComponent", function() { return MarketPlaceHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_flea_market_contract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/flea-market-contract-service */ "./src/app/market-place/services/flea-market-contract-service.ts");



let MarketPlaceHomeComponent = class MarketPlaceHomeComponent {
    constructor(fleaSrv) {
        this.fleaSrv = fleaSrv;
    }
    ngOnInit() {
        this.name$ = this.fleaSrv.getName();
    }
};
MarketPlaceHomeComponent.ctorParameters = () => [
    { type: _services_flea_market_contract_service__WEBPACK_IMPORTED_MODULE_2__["FleaMarketContractService"] }
];
MarketPlaceHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-marketplace-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./market-place-home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/market-place-home/market-place-home.component.html")).default,
    })
], MarketPlaceHomeComponent);



/***/ }),

/***/ "./src/app/market-place/components/product-detail-home/product-detail-home.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/market-place/components/product-detail-home/product-detail-home.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: ProductDetailHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailHomeComponent", function() { return ProductDetailHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ProductDetailHomeComponent = class ProductDetailHomeComponent {
};
ProductDetailHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-product-detail-home',
        template: `
       <h3 class='mat-subheading-2'> To load a purchase contract details please select the corresponding item from the left panel</h3>
    `,
    })
], ProductDetailHomeComponent);



/***/ }),

/***/ "./src/app/market-place/components/purchase-contract-detail/purchase-contract-detail.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/market-place/components/purchase-contract-detail/purchase-contract-detail.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: PurchaseContractDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractDetailComponent", function() { return PurchaseContractDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/tokens */ "./src/app/core/services/tokens/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models */ "./src/app/market-place/models/index.ts");





let PurchaseContractDetailComponent = class PurchaseContractDetailComponent {
    constructor(windowRef) {
        this.windowRef = windowRef;
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.abortMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.buy = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delivery = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.releaseEscrow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.receiveCommission = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.statusColors = [
            { state: _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Created, color: 'accent' },
            { state: _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Locked, color: 'primary' },
            { state: _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Canceled, color: undefined },
            { state: _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].ItemReceived, color: 'accent' },
            { state: _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].SellerPaid, color: 'primary' },
            { state: _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].OwnerPaid, color: 'primary' },
            { state: _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Completed, color: 'warn' },
        ];
        this.buyerConfirmPrice = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, , _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d+(\.\d{1,4})?$/)]);
        // based on http://geekswithblogs.net/PhubarBaz/archive/2013/11/25/typescript-enums-to-string.aspx
        this.enumToString = (state) => _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"][state];
    }
    ngOnChanges(changes) {
        if (this.imageRef) {
            this.imageRef.nativeElement.src = this.windowRef.window.URL.createObjectURL(this.image);
        }
        this.buyerConfirmPrice.reset();
    }
    get validatorError() {
        return this.buyerConfirmPrice.hasError('required') ? 'You must enter a value' :
            this.buyerConfirmPrice.hasError('pattern') ? 'Not a valid format' :
                '';
    }
    // only the deployer can remove contract and the state is Canceled
    get removeFromListing() {
        return (this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Canceled) &&
            (this.contract.ownerAddress === this.account);
    }
    // only the seller can abort contract and the state is Created
    get canAbort() {
        return (this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Created) &&
            (this.contract.sellerAddress === this.account);
    }
    /* criteria to buy action
     - contract in state Created
     - Buyer address is null
     - And it is should be not the Seller
  
    */
    get canBuy() {
        return (this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Created)
            && (!this.contract.buyerAddress)
            && (this.contract.sellerAddress !== this.account);
    }
    // only the buyer can perform this action and the state is Locked
    get canDelivery() {
        return (this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].Locked) &&
            (this.contract.buyerAddress === this.account);
    }
    // only the seller and the deployer can see commission field
    get showCommission() {
        return (this.contract.ownerAddress === this.account) ||
            (this.contract.sellerAddress === this.account);
    }
    get canReleaseEscrow() {
        return (this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].ItemReceived || this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].OwnerPaid) &&
            (this.contract.sellerAddress === this.account);
    }
    get canReceiveCommission() {
        return (this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].ItemReceived || this.contract.state === _models__WEBPACK_IMPORTED_MODULE_4__["ContractState"].SellerPaid) &&
            (this.contract.ownerAddress === this.account);
    }
};
PurchaseContractDetailComponent.ctorParameters = () => [
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_services_tokens__WEBPACK_IMPORTED_MODULE_3__["windowRefToken"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipfsImage')
], PurchaseContractDetailComponent.prototype, "imageRef", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PurchaseContractDetailComponent.prototype, "contract", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PurchaseContractDetailComponent.prototype, "image", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PurchaseContractDetailComponent.prototype, "account", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PurchaseContractDetailComponent.prototype, "remove", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PurchaseContractDetailComponent.prototype, "abortMe", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PurchaseContractDetailComponent.prototype, "buy", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PurchaseContractDetailComponent.prototype, "delivery", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PurchaseContractDetailComponent.prototype, "releaseEscrow", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PurchaseContractDetailComponent.prototype, "receiveCommission", void 0);
PurchaseContractDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-contract-detail',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./purchase-contract-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/purchase-contract-detail/purchase-contract-detail.component.html")).default,
        styles: ["\n    mat-list-item h3 {\n        width: 240px;\n      }\n\n    "]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_services_tokens__WEBPACK_IMPORTED_MODULE_3__["windowRefToken"]))
], PurchaseContractDetailComponent);



/***/ }),

/***/ "./src/app/market-place/components/purchase-contract-list/purchase-contract-list.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/market-place/components/purchase-contract-list/purchase-contract-list.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: PurchaseContractListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractListComponent", function() { return PurchaseContractListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let PurchaseContractListComponent = class PurchaseContractListComponent {
    constructor() {
        this.selectMe = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PurchaseContractListComponent.prototype, "products", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], PurchaseContractListComponent.prototype, "selectMe", void 0);
PurchaseContractListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-purchase-contract-list',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./purchase-contract-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/purchase-contract-list/purchase-contract-list.component.html")).default,
        styles: ["\n    mat-list {\n      position: relative;\n      max-height: 420px;\n      overflow: auto;\n      }\n\n    ", "\n    mat-list-item {\n      cursor: pointer;\n      }\n\n    mat-list-item:hover {\n      box-shadow: 3px 3px 12px -2px rgba(0, 0, 0, 0.5);\n    }\n\n    "]
    })
], PurchaseContractListComponent);



/***/ }),

/***/ "./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldC1wbGFjZS9jb21wb25lbnRzL3Nob3ctaXBmcy1pbWFnZS9zaG93LWlwZnMtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ShowIpfsImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowIpfsImageComponent", function() { return ShowIpfsImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _core_services_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/tokens */ "./src/app/core/services/tokens/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/market-place/store/reducers/index.ts");
/* harmony import */ var _store_actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions/ipfs-product-image.actions */ "./src/app/market-place/store/actions/ipfs-product-image.actions.ts");








let ShowIpfsImageComponent = class ShowIpfsImageComponent {
    constructor(store$, dialogRef, windowRef) {
        this.store$ = store$;
        this.dialogRef = dialogRef;
        this.windowRef = windowRef;
    }
    ngOnInit() {
        this.image$ = this.checkStore().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((blob) => this.imageRef.nativeElement.src = this.windowRef.window.URL.createObjectURL(blob)));
    }
    checkStore() {
        return this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getImageBlob"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getIpfsHash"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(([image, ipfsHash]) => {
            if (!image) {
                this.store$.dispatch(_store_actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_7__["downloadImage"]({ ipfsHash }));
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([image, ipfsHash]) => image), 
        // Notice that the filter() returns the observable sequence that contains elements
        // from the input sequence that satisfy the condition.
        // so in this case, if the image blob is null, the steam will not continue, but
        // when the image blob is not empty, we grab this value.
        // Which means we are waiting for the
        // image blob value has become not null and then we continue the stream and take this one value .
        // after that the whole stream will be completed.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(image => !!image), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
ShowIpfsImageComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: Window, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_services_tokens__WEBPACK_IMPORTED_MODULE_3__["windowRefToken"],] }] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('ipfsImage', { static: true })
], ShowIpfsImageComponent.prototype, "imageRef", void 0);
ShowIpfsImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        selector: 'app-show-ipfs-image',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./show-ipfs-image.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./show-ipfs-image.component.css */ "./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_services_tokens__WEBPACK_IMPORTED_MODULE_3__["windowRefToken"]))
], ShowIpfsImageComponent);



/***/ }),

/***/ "./src/app/market-place/containers/index.ts":
/*!**************************************************!*\
  !*** ./src/app/market-place/containers/index.ts ***!
  \**************************************************/
/*! exports provided: NewPurchaseContractComponent, ViewProductCollectionComponent, ViewPurchaseContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_purchase_contract_new_purchase_contract_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-purchase-contract/new-purchase-contract.component */ "./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewPurchaseContractComponent", function() { return _new_purchase_contract_new_purchase_contract_component__WEBPACK_IMPORTED_MODULE_0__["NewPurchaseContractComponent"]; });

/* harmony import */ var _view_product_collection_view_product_collection_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-product-collection/view-product-collection.component */ "./src/app/market-place/containers/view-product-collection/view-product-collection.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewProductCollectionComponent", function() { return _view_product_collection_view_product_collection_component__WEBPACK_IMPORTED_MODULE_1__["ViewProductCollectionComponent"]; });

/* harmony import */ var _view_purchase_contract_view_purchase_contract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-purchase-contract/view-purchase-contract.component */ "./src/app/market-place/containers/view-purchase-contract/view-purchase-contract.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewPurchaseContractComponent", function() { return _view_purchase_contract_view_purchase_contract_component__WEBPACK_IMPORTED_MODULE_2__["ViewPurchaseContractComponent"]; });






/***/ }),

/***/ "./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.css":
/*!***************************************************************************************************!*\
  !*** ./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.css ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.spiner-section-200 {\n    width: 200px;\n}\n\n.margin-right--10 {\n    margin-right: 10px !important\n }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFya2V0LXBsYWNlL2NvbnRhaW5lcnMvbmV3LXB1cmNoYXNlLWNvbnRyYWN0L25ldy1wdXJjaGFzZS1jb250cmFjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtDQUNIIiwiZmlsZSI6InNyYy9hcHAvbWFya2V0LXBsYWNlL2NvbnRhaW5lcnMvbmV3LXB1cmNoYXNlLWNvbnRyYWN0L25ldy1wdXJjaGFzZS1jb250cmFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc3BpbmVyLXNlY3Rpb24tMjAwIHtcbiAgICB3aWR0aDogMjAwcHg7XG59XG5cbi5tYXJnaW4tcmlnaHQtLTEwIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHggIWltcG9ydGFudFxuIH1cblxuIl19 */");

/***/ }),

/***/ "./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: NewPurchaseContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPurchaseContractComponent", function() { return NewPurchaseContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/market-place/store/reducers/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions */ "./src/app/market-place/store/actions/index.ts");
/* harmony import */ var _store_reducers_ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/reducers/ipfs-product-image.reducer */ "./src/app/market-place/store/reducers/ipfs-product-image.reducer.ts");
/* harmony import */ var _components_show_ipfs_image_show_ipfs_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/show-ipfs-image/show-ipfs-image.component */ "./src/app/market-place/components/show-ipfs-image/show-ipfs-image.component.ts");











/* based on
      https://docs.ethers.io/ethers.js/html/api-utils.html#bytes32-strings

      check if string is less then 32 bytes. Needed to pass into the smart contract
  */
function bites32StringValidator(control) {
    let pathTest = false;
    try {
        ethers__WEBPACK_IMPORTED_MODULE_5__["utils"].formatBytes32String(control.value);
        pathTest = true;
    }
    catch (error) {
        // console.log('bites32StringValidator', error)
    }
    /*
    If our validation fails, we return an object with a key for the error name and a value of true.
    Otherwise, if the validation passes, we simply return null.
    */
    return !pathTest ? {
        forbiddenKey: {
            value: control.value
        }
    } : null;
}
let NewPurchaseContractComponent = class NewPurchaseContractComponent {
    constructor(store$, formBuilder, dialog) {
        this.store$ = store$;
        this.formBuilder = formBuilder;
        this.dialog = dialog;
        this.IMAGE_PATTERN = /^.+\.(png|jpg|jpeg|gif|png)$/;
        this.commissions = ['2.0', '2.5', '3.0', '3.5', '4.0'];
        this.frmGroup = this.formBuilder.group({
            productKey: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, bites32StringValidator]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            etherValue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\d+(\.\d{1,3})?$/)]],
            commission: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            fileArg: [
                '', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.IMAGE_PATTERN)]
            ],
            ipfsHash: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] // to hold ipfsHash value
        });
        this.formControl = (name) => this.frmGroup.get(`${name}`);
        /*
           A controls is said to be touched if the the user focused on the control
           and then focused on something else.
           For example by clicking into the control and then pressing tab or clicking on another control in the form.
      
            The difference between touched and dirty is that with touched the user doesn’t need to actually change
            the value of the input control.
          */
        this.required = (name) => this.formControl(name).hasError('required') && this.formControl(name).touched;
        this.invalidPattern = (name) => 
        // 'dirty' means that the user is actually interacted with the control
        // making attempt of typing vs just focusing or blaring
        this.formControl(name).hasError('pattern') && this.formControl(name).dirty;
        this.invalid32BytesKey = (name) => this.formControl(name).hasError('forbiddenKey') && this.formControl(name).dirty;
        this.requiredFile = (name) => this.formControl(name).hasError('required');
        this.invalidPatternFile = (name) => this.formControl(name).hasError('pattern');
        this.isPending = (status) => status === _store_reducers_ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_9__["FileUploadStatus"].Pending;
        this.isSuccess = (status) => status === _store_reducers_ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_9__["FileUploadStatus"].Success;
        this.isError = (status) => status === _store_reducers_ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_9__["FileUploadStatus"].Error;
        this.inProgress = (status) => status === _store_reducers_ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_9__["FileUploadStatus"].Progress;
    }
    ngOnInit() {
        this.uploadStatus$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_7__["getIpfsUploadStatus"]));
        this.ipfsHash$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_6__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_7__["getIpfsHash"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(value => this.frmGroup.get('ipfsHash').patchValue(value)));
    }
    // here is the way to emulate the click on the file input control
    selectFile() {
        this.fileControl.nativeElement.click();
    }
    onFileChange(event) {
        if (event.target.files && event.target.files.length) {
            this.fileBlob = event.target.files[0];
            this.frmGroup.get('fileArg').patchValue(this.fileBlob.name);
            const reader = new FileReader();
            reader.readAsDataURL(this.fileBlob);
            reader.onload = _ => {
                this.fileContent = reader.result;
                this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].reset());
            };
        }
    }
    uploadFile() {
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].uploadImage({ file: this.fileBlob }));
    }
    loadImage() {
        const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.width = '460px';
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        this.dialog.open(_components_show_ipfs_image_show_ipfs_image_component__WEBPACK_IMPORTED_MODULE_10__["ShowIpfsImageComponent"], dialogConfig);
    }
    onCreate() {
        const { valid } = this.frmGroup;
        if (valid) {
            const _a = this.frmGroup.value, { fileArg } = _a, model = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["fileArg"]);
            this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["PurchaseContractActions"].createPurchaseContract({ payload: model }));
        }
    }
    ngOnDestroy() {
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].reset());
    }
};
NewPurchaseContractComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('file')
], NewPurchaseContractComponent.prototype, "fileControl", void 0);
NewPurchaseContractComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-purchase-contract',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-purchase-contract.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-purchase-contract.component.css */ "./src/app/market-place/containers/new-purchase-contract/new-purchase-contract.component.css")).default]
    })
], NewPurchaseContractComponent);



/***/ }),

/***/ "./src/app/market-place/containers/view-product-collection/view-product-collection.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/market-place/containers/view-product-collection/view-product-collection.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ViewProductCollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewProductCollectionComponent", function() { return ViewProductCollectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/market-place/store/reducers/index.ts");







let ViewProductCollectionComponent = class ViewProductCollectionComponent {
    constructor(store$, router) {
        this.store$ = store$;
        this.router = router;
    }
    /*based on https://alligator.io/angular/viewchild-access-component/
        *Notice that we wait for the AfterViewInit lifecycle hook to access our variable,
        * as this is when child components/DOM elements and directives become available
        *
        * */
    ngAfterViewInit() {
        const products$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getAllProducts"]));
        const filter$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(this.contractKey.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(event => this.contractKey.nativeElement.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
        this.filteredProducts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([products$, filter$]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([products, filterString]) => products.filter(product => product.productKey.indexOf(filterString) !== -1)));
        // based on https://blog.angular-university.io/angular-debugging/
        setTimeout(() => {
            this.contractKey.nativeElement.focus();
        }, 150);
    }
    selectPurchaseContract(product) {
        this.router.navigate(['market-place/products', product.productKey]);
    }
    ngOnInit() {
    }
};
ViewProductCollectionComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('contractKey')
], ViewProductCollectionComponent.prototype, "contractKey", void 0);
ViewProductCollectionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-product-collection',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view-product-collection.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/market-place/containers/view-product-collection/view-product-collection.component.html")).default,
    })
], ViewProductCollectionComponent);



/***/ }),

/***/ "./src/app/market-place/containers/view-purchase-contract/view-purchase-contract.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/market-place/containers/view-purchase-contract/view-purchase-contract.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ViewPurchaseContractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewPurchaseContractComponent", function() { return ViewPurchaseContractComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/market-place/store/reducers/index.ts");
/* harmony import */ var _core_store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../core/store/reducers */ "./src/app/core/store/reducers/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store/actions */ "./src/app/market-place/store/actions/index.ts");








let ViewPurchaseContractComponent = class ViewPurchaseContractComponent {
    constructor(store$) {
        this.store$ = store$;
        this.unsubscribe$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ngOnInit() {
        this.selectedPurchaseContract$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getSelectedProductWidget"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(product => !!product), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(product => this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].loadPurchaseContract({ address: product.contractAddress }))), 
        /* Function that enables angular http client
           
             https://brianflove.com/2017/11/02/angular-http-client-blob/
       */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.store$.select(_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getSelectedPurchaseContract"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(contract => !!contract));
        this.image$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getSelectedPurchaseContract"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(contract => !!contract), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(contract => this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["IpfsImageActions"].downloadImage({ ipfsHash: contract.ipfsHash }))), 
        //Observable Switch as  Described Earlier in the Code 
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.store$.select(_store_reducers__WEBPACK_IMPORTED_MODULE_5__["getImageBlob"])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(image => !!image));
        this.account$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_core_store_reducers__WEBPACK_IMPORTED_MODULE_6__["getAccount"]));
    }
    removePurchaseContract(key) {
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].removePurchaseContract({ key }));
    }
    abortPurchaseContract() {
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].abortSelectedPurchaseContract());
    }
    confirmBuy(eth) {
        // console.log(`Buyer pays: ${eth}`);
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].confirmBuy({ eth }));
    }
    confirmDelivery() {
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].confirmDelivery());
    }
    withdrawBySeller() {
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].releaseEscrow());
    }
    withdrawByOwner() {
        this.store$.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].withdrawByOwner());
    }
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
};
ViewPurchaseContractComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ViewPurchaseContractComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-purchase-contract',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: `

      <app-purchase-contract-detail
        *ngIf="{ purchaseContract: selectedPurchaseContract$|async,
          image: image$|async,
          account: account$|async } as values;"
        [contract]="values.purchaseContract"
        [image] = "values.image"
        [account] = "values.account"
        (remove)="removePurchaseContract($event)"
        (abortMe)="abortPurchaseContract()"
        (buy)="confirmBuy($event)"
        (delivery)="confirmDelivery()"
        (releaseEscrow)="withdrawBySeller()"
        (receiveCommission)="withdrawByOwner()"
        >
      </app-purchase-contract-detail>
    `,
    })
], ViewPurchaseContractComponent);



/***/ }),

/***/ "./src/app/market-place/guards/index.ts":
/*!**********************************************!*\
  !*** ./src/app/market-place/guards/index.ts ***!
  \**********************************************/
/*! exports provided: ProductsLoadedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _products_loaded_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./products-loaded.guard */ "./src/app/market-place/guards/products-loaded.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductsLoadedGuard", function() { return _products_loaded_guard__WEBPACK_IMPORTED_MODULE_0__["ProductsLoadedGuard"]; });




/***/ }),

/***/ "./src/app/market-place/guards/products-loaded.guard.ts":
/*!**************************************************************!*\
  !*** ./src/app/market-place/guards/products-loaded.guard.ts ***!
  \**************************************************************/
/*! exports provided: ProductsLoadedGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsLoadedGuard", function() { return ProductsLoadedGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../market-place-anchor.module */ "./src/app/market-place/market-place-anchor.module.ts");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/reducers */ "./src/app/market-place/store/reducers/index.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions */ "./src/app/market-place/store/actions/index.ts");








let ProductsLoadedGuard = class ProductsLoadedGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate() {
        return this.waitForProductsToLoad().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(false)));
    }
    waitForProductsToLoad() {
        return this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_reducers__WEBPACK_IMPORTED_MODULE_6__["isProductsLoaded"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(loaded => {
            if (!loaded) {
                this.store.dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["PurchaseContractActions"].loadProducts());
            }
        }), 
        // Notice that the filter() returns the observable sequence that contains elements
        // from the input sequence that satisfy the condition.
        // so in this case, if the loaded is false, the steam will not continue, but
        // when the loaded is true, we grab this bool value. Which means we are waiting for the
        // loaded value has become true and then we continue the stream and take this one value .
        // after that the whole stream will be completed.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(loaded => loaded), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
};
ProductsLoadedGuard.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
ProductsLoadedGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_5__["MarketPlaceAnchorModule"]
    })
], ProductsLoadedGuard);



/***/ }),

/***/ "./src/app/market-place/market-place-anchor.module.ts":
/*!************************************************************!*\
  !*** ./src/app/market-place/market-place-anchor.module.ts ***!
  \************************************************************/
/*! exports provided: MarketPlaceAnchorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceAnchorModule", function() { return MarketPlaceAnchorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



//I was trying to follow the idea to avoid the Circular Dependencies warning
// https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f
let MarketPlaceAnchorModule = class MarketPlaceAnchorModule {
};
MarketPlaceAnchorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], MarketPlaceAnchorModule);



/***/ }),

/***/ "./src/app/market-place/market-place-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/market-place/market-place-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MarketPlaceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceRoutingModule", function() { return MarketPlaceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "./src/app/market-place/containers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/market-place/components/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards */ "./src/app/market-place/guards/index.ts");






/*
- The multiple routes work like an ‘&&’ condition in javascript, i.e., angular won’t execute the later guards, if the first one fails.
- The prioritization works by giving the guard closest to the root of the application the highest priority.
As a result, if a child guard returns false but its parent hasn’t resolved yet,
it’ll wait until the parent resolves. If the parent guard check fails,
it’ll take priority over all the others.
*/
/*
The path-matching strategy, one of 'prefix' or 'full'. Default is 'prefix'.

By default, the router checks URL elements from the left to see if the URL matches a given path,
and stops when there is a match. For example, '/team/11/user' matches 'team/:id'.

The path-match strategy 'full' matches against the entire URL.
It is important to do this when redirecting empty-path routes.
 Otherwise, because an empty path is a prefix of any URL,
 the router would apply the redirect even when navigating to the redirect destination,
  creating an endless loop.
*/
const routes = [
    {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
    },
    {
        path: 'products',
        component: _components__WEBPACK_IMPORTED_MODULE_4__["MarketPlaceHomeComponent"],
        children: [
            {
                path: '',
                component: _containers__WEBPACK_IMPORTED_MODULE_3__["ViewProductCollectionComponent"],
                canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["ProductsLoadedGuard"]],
                children: [
                    {
                        path: ':id',
                        component: _containers__WEBPACK_IMPORTED_MODULE_3__["ViewPurchaseContractComponent"],
                    },
                    {
                        path: '',
                        component: _components__WEBPACK_IMPORTED_MODULE_4__["ProductDetailHomeComponent"]
                    },
                ]
            },
            {
                path: 'make/new',
                component: _containers__WEBPACK_IMPORTED_MODULE_3__["NewPurchaseContractComponent"],
                pathMatch: 'full',
            },
        ]
    }
];
let MarketPlaceRoutingModule = class MarketPlaceRoutingModule {
};
MarketPlaceRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MarketPlaceRoutingModule);



/***/ }),

/***/ "./src/app/market-place/market-place.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/market-place/market-place.module.ts ***!
  \*****************************************************/
/*! exports provided: CONTAINERS, COMPONENTS, MarketPlaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTAINERS", function() { return CONTAINERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceModule", function() { return MarketPlaceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _market_place_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-place-routing.module */ "./src/app/market-place/market-place-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/reducers */ "./src/app/market-place/store/reducers/index.ts");
/* harmony import */ var _store_effects_ipfs_product_image_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/effects/ipfs-product-image.effects */ "./src/app/market-place/store/effects/ipfs-product-image.effects.ts");
/* harmony import */ var _store_effects_purchase_contract_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store/effects/purchase-contract.effects */ "./src/app/market-place/store/effects/purchase-contract.effects.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./containers */ "./src/app/market-place/containers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components */ "./src/app/market-place/components/index.ts");
/* harmony import */ var _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./market-place-anchor.module */ "./src/app/market-place/market-place-anchor.module.ts");














const CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_11__["NewPurchaseContractComponent"],
    _containers__WEBPACK_IMPORTED_MODULE_11__["ViewProductCollectionComponent"],
    _containers__WEBPACK_IMPORTED_MODULE_11__["ViewPurchaseContractComponent"]
];
const COMPONENTS = [
    _components__WEBPACK_IMPORTED_MODULE_12__["MarketPlaceHomeComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["ShowIpfsImageComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractListComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["ProductDetailHomeComponent"],
    _components__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractDetailComponent"]
];
let MarketPlaceModule = class MarketPlaceModule {
};
MarketPlaceModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [COMPONENTS, CONTAINERS],
        /*based on https://alligator.io/angular/anatomy-angular-module/
           * This is for components that can�t be found by the Angular compiler during compilation time
           * because they are not referenced anywhere in component templates.
      
            Components that should go into entryComponents are not that common.
            A good example would be Angular Material dialogs, because they are created dynamically,
            and the Angular compiler would not know about them otherwise.
           * */
        entryComponents: [
            _components__WEBPACK_IMPORTED_MODULE_12__["ShowIpfsImageComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
            _shared__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_13__["MarketPlaceAnchorModule"],
            _market_place_routing_module__WEBPACK_IMPORTED_MODULE_5__["MarketPlaceRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forFeature('purchaseContract', _store_reducers__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forFeature([_store_effects_ipfs_product_image_effects__WEBPACK_IMPORTED_MODULE_9__["IpfsUploadEffects"], _store_effects_purchase_contract_effects__WEBPACK_IMPORTED_MODULE_10__["PurchaseContractEffects"]])
        ],
    })
], MarketPlaceModule);



/***/ }),

/***/ "./src/app/market-place/models/index.ts":
/*!**********************************************!*\
  !*** ./src/app/market-place/models/index.ts ***!
  \**********************************************/
/*! exports provided: ContractState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _purchase_contract_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-contract.model */ "./src/app/market-place/models/purchase-contract.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContractState", function() { return _purchase_contract_model__WEBPACK_IMPORTED_MODULE_0__["ContractState"]; });




/***/ }),

/***/ "./src/app/market-place/models/purchase-contract.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/market-place/models/purchase-contract.model.ts ***!
  \****************************************************************/
/*! exports provided: ContractState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractState", function() { return ContractState; });
var ContractState;
(function (ContractState) {
    ContractState[ContractState["Created"] = 0] = "Created";
    ContractState[ContractState["Locked"] = 1] = "Locked";
    ContractState[ContractState["Canceled"] = 2] = "Canceled";
    ContractState[ContractState["ItemReceived"] = 3] = "ItemReceived";
    ContractState[ContractState["SellerPaid"] = 4] = "SellerPaid";
    ContractState[ContractState["OwnerPaid"] = 5] = "OwnerPaid";
    ContractState[ContractState["Completed"] = 6] = "Completed";
})(ContractState || (ContractState = {}));


/***/ }),

/***/ "./src/app/market-place/services/flea-market-contract-service.ts":
/*!***********************************************************************!*\
  !*** ./src/app/market-place/services/flea-market-contract-service.ts ***!
  \***********************************************************************/
/*! exports provided: FleaMarketContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FleaMarketContractService", function() { return FleaMarketContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../market-place-anchor.module */ "./src/app/market-place/market-place-anchor.module.ts");
/* harmony import */ var _tokens_flea_market_contract_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/flea-market-contract-token */ "./src/app/market-place/services/tokens/flea-market-contract-token.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);







let FleaMarketContractService = class FleaMarketContractService {
    constructor(contractToken) {
        this.contractToken = contractToken;
        // The following function shows how to use a first observable in the project  
        this.widgetObservable = (id) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.contractToken.getContractKeyAtIndex(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(key => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.contractToken.getContractByKey(key)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(address => {
            const widget = {
                productKey: ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].parseBytes32String(key),
                contractAddress: address
            };
            return widget;
        }))));
    }
    createPurchaseContract(product) {
        const commission = Math.floor(parseFloat(product.commission) * 100);
        const bytes32Key = ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].formatBytes32String(product.productKey);
        const wei = ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].parseEther(product.etherValue);
        /*
             based on https://docs.ethers.io/ethers.js/html/cookbook-contracts.html
            Call the contract method, getting back the transaction tx
          */
        const token = this.contractToken.createPurchaseContract(bytes32Key, product.description, product.ipfsHash, commission, {
            value: wei
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tx) => {
            console.log('Transaction', tx);
            // Wait for transaction to be mined
            // Returned a Promise which would resolve to the TransactionReceipt once it is mined.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tx.wait()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((txReceipt) => console.log('TransactionReceipt: ', txReceipt)), 
            // The receipt will have an "events" Array, which will have
            // the emitted 'event LogCreatePurchaseContract(address sender, address contractAddress)'.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txReceipt => txReceipt.events.pop()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txEvent => txEvent.args.contractAddress), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(address => console.log('address: ', address)));
        }));
    }
    // The following function is based on https://www.learnrxjs.io/operators/combination/forkjoin.html
    getPurchaseContractList() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.contractToken.getContractCount()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((bigNumber) => bigNumber.toNumber()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((contractCount) => console.log('contractCount: ', contractCount)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((contractCount) => {
            if (contractCount === 0) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
            else {
                // we get array [0,1,....contractCount-1]
                const countArr = Array.from(Array(contractCount)).map((e, i) => i);
                const source = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(countArr);
                return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mergeMap"])(ids => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(ids.map(this.widgetObservable))));
            }
        }));
    }
    getName() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.contractToken.contractName()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(name => name));
    }
    removePurchaseContract(productKey) {
        const bytes32Key = ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].formatBytes32String(productKey);
        // The following function is based on https://docs.ethers.io/ethers.js/html/cookbook-contracts.html
        // The function Calls the contract method, getting back the transaction tx
        const token = this.contractToken.removeContractByKey(bytes32Key);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tx) => {
            console.log('removeContractByKey Transaction', tx);
            // Wait for transaction to be mined
            // Returned a Promise which would resolve to the TransactionReceipt once it is mined.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tx.wait()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((txReceipt) => console.log('TransactionReceipt: ', txReceipt)), 
            // The receipt will have an "events" Array, which will have
            // the emitted event from the Contract. The "LogRemovePurchaseContract(address sender, bytes32 key))
            // call is the last event.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txReceipt => txReceipt.events.pop()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(txEvent => console.log('txEvent: ', txEvent)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txEvent => {
                // retrieve the key parameter value from the event
                const key = txEvent.args.key;
                return ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].parseBytes32String(key);
            }));
        }));
    }
};
FleaMarketContractService.ctorParameters = () => [
    { type: _tokens_flea_market_contract_token__WEBPACK_IMPORTED_MODULE_3__["FleaMarketContractToken"] }
];
FleaMarketContractService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_2__["MarketPlaceAnchorModule"] })
], FleaMarketContractService);



/***/ }),

/***/ "./src/app/market-place/services/purchase-contract-service.ts":
/*!********************************************************************!*\
  !*** ./src/app/market-place/services/purchase-contract-service.ts ***!
  \********************************************************************/
/*! exports provided: PurchaseContractService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractService", function() { return PurchaseContractService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../market-place-anchor.module */ "./src/app/market-place/market-place-anchor.module.ts");
/* harmony import */ var _tokens_ethers_web3_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tokens/ethers-web3-token */ "./src/app/market-place/services/tokens/ethers-web3-token.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_6__);







let PurchaseContractService = class PurchaseContractService {
    constructor(provider) {
        this.provider = provider;
        this.abi = [
            'function key() view returns(bytes32 key)',
            'function description() view returns(string description)',
            'function seller() view returns(address sellerAddress)',
            'function buyer() view returns(address buyerAddress)',
            'function owner() view returns(address ownerAddress)',
            'function price()  view returns(uint weiPrice)',
            'function balanceOf() view returns(uint weiBalance)',
            'function ipfsImageHash() view returns(string ipfsHash)',
            'function state() view returns(uint8 state)',
            'function commissionRate() view returns (uint commission)',
            'event LogCanceledBySeller(address indexed sender, uint256 amount, bytes32 key)',
            'function abortBySeller() returns (bool result)',
            'event LogPurchaseConfirmed(address indexed sender, uint256 amount, bytes32 key)',
            'function buyerPurchase() payable returns (bool result)',
            'event LogReceivedByBuyer(address indexed sender, uint256 amount, bytes32 key)',
            'function buyerConfirmReceived() returns (bool result)',
            'event LogWithdrawBySeller(address indexed sender, uint256 amount, bytes32 key)',
            'function withdrawBySeller() returns (bool result)',
            'event LogWithdrawByOwner(address indexed sender, uint256 amount, bytes32 key)',
            'function withdrawByOwner() returns (bool result)',
        ];
    }
    loadPurchaseContract(contractAddress) {
        // We connect to the Contract using a Provider, so we will only
        // have read-only access to the Contract
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].Contract(contractAddress, this.abi, this.provider.getSigner());
        const crObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.commissionRate()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((commission) => commission.toNumber()), 
        // only account with deployer or seller can retrieve this value,
        // otherwise the contract will throw error.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)));
        // based on https://scotch.io/tutorials/rxjs-operators-for-dummies-forkjoin-zip-combinelatest-withlatestfrom
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["zip"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.key()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.seller()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.buyer()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.owner()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.price()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.balanceOf()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.description()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.ipfsImageHash()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(contract.state()), Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(crObservable))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(([key, sellerAddress, buyerAddress, ownerAddress, weiPrice, weiBalance, description, ipfsHash, state, commission]) => {
            console.log(`key: ${key}, weiPrice: ${weiPrice}, state: ${state}, commission: ${commission}`);
            // key: 0x706967794d6f64656c3030303500000000000000000000000000000000000000, weiPrice: 500000000000000, state: 0
            const product = {
                productKey: ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].parseBytes32String(key),
                contractAddress,
                sellerAddress: sellerAddress,
                buyerAddress: (buyerAddress === ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].constants.AddressZero) ? null : buyerAddress,
                ownerAddress: ownerAddress,
                price: ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].formatEther(weiPrice),
                balance: ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].formatEther(weiBalance),
                description: description,
                ipfsHash: ipfsHash,
                state: state,
                commission: commission ? commission : null
            };
            return product;
        }));
    }
    abortPurchaseContract(contractAddress) {
        // We connect to the Contract using a Provider, so we will only
        // have read-only access to the Contract
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].Contract(contractAddress, this.abi, this.provider.getSigner());
        // based on https://docs.ethers.io/ethers.js/html/cookbook-contracts.html
        // Call the contract method, getting back the transaction tx
        const token = contract.abortBySeller();
        // 'from' operator can be used to convert a promise to an observable
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tx) => {
            console.log('abortBySeller Tx:', tx);
            // Wait for transaction to be mined
            // Returned a Promise which would resolve to the TransactionReceipt once it is mined.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tx.wait()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((txReceipt) => console.log('txReceipt: ', txReceipt)), 
            // The receipt will have an "events" Array, which will have
            // the emitted event from the Contract. The "LogCanceledBySeller"
            // is the last event.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txReceipt => txReceipt.events.pop()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(txEvent => console.log('event: ', txEvent.event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(contractAddress));
        }));
    }
    confirmPurchase(contractAddress, etherValue) {
        // We connect to the Contract using a Provider, so we will only
        // have read-only access to the Contract
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].Contract(contractAddress, this.abi, this.provider.getSigner());
        const wei = ethers__WEBPACK_IMPORTED_MODULE_6__["utils"].parseEther(etherValue);
        // based on https://docs.ethers.io/ethers.js/html/cookbook-contracts.html
        // Call the contract method, getting back the transaction tx
        const token = contract.buyerPurchase({
            value: wei
        });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tx) => {
            console.log('buyerConfirmPurchase Tx:', tx);
            // Wait for transaction to be mined
            // Returned a Promise which would resolve to the TransactionReceipt once it is mined.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tx.wait()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((txReceipt) => console.log('txReceipt: ', txReceipt)), 
            // The receipt will have an "events" Array, which will have
            // the emitted event from the Contract. The "LogPurchaseConfirmed"
            // call is the last event.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txReceipt => txReceipt.events.pop()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(txEvent => console.log('event: ', txEvent.event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(contractAddress));
        }));
    }
    confirmDelivery(contractAddress) {
        // We connect to the Contract using a Provider, so we will only
        // have read-only access to the Contract
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].Contract(contractAddress, this.abi, this.provider.getSigner());
        // based on https://docs.ethers.io/ethers.js/html/cookbook-contracts.html
        // Call the contract method, getting back the transaction tx
        const token = contract.buyerConfirmReceived();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tx) => {
            console.log('buyerConfirmReceived Tx:', tx);
            // Wait for transaction to be mined
            // Returned a Promise which would resolve to the TransactionReceipt once it is mined.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tx.wait()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((txReceipt) => console.log('txReceipt: ', txReceipt)), 
            // The receipt will have an "events" Array, which will have
            // the emitted event from the Contract. The "LogReceivedByBuyer"
            // call is the last event.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txReceipt => txReceipt.events.pop()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(txEvent => console.log('event: ', txEvent.event)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["mapTo"])(contractAddress));
        }));
    }
    withdrawBySeller(contractAddress) {
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].Contract(contractAddress, this.abi, this.provider.getSigner());
        // based on https://docs.ethers.io/ethers.js/html/cookbook-contracts.html
        // Call the contract method, getting back the transaction tx
        const token = contract.withdrawBySeller();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tx) => {
            console.log('withdrawBySeller Tx:', tx);
            // Wait for transaction to be mined
            // Returned a Promise which would resolve to the TransactionReceipt once it is mined.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tx.wait()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((txReceipt) => console.log('txReceipt: ', txReceipt)), 
            // The receipt will have an "events" Array, which will have
            // the emitted event from the Contract. The "LogWithdrawBySeller"
            //  is the last event.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txReceipt => txReceipt.events.pop()), 
            // tslint:disable-next-line:max-line-length
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(txEvent => console.log(`event: ${txEvent.event}, sent by: ${txEvent.args.sender}, withdrawal amount: ${txEvent.args.amount}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txEvent => ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].utils.formatEther(txEvent.args.amount)));
        }));
    }
    withdrawByOwner(contractAddress) {
        const contract = new ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].Contract(contractAddress, this.abi, this.provider.getSigner());
        // based on https://docs.ethers.io/ethers.js/html/cookbook-contracts.html
        // Call the contract method, getting back the transaction tx
        const token = contract.withdrawByOwner();
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(token)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])((tx) => {
            console.log('withdrawByOwner Tx:', tx);
            // Wait for transaction to be mined
            // Returned a Promise which would resolve to the TransactionReceipt once it is mined.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(tx.wait()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((txReceipt) => console.log('txReceipt: ', txReceipt)), 
            // The receipt will have an "events" Array, which will have
            // the emitted event from the Contract. The "LogWithdrawBySeller"
            //  is the last event.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txReceipt => txReceipt.events.pop()), 
            // tslint:disable-next-line:max-line-length
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(txEvent => console.log(`event: ${txEvent.event}, sent by: ${txEvent.args.sender}, withdrawal amount: ${txEvent.args.amount}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(txEvent => ethers__WEBPACK_IMPORTED_MODULE_6__["ethers"].utils.formatEther(txEvent.args.amount)));
        }));
    }
};
PurchaseContractService.ctorParameters = () => [
    { type: _tokens_ethers_web3_token__WEBPACK_IMPORTED_MODULE_3__["EthersWeb3Token"] }
];
PurchaseContractService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_2__["MarketPlaceAnchorModule"] })
], PurchaseContractService);



/***/ }),

/***/ "./src/app/market-place/services/tokens/ethers-web3-token.ts":
/*!*******************************************************************!*\
  !*** ./src/app/market-place/services/tokens/ethers-web3-token.ts ***!
  \*******************************************************************/
/*! exports provided: EthersWeb3Token */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthersWeb3Token", function() { return EthersWeb3Token; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_services_tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/tokens */ "./src/app/core/services/tokens/index.ts");
/* harmony import */ var _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../market-place-anchor.module */ "./src/app/market-place/market-place-anchor.module.ts");





let EthersWeb3Token = class EthersWeb3Token extends ethers__WEBPACK_IMPORTED_MODULE_2__["providers"].Web3Provider {
    constructor(web3Provider) {
        super(web3Provider);
    }
};
EthersWeb3Token.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_core_services_tokens__WEBPACK_IMPORTED_MODULE_3__["EthereumProviderToken"],] }] }
];
EthersWeb3Token = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_4__["MarketPlaceAnchorModule"] }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_core_services_tokens__WEBPACK_IMPORTED_MODULE_3__["EthereumProviderToken"]))
], EthersWeb3Token);



/***/ }),

/***/ "./src/app/market-place/services/tokens/flea-market-contract-token.ts":
/*!****************************************************************************!*\
  !*** ./src/app/market-place/services/tokens/flea-market-contract-token.ts ***!
  \****************************************************************************/
/*! exports provided: FleaMarketContractToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FleaMarketContractToken", function() { return FleaMarketContractToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ethers */ "./node_modules/ethers/dist/ethers.min.js");
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ethers_web3_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ethers-web3-token */ "./src/app/market-place/services/tokens/ethers-web3-token.ts");
/* harmony import */ var _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../market-place-anchor.module */ "./src/app/market-place/market-place-anchor.module.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






const FLEA_MARKET_CONTRACT_ADDRESS = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fleaMarketContractAddress;
const abi = [
    'event LogCreatePurchaseContract(address sender, bytes32 key, address contractAddress)',
    'event LogRemovePurchaseContract(address sender, bytes32 key)',
    'function createPurchaseContract(bytes32 key, string description, string ipfsImageHash, uint256 commissionRate) payable returns(bool createResult)',
    'function getContractCount() view returns(uint contractCount)',
    'function getContractKeyAtIndex(uint index) view returns(bytes32 key)',
    'function getContractByKey(bytes32 key) view returns(address contractAddress)',
    'function contractName() view returns(string contractName)',
    'function removeContractByKey(bytes32 key) returns(bool result)'
];
let FleaMarketContractToken = class FleaMarketContractToken extends ethers__WEBPACK_IMPORTED_MODULE_2__["Contract"] {
    constructor(provider) {
        super(FLEA_MARKET_CONTRACT_ADDRESS, abi, provider.getSigner());
    }
};
FleaMarketContractToken.ctorParameters = () => [
    { type: _ethers_web3_token__WEBPACK_IMPORTED_MODULE_3__["EthersWeb3Token"] }
];
FleaMarketContractToken = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: _market_place_anchor_module__WEBPACK_IMPORTED_MODULE_4__["MarketPlaceAnchorModule"] })
], FleaMarketContractToken);



/***/ }),

/***/ "./src/app/market-place/store/actions/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/market-place/store/actions/index.ts ***!
  \*****************************************************/
/*! exports provided: IpfsImageActions, PurchaseContractActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ipfs-product-image.actions */ "./src/app/market-place/store/actions/ipfs-product-image.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "IpfsImageActions", function() { return _ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _purchase_contract_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase-contract.actions */ "./src/app/market-place/store/actions/purchase-contract.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractActions", function() { return _purchase_contract_actions__WEBPACK_IMPORTED_MODULE_1__; });





/***/ }),

/***/ "./src/app/market-place/store/actions/ipfs-product-image.actions.ts":
/*!**************************************************************************!*\
  !*** ./src/app/market-place/store/actions/ipfs-product-image.actions.ts ***!
  \**************************************************************************/
/*! exports provided: reset, uploadImage, uploadImageSuccess, uploadImageFail, downloadImage, downloadImageSuccess, downloadImageError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reset", function() { return reset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImage", function() { return uploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImageSuccess", function() { return uploadImageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadImageFail", function() { return uploadImageFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadImage", function() { return downloadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadImageSuccess", function() { return downloadImageSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadImageError", function() { return downloadImageError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const reset = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Image] Reset'); // status Pending
const uploadImage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Image] Upload', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()); // status Progress
const uploadImageSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Image] Upload Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()); // status Success
const uploadImageFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Image] Upload Fail'); // status Error
const downloadImage = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Image] Download Image', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])()); // request to download image from IPFS
const downloadImageSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Image] Download Image Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const downloadImageError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[IPFS/Image] Download Image Error');


/***/ }),

/***/ "./src/app/market-place/store/actions/purchase-contract.actions.ts":
/*!*************************************************************************!*\
  !*** ./src/app/market-place/store/actions/purchase-contract.actions.ts ***!
  \*************************************************************************/
/*! exports provided: createPurchaseContract, createPurchaseContractSuccess, loadProducts, loadProductsSuccess, loadPurchaseContract, loadPurchaseContractSuccess, removePurchaseContract, removePurchaseContractSuccess, abortSelectedPurchaseContract, abortSelectedPurchaseContractSuccess, confirmBuy, confirmBuySuccess, confirmDelivery, confirmDeliverySuccess, releaseEscrow, releaseEscrowSuccess, withdrawByOwner, withdrawByOwnerSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPurchaseContract", function() { return createPurchaseContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPurchaseContractSuccess", function() { return createPurchaseContractSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProducts", function() { return loadProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadProductsSuccess", function() { return loadProductsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPurchaseContract", function() { return loadPurchaseContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPurchaseContractSuccess", function() { return loadPurchaseContractSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePurchaseContract", function() { return removePurchaseContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removePurchaseContractSuccess", function() { return removePurchaseContractSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abortSelectedPurchaseContract", function() { return abortSelectedPurchaseContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "abortSelectedPurchaseContractSuccess", function() { return abortSelectedPurchaseContractSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmBuy", function() { return confirmBuy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmBuySuccess", function() { return confirmBuySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmDelivery", function() { return confirmDelivery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confirmDeliverySuccess", function() { return confirmDeliverySuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseEscrow", function() { return releaseEscrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "releaseEscrowSuccess", function() { return releaseEscrowSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withdrawByOwner", function() { return withdrawByOwner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withdrawByOwnerSuccess", function() { return withdrawByOwnerSuccess; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const createPurchaseContract = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Create Purchase Contract', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPurchaseContractSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Create Purchase Contract Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadProducts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product/API] Load Products');
const loadProductsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Product/Command] Load Products Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPurchaseContract = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Load Purchase Contract', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadPurchaseContractSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Load Purchase Contract Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removePurchaseContract = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Remove Purchase Contract', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const removePurchaseContractSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Remove Purchase Contract Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const abortSelectedPurchaseContract = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Abort Purchase Contract');
const abortSelectedPurchaseContractSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Abort Purchase Contract Success');
const confirmBuy = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Confirm Buy', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const confirmBuySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Confirm Buy Success');
const confirmDelivery = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Confirm Product Delivery');
const confirmDeliverySuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Confirm Product Delivery Success');
const releaseEscrow = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Withdraw Escrow By Seller');
// tslint:disable-next-line:max-line-length
const releaseEscrowSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Withdraw Escrow By Seller Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const withdrawByOwner = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/API] Withdraw By Owner');
const withdrawByOwnerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[PurchaseContract/Command] Withdraw By Owner Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/market-place/store/effects/ipfs-product-image.effects.ts":
/*!**************************************************************************!*\
  !*** ./src/app/market-place/store/effects/ipfs-product-image.effects.ts ***!
  \**************************************************************************/
/*! exports provided: IpfsUploadEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpfsUploadEffects", function() { return IpfsUploadEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! serialize-error */ "./node_modules/serialize-error/index.js");
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(serialize_error__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _core_services_ipfs_daemon_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../core/services/ipfs-daemon.services */ "./src/app/core/services/ipfs-daemon.services.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions */ "./src/app/market-place/store/actions/index.ts");
/* harmony import */ var _core_store_actions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../core/store/actions */ "./src/app/core/store/actions/index.ts");










let IpfsUploadEffects = class IpfsUploadEffects {
    constructor(ipfsSrv, actions$, httpClient) {
        this.ipfsSrv = ipfsSrv;
        this.actions$ = actions$;
        this.httpClient = httpClient;
        this.uploadImage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].uploadImage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => action.file), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((file) => {
            return this.ipfsSrv.addFile(file).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(ipfsHash => console.log(`IPFS file hash: ${ipfsHash}`)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(ipfsHash => _actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].uploadImageSuccess({ ipfsHash })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].uploadImageFail())));
        })));
        this.downloadImage$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].downloadImage), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((action) => action.ipfsHash), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((ipfsHash) => this.ipfsSrv.getFile(ipfsHash).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((image) => _actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].downloadImageSuccess({ image })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].downloadImageError()))))));
        // display default error image
        this.downloadImageError$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].downloadImageError), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.httpClient.get(`./assets/img/error-human.png`, {
            responseType: 'blob'
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((image) => _actions__WEBPACK_IMPORTED_MODULE_8__["IpfsImageActions"].downloadImageSuccess({ image })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err)))))));
    }
    handleError(error) {
        const friendlyErrorMessage = Object(serialize_error__WEBPACK_IMPORTED_MODULE_2__["serializeError"])(error).message;
        return _core_store_actions__WEBPACK_IMPORTED_MODULE_9__["ErrorActions"].errorMessage({ errorMsg: friendlyErrorMessage });
    }
};
IpfsUploadEffects.ctorParameters = () => [
    { type: _core_services_ipfs_daemon_services__WEBPACK_IMPORTED_MODULE_7__["IpfsDaemonService"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
IpfsUploadEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IpfsUploadEffects);



/***/ }),

/***/ "./src/app/market-place/store/effects/purchase-contract.effects.ts":
/*!*************************************************************************!*\
  !*** ./src/app/market-place/store/effects/purchase-contract.effects.ts ***!
  \*************************************************************************/
/*! exports provided: PurchaseContractEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseContractEffects", function() { return PurchaseContractEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! serialize-error */ "./node_modules/serialize-error/index.js");
/* harmony import */ var serialize_error__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(serialize_error__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_flea_market_contract_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/flea-market-contract-service */ "./src/app/market-place/services/flea-market-contract-service.ts");
/* harmony import */ var _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/purchase-contract-service */ "./src/app/market-place/services/purchase-contract-service.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers */ "./src/app/market-place/store/reducers/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./src/app/market-place/store/actions/index.ts");
/* harmony import */ var _core_store_actions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../core/store/actions */ "./src/app/core/store/actions/index.ts");
/* harmony import */ var _core_models__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../core/models */ "./src/app/core/models/index.ts");
/* harmony import */ var _core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../core/components/confirm-dialog/confirm-dialog.component */ "./src/app/core/components/confirm-dialog/confirm-dialog.component.ts");
















let PurchaseContractEffects = class PurchaseContractEffects {
    constructor(store$, fleaSrv, purchaseSrv, actions$, router, dialog) {
        this.store$ = store$;
        this.fleaSrv = fleaSrv;
        this.purchaseSrv = purchaseSrv;
        this.actions$ = actions$;
        this.router = router;
        this.dialog = dialog;
        this.createProduct$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].createPurchaseContract), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => action.payload), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((payload) => {
            return this.fleaSrv.createPurchaseContract(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(address => console.log('Contract address: ', address)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((address) => {
                return [
                    _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].createPurchaseContractSuccess({
                        product: {
                            productKey: payload.productKey,
                            contractAddress: address
                        }
                    }),
                    // update ballance
                    _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()
                ];
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide(), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance())));
        })));
        this.loadPurchaseContract$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadPurchaseContract), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(action => action.address), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(address => {
            return this.purchaseSrv.loadPurchaseContract(address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(contract => _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadPurchaseContractSuccess({ contract })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide())));
        })));
        this.loadProducts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadProducts), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(() => this.fleaSrv.getPurchaseContractList().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(products => console.log('purchase contracts:', products)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(products => _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadProductsSuccess({ products })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide()))))));
        this.removeProduct$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].removePurchaseContract), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(payload => payload.key), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(key => {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.width = '420px';
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
                title: 'Confirm Remove',
                content: `Are you sure to remove contract ${key} from market?`,
                output: key
            };
            const dialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], dialogConfig);
            // Gets an observable that is notified when the dialog is finished closing.
            return dialogRef.afterClosed();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(result => !!result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].show()), this.fleaSrv.removePurchaseContract(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(productKey => console.log(`Contract has been removed: ${productKey}`)), 
        /*
        Related to the operators mapTo and concatMapTo. These operators map to static values.
        Sometimes you want to map to dynamic values,
        such as using a value passed in via an action’s payload property.
        For dynamic values, use the matching operators map or concatMap which expect a function rather than a static value.
        */
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(productKey => [_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].removePurchaseContractSuccess({ key: productKey }),
            _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide(), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()))), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide())))));
        this.abortContract$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].abortSelectedPurchaseContract), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedPurchaseContract"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([action, contract]) => {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.width = '420px';
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
                title: 'Confirm Abort',
                content: `Are you sure you want to deactivate contract: ${contract.productKey}?`,
                output: contract.contractAddress
            };
            const dialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], dialogConfig);
            // Gets an observable that is notified when the dialog is finished closing.
            return dialogRef.afterClosed();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(result => !!result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].show()), this.purchaseSrv.abortPurchaseContract(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(address => console.log(`Successfully canceled contract: ${address} `)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMapTo"])([_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].abortSelectedPurchaseContractSuccess(),
            _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide(), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()))), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide())))));
        this.confirmBuy$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmBuy), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedPurchaseContract"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([payload, contract]) => {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.width = '420px';
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
                title: 'Confirm Purchase',
                content: `Please confirm to deposit ${payload.eth} ETH into the contract: ${contract.productKey}`,
                output: {
                    address: contract.contractAddress,
                    eth: payload.eth
                }
            };
            const dialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], dialogConfig);
            // Gets an observable that is notified when the dialog is finished closing.
            return dialogRef.afterClosed();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(result => !!result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].show()), this.purchaseSrv.confirmPurchase(result.address, result.eth).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(address => console.log(`Purchase confirmed successfully for the contract: ${address} `)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMapTo"])([_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmBuySuccess(), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()))), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide())))));
        this.confirmDelivery$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmDelivery), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedPurchaseContract"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(([payload, contract]) => {
            const dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
            dialogConfig.width = '420px';
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.data = {
                title: 'Confirm Delivery',
                content: `Are you sure you want to confirm that you received the purchase item ${contract.description}`,
                output: contract.contractAddress
            };
            const dialogRef = this.dialog.open(_core_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_15__["ConfirmDialogComponent"], dialogConfig);
            // Gets an observable that is notified when the dialog is finished closing.
            return dialogRef.afterClosed();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(result => !!result), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(result => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].show()), this.purchaseSrv.confirmDelivery(result).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(address => console.log(`Delivery confirmed successfully for the contract: ${address} `)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMapTo"])([_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmDeliverySuccess(), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()))), Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide())))));
        this.withdrawBySeller$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].releaseEscrow), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedPurchaseContract"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([payload, contract]) => contract.contractAddress), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((address) => {
            return this.purchaseSrv.withdrawBySeller(address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(eth => [_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].releaseEscrowSuccess({ amount: eth }),
                _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide(), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance())));
        })));
        this.withdrawByOwner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].withdrawByOwner), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedPurchaseContract"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([payload, contract]) => contract.contractAddress), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])((address) => {
            return this.purchaseSrv.withdrawByOwner(address).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(eth => [_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].withdrawByOwnerSuccess({ amount: eth }),
                _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance()]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(this.handleError(err), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide(), _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["Web3GatewayActions"].getBalance())));
        })));
        this.removeProductRedirect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].removePurchaseContractSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => {
            this.router.navigate(['/market-place']);
        })), { dispatch: false });
        this.reload$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].abortSelectedPurchaseContractSuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmBuySuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmDeliverySuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].releaseEscrowSuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].withdrawByOwnerSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedPurchaseContract"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(([action, contract]) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // here is the trick to make  this.selectedPurchaseContract$ emit
            // on the same route
            // we need to reload on the same route
            // based on https://github.com/angular/angular/issues/13831
            this.router.routeReuseStrategy.shouldReuseRoute = () => false;
            this.router.navigate(['/market-place/products', contract.productKey]);
        }))), { dispatch: false });
        this.showSpinner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].createPurchaseContract, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadProducts, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadPurchaseContract, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].releaseEscrow, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].withdrawByOwner), 
        // Related to the operators mapTo and concatMapTo. These operators map to static values.
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].show())));
        this.hideSpinner$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].createPurchaseContractSuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadProductsSuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].loadPurchaseContractSuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].releaseEscrowSuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].withdrawByOwnerSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(_core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SpinnerActions"].hide())));
        this.showSnackbarOnCreateContract$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].createPurchaseContractSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((payload) => {
            const msg = {
                message: `New smart product contract has been created successfully: Address: ${payload.product.contractAddress}`,
                color: _core_models__WEBPACK_IMPORTED_MODULE_14__["AppearanceColor"].Success
            };
            return _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SnackBarActions"].open({ payload: msg });
        })));
        this.showSnackbarOnReleaseEscrow$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].releaseEscrowSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((payload) => {
            const msg = {
                message: `Fund in amount: ${payload.amount} ETH has been successfully release back to Seller`,
                color: _core_models__WEBPACK_IMPORTED_MODULE_14__["AppearanceColor"].Success
            };
            return _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SnackBarActions"].open({ payload: msg });
        })));
        this.showSnackbarOnReceiveCommission$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].withdrawByOwnerSuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((payload) => {
            const msg = {
                message: `Commission in amount: ${payload.amount} ETH has been successfully transferred to Owner`,
                color: _core_models__WEBPACK_IMPORTED_MODULE_14__["AppearanceColor"].Success
            };
            return _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SnackBarActions"].open({ payload: msg });
        })));
        this.showSnackbarOnSuccess$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].abortSelectedPurchaseContractSuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmBuySuccess, _actions__WEBPACK_IMPORTED_MODULE_12__["PurchaseContractActions"].confirmDeliverySuccess), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_11__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_10__["getSelectedPurchaseContract"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(([action, contract]) => {
            let msg = '';
            if (action.type === '[PurchaseContract/Command] Abort Purchase Contract Success') {
                msg = `The request made by the seller to abort the contract '${contract.description}' has been confirmed!`;
            }
            else if (action.type === '[PurchaseContract/Command] Confirm Buy Success') {
                msg = `Deposit fund made by the buyer for item '${contract.description}' has been confirmed!`;
            }
            else if (action.type === '[PurchaseContract/Command] Confirm Product Delivery Success') {
                msg = `Receiving item '${contract.description}' by the buyer has been confirmed!`;
            }
            return _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["SnackBarActions"].open({
                payload: {
                    message: msg,
                    color: _core_models__WEBPACK_IMPORTED_MODULE_14__["AppearanceColor"].Success
                }
            });
        })));
    }
    handleError(error) {
        const friendlyErrorMessage = Object(serialize_error__WEBPACK_IMPORTED_MODULE_3__["serializeError"])(error).message;
        return _core_store_actions__WEBPACK_IMPORTED_MODULE_13__["ErrorActions"].errorMessage({ errorMsg: friendlyErrorMessage });
    }
};
PurchaseContractEffects.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_11__["Store"] },
    { type: _services_flea_market_contract_service__WEBPACK_IMPORTED_MODULE_8__["FleaMarketContractService"] },
    { type: _services_purchase_contract_service__WEBPACK_IMPORTED_MODULE_9__["PurchaseContractService"] },
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["Actions"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
PurchaseContractEffects = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PurchaseContractEffects);



/***/ }),

/***/ "./src/app/market-place/store/reducers/index.ts":
/*!******************************************************!*\
  !*** ./src/app/market-place/store/reducers/index.ts ***!
  \******************************************************/
/*! exports provided: reducers, selectPurchaseContractState, selectIpfsState, getIpfsUploadStatus, getIpfsHash, getImageBlob, getProductEntitiesState, getProductKeys, getProductEntities, getAllProducts, getTotalProducts, isProductsLoaded, getSelectedPurchaseContract, getSelectedProductWidget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPurchaseContractState", function() { return selectPurchaseContractState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIpfsState", function() { return selectIpfsState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIpfsUploadStatus", function() { return getIpfsUploadStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIpfsHash", function() { return getIpfsHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageBlob", function() { return getImageBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductEntitiesState", function() { return getProductEntitiesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductKeys", function() { return getProductKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProductEntities", function() { return getProductEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllProducts", function() { return getAllProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalProducts", function() { return getTotalProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProductsLoaded", function() { return isProductsLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedPurchaseContract", function() { return getSelectedPurchaseContract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedProductWidget", function() { return getSelectedProductWidget; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _core_store_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/store/reducers */ "./src/app/core/store/reducers/index.ts");
/* harmony import */ var _ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ipfs-product-image.reducer */ "./src/app/market-place/store/reducers/ipfs-product-image.reducer.ts");
/* harmony import */ var _purchase_contract_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase-contract.reducer */ "./src/app/market-place/store/reducers/purchase-contract.reducer.ts");




function reducers(state, action) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
        ipfs: _ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_2__["reducer"],
        products: _purchase_contract_reducer__WEBPACK_IMPORTED_MODULE_3__["reducer"]
    })(state, action);
}
const selectPurchaseContractState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('purchaseContract');
const selectIpfsState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPurchaseContractState, state => state.ipfs);
const getIpfsUploadStatus = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIpfsState, _ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_2__["getIpfsUploadStatus"]);
const getIpfsHash = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIpfsState, _ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_2__["getIpfsHash"]);
const getImageBlob = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIpfsState, _ipfs_product_image_reducer__WEBPACK_IMPORTED_MODULE_2__["getImageBlob"]);
// ********************************************************************************
const getProductEntitiesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectPurchaseContractState, state => state.products);
/**
 * Adapters created with @ngrx/entity generate
 * commonly used selector functions including
 * getting all ids in the record set, a dictionary
 * of the records by id, an array of records and
 * the total number of records. This reduces boilerplate
 * in selecting records from the entity state.
 */
const { selectIds: getProductKeys, selectEntities: getProductEntities, selectAll: getAllProducts, selectTotal: getTotalProducts, } = _purchase_contract_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"].getSelectors(getProductEntitiesState);
const isProductsLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductEntitiesState, state => state.loaded);
const getSelectedPurchaseContract = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductEntitiesState, state => state.selectedPurchaseContract);
// select product widget entity based on the route param id
const getSelectedProductWidget = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProductEntities, _core_store_reducers__WEBPACK_IMPORTED_MODULE_1__["selectRouteParams"], (entities, params) => params && entities[params.id]);


/***/ }),

/***/ "./src/app/market-place/store/reducers/ipfs-product-image.reducer.ts":
/*!***************************************************************************!*\
  !*** ./src/app/market-place/store/reducers/ipfs-product-image.reducer.ts ***!
  \***************************************************************************/
/*! exports provided: FileUploadStatus, reducer, getIpfsUploadStatus, getIpfsHash, getImageBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploadStatus", function() { return FileUploadStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIpfsUploadStatus", function() { return getIpfsUploadStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIpfsHash", function() { return getIpfsHash; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getImageBlob", function() { return getImageBlob; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/ipfs-product-image.actions */ "./src/app/market-place/store/actions/ipfs-product-image.actions.ts");


var FileUploadStatus;
(function (FileUploadStatus) {
    FileUploadStatus["Pending"] = "Pending";
    FileUploadStatus["Success"] = "Success";
    FileUploadStatus["Error"] = "Error";
    FileUploadStatus["Progress"] = "Progress";
})(FileUploadStatus || (FileUploadStatus = {}));
const initialState = {
    status: FileUploadStatus.Pending,
    ipfsHash: null,
    imageBlob: null
};
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_1__["reset"], () => initialState), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_1__["uploadImage"], state => (Object.assign(Object.assign({}, state), { status: FileUploadStatus.Progress }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_1__["uploadImageSuccess"], (state, { ipfsHash }) => (Object.assign(Object.assign({}, state), { status: FileUploadStatus.Success, ipfsHash }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_1__["uploadImageFail"], state => (Object.assign(Object.assign({}, state), { status: FileUploadStatus.Error, ipfsHash: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_actions_ipfs_product_image_actions__WEBPACK_IMPORTED_MODULE_1__["downloadImageSuccess"], (state, { image }) => (Object.assign(Object.assign({}, state), { imageBlob: image }))));
const getIpfsUploadStatus = (state) => state.status;
const getIpfsHash = (state) => state.ipfsHash;
const getImageBlob = (state) => state.imageBlob;


/***/ }),

/***/ "./src/app/market-place/store/reducers/purchase-contract.reducer.ts":
/*!**************************************************************************!*\
  !*** ./src/app/market-place/store/reducers/purchase-contract.reducer.ts ***!
  \**************************************************************************/
/*! exports provided: sortByKey, adapter, initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortByKey", function() { return sortByKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/entity.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/market-place/store/actions/index.ts");



function sortByKey(a, b) {
    return a.productKey.localeCompare(b.productKey);
}
// based on https://next.ngrx.io/guide/entity/adapter
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (product) => product.productKey,
    sortComparer: sortByKey,
});
const initialState = adapter.getInitialState({
    loaded: false,
    selectedPurchaseContract: null
});
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, 
/**
 * based on https://blog.angular-university.io/ngrx-entity/
 * addAll: replaces the whole collection with a new one
 *  If the collection is to be sorted, the adapter will
 * sort each record upon entry into the sorted array.
 */
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["PurchaseContractActions"].loadProductsSuccess, (state, { products }) => adapter.setAll(products, Object.assign(Object.assign({}, state), { loaded: true, selectedPurchaseContract: null }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["PurchaseContractActions"].removePurchaseContractSuccess, (state, { key }) => adapter.removeOne(key, Object.assign(Object.assign({}, state), { selectedPurchaseContract: null }))), 
/**
 * The addOne function provided by the created adapter
 * adds one record to the entity dictionary
 * and returns a new state including that records if it doesn't
 * exist already. If the collection is to be sorted, the adapter will
 * insert the new record into the sorted array.
 */
Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["PurchaseContractActions"].createPurchaseContractSuccess, (state, { product }) => adapter.addOne(product, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["PurchaseContractActions"].loadPurchaseContractSuccess, (state, { contract }) => (Object.assign(Object.assign({}, state), { selectedPurchaseContract: contract }))));


/***/ })

}]);
//# sourceMappingURL=market-place-market-place-module-es2015.js.map