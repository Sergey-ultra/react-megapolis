
const initialState = {
    items:[],
    currentItem: {title:'Очень хорошо'}
}

const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FETCH_ITEMS":
            return {
                ...state,
                items: action.items
            };
            case "SET_CURRENT":
                console.log(action.current)
            return {
                ...state,
                currentItem: action.current
            };
        default:
            return state
    };
};

export default itemsReducer

//--------------------Action Creators----------------------------

export const fetchItemsAC = items => ({type: "FETCH_ITEMS", items})
export const setCurrentAC = current => ({type: "SET_CURRENT", current})

//--------------------Redux-thunk--------------------------------

export const fetchItems = items => dispatch => {
    dispatch(fetchItemsAC(items));
};
export const setCurrent = current => dispatch => {

    dispatch(setCurrentAC(current));
    console.log(current)
};