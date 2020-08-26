import React, {useState} from "react";
import {toggleEditing, updateTitle} from "../actions/allAction";
import {connect} from "react-redux";

const Title = (props) => {
    const [newTitle, setNewTitle] =useState("");

    const handleChanges = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        setNewTitle(e.target.value);
    };

    

    return(

    
       
                <div>
                    <h2>{newTitle}</h2>
                    <input 
                        className = "title"
                        type = "text"
                        name = "newTitle"
                        value={newTitle}
                        onChange={handleChanges}
                     />   
                    <button
                        onClick = {()=> {
                            props.updateTitle(newTitle);
                        }} 
                     > 
                     Update Title  
                     </button>  
                </div>
        
    );
    
       
};

const mapStateToProps = (state) => {
    return{
        editing: state.editing,
        title: state.titile
    };
};

const mapDispatchToProps = {toggleEditing, updateTitle};


export default connect(mapStateToProps, mapDispatchToProps)(Title);


// {/* <div>
// {!props.editing ? (
//     <h2>
//         {props.title}{" "}
//         <button 
//             onClick={()=> props.toggleEditing()}
//         />
//     </h2>
// ) : (

//     <div>
//         <input 
//             className = "title"
//             type = "text"
//             name = "newTitle"
//             value={newTitle}
//             onChange={handleChanges}
//          />   
//         <button
//             onClick = {()=> {
//                 props.updateTitle(newTitle);
//             }} 
//          > 
//          Update Title  
//          </button>  
//     </div>
// )}
// </div> */}