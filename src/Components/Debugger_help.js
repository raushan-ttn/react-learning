import React from "react";

const Printstar = () => {
    let result = "";
    //debugger;
    for (let i = 0; i < 5; i++) {
        result += "*";
    }
    return result;
}

const AnotherPortals = () => {
    return (
        <div className="protal-component">Using Portal's to render this.</div>
    )
}
export { AnotherPortals };
export default Printstar;