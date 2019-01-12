import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

// With Redux-Thunk + ES2015 
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('./posts');
//   console.log('response', response)
  dispatch({ 
      type: 'FETCH_POST', 
      payload: response.data,
  });
};

//1. Before memoizing
// export const fetchUser = (userId) => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${userId}`);

//   dispatch({
//       type: 'FETCH_USER',
//       payload: response.data,
//   })
// }

//2. After memoizing
export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);    
};

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
      
    dispatch({
        type: 'FETCH_USER',
        payload: response.data,
    })
});
    
    

//TOTALLY FINE!
export const selectPost = () => {
    return {
        type: 'SELECT_POST'
    }
};


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