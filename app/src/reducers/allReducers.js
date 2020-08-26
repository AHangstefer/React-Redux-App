import {TOGGLE_EDITING, 
    UPDATE_TITLE,
    FETCHING_JOKE_START,
    FETCHING_JOKE_SUCCESS,
    FETCHING_JOKE_ERROR
 } from "../actions/allAction"

const initialState = {
    title: "Jokes!",
    editing: false,
    isFetching: false,
    error: "",
    joke: ""
  };



export const allReducers =(state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
                editing: false
            };
        case TOGGLE_EDITING:    
            return {
                ...state,
                editing: !state.editing
            };
        case FETCHING_JOKE_START:
            console.log("fetching a new joke");
            return {
                ...state,
                isFetching: true
            };
        case FETCHING_JOKE_SUCCESS:
            return{...state,
                joke: action.payload,
                isFetching: false
                };
        case FETCHING_JOKE_ERROR:
            return {
                ...state,
                error: action.payload, 
                isFetching: false
            };
            default:
                return state;
    }
};
  

