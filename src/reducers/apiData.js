
export default function apiData(state = [], action = {}) {

    switch (action.type) {
        case 'SET_API_DATA':
            return action.data 
        default:
            return state;
    }
}

export function setApiData(data) {
    return { type: 'SET_API_DATA', data };
}