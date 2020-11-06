export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';

export function openPopup(data) {
    return {
        type: 'OPEN_POPUP',
        data
    }
}

export function closePopup(data) {
    return {
        type: 'CLOSE_POPUP',
        data
    }
}