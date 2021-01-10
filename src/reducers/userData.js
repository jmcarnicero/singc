const initialState = {
    selectedItems: [],
    location: '',
    name: '',
    phone: '',
    email: '',
    politica: false,
    horario: false
}

export default function userData(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_DATA':
            return { ...state, ...action.data }
        default:
            return state;
    }
}

export function setData(data) {
    return { type: 'SET_DATA', data };
}