import React from "react";
import ArrayMap from "../Components/ArrayFunc/ArrayMap";
import ArrayReduce from "../Components/ArrayFunc/ArrayReduce";
import ArrayFilter from "../Components/ArrayFunc/ArrayFilter";
import UsejQuery from "../Components/UseJquery";
const ArrayExample = () => {
    return (
        <div className="example-array">
            <h1> Example of all array functions.</h1>
            <ArrayMap />
            <ArrayReduce />
            <ArrayFilter />
            <UsejQuery />
        </div>
    )
}

export default ArrayExample;