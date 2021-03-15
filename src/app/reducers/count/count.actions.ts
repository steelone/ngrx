import { Action } from "@ngrx/store";

export enum CountActionsType {
    increase = `[COUNT] increase`,
    decrease = `[COUNT] decrease`,
    clear = `[COUNT] clear`,
    updatedAt = `[COUNT] updated at`,
}

export class CountIncreaseAction implements Action {
    readonly type = CountActionsType.increase
}

export class CountDecreaseAction implements Action {
    readonly type = CountActionsType.decrease
}

export class CountClearAction implements Action {
    readonly type = CountActionsType.clear
}

export class CountUpdatedAtAction implements Action {
    readonly type = CountActionsType.updatedAt;
    
    constructor(public payload:{
        updatedAt: number;
    }){}
}

export type CountActions = CountIncreaseAction
    | CountDecreaseAction
    | CountClearAction
    | CountUpdatedAtAction
