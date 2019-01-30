export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
        //1. Before using destructuring assignment
        //return action.payload;
        //1. After using destructuring assignment
        return [...state, action.payload];
        default:
          return state;
    }
};