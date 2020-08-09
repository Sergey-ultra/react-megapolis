
const initialState = {
    appInitialized: true,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case "APP_INITIALIZED":
            return {
                ...state,
                appInitialized: true
            };
        default:
            return state
    };
};

export default appReducer;

export const appInit = () => ({type: "APP_INITIALIZED"})