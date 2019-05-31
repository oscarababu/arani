const initialState = {
    isHidden:true
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type ==='SHOW_TENDER'){
        newState.isHidden = false
    }
    if(action.type ==='HIDE_TENDER'){
        newState.isHidden = true
    }
    return newState;
};

export default reducer;