import axios from "axios";

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const TOGGLE_EDITING = "TOGGLE_EDITING";
export const FETCHING_JOKE_START= "FETCHING_JOKE_START";
export const FETCHING_JOKE_SUCCESS= "FETCHING_JOKE_SUCCESS";
export const FETCHING_JOKE_ERROR= "FETCHING_JOKE_ERROR";




export function toggleEditing(){
    return {type: TOGGLE_EDITING};
};

export const updateTitle = (updateTitle)=>{
    return {type: UPDATE_TITLE, payload: updateTitle}
};

const headers = {
    Accept: "application/json"
};

export const getJoke = () => (dispatch) => {
    console.log("getJoke action");
    dispatch({type: FETCHING_JOKE_START });
    axios
    .get(`https://www.boredapi.com/api/activity/`, {headers: headers})
    .then((res)=>{
        dispatch({type: FETCHING_JOKE_SUCCESS, payload: res.data.activity});
        console.log("Yay!! Success: ",res);
    })
    .catch((err)=> {
        dispatch({
            type: FETCHING_JOKE_ERROR,
            payload: `${err.response.message} code: {err.response.code}`
        });
        console.log(err);
    });
};