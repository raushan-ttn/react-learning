import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Printstar, { AnotherPortals, AddUserForm } from "../Components/Debugger_help";
import Wrapper from "../Helper/Wrapper";

import AuthContext from "../ExampleContext/auth-context";
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
               <AuthContext.Provider value={
                {
                    isLoggedIn:isLoggedIn
                }
               }>  {/* provided contains value of context. but its not working with default value, if we need change value then provide can help.  */}
                {/* We can listen context with two ways, (1) React Hooks (2) <AuthContext.Consumer>, consumer way is very elegant, so need to use hooks to get context.*/}
                    <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
                    <main>
                        {!isLoggedIn && <Login onLogin={loginHandler} />}
                        {isLoggedIn && <Home1 onLogout={logoutHandler} />}
                    </main>
                </AuthContext.Provider>
            </React.Fragment>
        </Wrapper>
    )
}

export default Home;

// Most cases we need to use props to pass data in component, becoz props is your mechanism to configure component and make them reusable, Only if we have something to forward lots of component and forwading to a component (something very specific) that case we need to use context, otherwise props is better way to pass data to component.

