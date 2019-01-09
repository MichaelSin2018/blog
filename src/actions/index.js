import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => {
  // logic below is breaking a rule of redux : Actions must be plain objects
  //1. Action creators must return plain JS objects with a type property - we are not!
  //2. By the time our action gets to a reducer, we won't have fetched our data!  
  // async, await is the reason
  // Listen to lesson 160, 161 agian
  const promise = jsonPlaceholder.get('./posts');

    return {
        type: 'FETCH_POSTS',
        payload: promise
    };
};