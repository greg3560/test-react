const initialState = {shops: []};

function refreshShops(state = initialState, action) {

    switch (action.type) {
        case 'REFRESH_SHOPS':
            return {
            ...state,
            shops: action.value
        };
        default:
            return state;
    }
}

export default refreshShops;
