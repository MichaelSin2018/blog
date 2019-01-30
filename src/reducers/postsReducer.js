//Listen again lectue 170
export default (state=[], action) => {
  console.log('postsReducer action.payload', action)
    //1. Before using switch + case
    // if (action.type === 'FETCH_POSTS') {
    //     return action.payload;
    // }
    // return state;

    //1. After using switch + case
    switch (action.type) {
        case 'FETCH_POST':
          return action.payload;
        default:
          return state;
    }

    //bad!
    // return document.querySelector('input')

    //bad!
    // return Axios.get('./posts');

    //good
    // return state + action;

    //bad!
    // state[0] = 'Sam'
    // state.pop()
    // state.push()

    //bad!
    // state.name = 'Same'
    // state.age = 30;
};