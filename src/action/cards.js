export const CARD_MOVE_TO_SOME_COLUMN_DND = 'CARD_MOVE_TO_SOME_COLUMN_DND';
export const ADD_CARD = 'ADD_CARD';
export const ADD_COLUMN = 'ADD_COLUMN';
export function cardMoveToSomeColumnDnd(data) {
    return {
        type: 'CARD_MOVE_TO_SOME_COLUMN_DND',
        data
    }
}

export function addCard(data) {
    return {
        type: 'ADD_CARD',
        data
    }
}

export function addColumn(data) {
    return {
        type: 'ADD_COLUMN',
        data
    }
}