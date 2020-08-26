import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getJoke} from "../actions/allAction"
import App from "../App.css"

const Joke =({ getJoke, joke, isFetching}) => {
    useEffect(()=> {
        getJoke();
    }, [getJoke]);

    if (isFetching) {
        return <h2>Loading...</h2>;
    }

    return(
        <div className = "joke">
            <h2>Activity: {joke} </h2>
            <button onClick= {getJoke}>Get New Activity</button>
        </div>
    );
};

const mapStateToProps = (state) =>{
    return {joke: state.joke, 
            isFetching: state.isFetching};
};

const mapDispatchToProps = {getJoke};

export default connect(mapStateToProps, mapDispatchToProps)(Joke);


    