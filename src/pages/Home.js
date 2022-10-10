import React from "react";
import ReactDOM from "react-dom";
import Printstar, { AnotherPortals, AddUserForm } from "../Components/Debugger_help";
import Wrapper from "../Helper/Wrapper";

const Home = () => {
    return (
        <Wrapper>
            {/* We can create custom wrapper components like Wrapper  Or we can use Fragments <> </> (blank tag)*/}
            {/* Or We can also use <React.Fragment></React.Fragment>  all are same.*/}
            {/* We can also use <div></div> to merge multiple html lines in one tag but here one addtion div will generate.
But above method will not create, see UserListData and NoPageData component. */}
            <h1>This is our homepage.</h1>
            <Printstar />
            {ReactDOM.createPortal(<AnotherPortals />, document.getElementById("another_root"))};
            <AddUserForm />
        </Wrapper>
    )
}

export default Home;
