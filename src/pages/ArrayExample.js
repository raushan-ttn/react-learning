import React from "react";
import ArrayMap from "../Components/ArrayFunc/ArrayMap";
import ArrayReduce from "../Components/ArrayFunc/ArrayReduce";
import ArrayFilter from "../Components/ArrayFunc/ArrayFilter";
const ArrayExample = () => {
    return (
        <div className="example-array">
            <h1> Example of all array functions.</h1>
            <ArrayMap />
            <ArrayReduce />
            <ArrayFilter />
        </div>
    )
}

export default ArrayExample;