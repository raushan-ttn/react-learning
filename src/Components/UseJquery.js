import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import $, { ajaxPrefilter } from 'jquery';



const UsejQuery = () => {
    // inline style.
    let colors = {
        color: 'red',
        textDecoration: 'underline'
    }
    //startup function.
    useEffect(() => {
        $("button").on("click", function () {
            alert("Hello clicked!!!");
        })
    },[]);

    return (
        <div className="array-map">
            <strong style={colors}>Create HTML button with jQuery event.</strong>
            <p><button className="click-me">Click me (jQuery)</button></p>
        </div>
    )
}


export default UsejQuery;