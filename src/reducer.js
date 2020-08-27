export const initialState = {
    user:null,
};

export const actionTypes = {
    SET_USER:"SET_USER",
    //defines what type of action to be dispatched to the user
};

const reducer =(state,action) =>{
    console.log(action);
    switch(action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user:action.user,
            };
        default:
         return state;    
    }
};

export default reducer;