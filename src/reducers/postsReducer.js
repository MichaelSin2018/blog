import Axios from "axios";

//Listen again lectue 170
export default (state, action) => {
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