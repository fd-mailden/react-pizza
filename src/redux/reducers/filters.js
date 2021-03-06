
const initialState = {
    categry: 0,
    sortBy: 'popular',
}

const filters = (state = initialState, action)=> {
    if (action.type === 'SET_SORT_BY'){
        return{
            ...state,
            sortBy: action.payload,
        };
    }

    if (action.type === 'SET_CATEGORY'){
        return{
            ...state,
            categry: action.payload,
        };
    }
    return state;
}
export default filters;