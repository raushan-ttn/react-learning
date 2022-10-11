import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Printstar, { AnotherPortals, AddUserForm } from "../Components/Debugger_help";
import Wrapper from "../Helper/Wrapper";

import MainHeader from "../Helper/Wrapper/MainHeader/MainHeader";
import Login from "../Helper/Login/Login";
import Home1 from "../Helper/Home/Home";

const Home = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("isLoggedIn")) {
            setIsLoggedIn(true);
        }
    }, []); // Without adding dependancy/[] in useEffect it run only once on page load.


    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("isLoggedIn", 1);
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };

    return (
        <Wrapper>
            {/* We can create custom wrapper components like Wrapper  Or we can use Fragments <> </> (blank tag)*/}
            {/* Or We can also use <React.Fragment></React.Fragment>  all are same.*/}
            {/* We can also use <div></div> to merge multiple html lines in one tag but here one addtion div will generate.
But above method will not create, see UserListData and NoPageData component. */}
            <h1>This is our homepage.</h1>
            {/* Define  "start": "PORT=3006  react-scripts start", in package.json to run multiple project in local. */}
            <Printstar />
            <AddUserForm />
            {ReactDOM.createPortal(<AnotherPortals />, document.getElementById("another_root"))}
            <h2> Login component</h2>
            <React.Fragment>
                <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler} />}
                    {isLoggedIn && <Home1 onLogout={logoutHandler} />}
                </main>
            </React.Fragment>
        </Wrapper>
    )
}

export default Home;
