import jsonPlaceholder from '../apis/jsonPlaceholder';

// Without Redux-Thunk  
// export const fetchPosts = () => {
//     // logic below is breaking a rule of redux : Actions must be plain objects
//     //1. Action creators must return plain JS objects with a type property - we are not!
//     //2. By the time our action gets to a reducer, we won't have fetched our data!  
//     // async, await is the reason
//     // Listen to lesson 160, 161 agian
//     const promise = jsonPlaceholder.get('./posts');
//       return {
//           type: 'FETCH_POSTS',
//           payload: promise
//       };
// };

// With Redux-Thunk 
// export const fetchPosts = () => {
  
//   return async dispatch => {
//     const response = await jsonPlaceholder.get('./posts');

//     dispatch({ 
//         type: 'FETCH_POST', 
//         payload: response,
//     })
//   }
// };

// With Redux-Thunk + ES2015 
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('./posts');

  dispatch({ 
      type: 'FETCH_POST', 
      payload: response,
  })
};


//TOTALLY FINE!
export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
};