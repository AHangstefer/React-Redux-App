import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getJoke} from "../actions/allAction"

const Joke =({ getJoke, joke, isFetching}) => {
    useEffect(()=> {
        getJoke();
    }, [getJoke]);

    if (isFetching) {
        return <h2>Loading...</h2>;
    }

    return(
        <>
            <h2>Joke: {joke} </h2>
            <button onClick= {getJoke}>Get New Joke</button>
        </>
    );
};

const mapStateToProps = (state) =>{
    return {joke: state.joke, isFetching: state.isFetching};
};

const mapDispatchToProps = {getJoke};

export default connect(mapStateToProps, mapDispatchToProps)(Joke);


    