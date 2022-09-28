import React, {Fragment} from "react";
// Fragment allows us to write clean code, remove unnessary html tag from code.
const NoPageData = () => {
    return (
        // <React.Fragment>
        //     <h1> Page Not Found.</h1>
        //     <p> Are you looking for something else. click here.</p>
        // </React.Fragment>
        // We can use <React.Fragment> or Shortcut <Fragment> both are same.
        <Fragment>
            <h1> Page Not Found.</h1>
            <p> Are you looking for something else. click here.</p>
        </Fragment>
    )
}

export default NoPageData;