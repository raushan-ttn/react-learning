// import { useState } from 'react';
import { Component } from 'react';
import User from './User';

import classes from './Users.module.css';

class Users extends Component {

  constructor() { // to defining state.
    super(); // this call the constructor of parent class.
    this.state = {
      showUsers: true,
      moreState: "Test",
      // nested: {},
      // data: []  // All types of state will work, but group togather always.
    };
    // In class based component state always will be object, but in function componenet state can be anything(string, boolean, object).
    // And it also has to be a property name "state"! this name is not up to you.
    // In class based component always group all states in "state" object.
  }

  toggleUsersHandler() {
    // this.state.showUsers = false; // this will not work!!!
    // this.setState({ showUsers: false }); // always merge state, not override other state value.
    this.setState((curState) => {  // we can also pass function in setState like functional comp.
      return { showUsers: !curState.showUsers };
    });
  }


  render() { // we can not write function inside render function, its technically correct but sometime not behave correctly.

    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        <button onClick={this.toggleUsersHandler.bind(this)}> {/** we need to use bind() to manage same context inside "toggleUsersHandler" function.  */}
          {this.state.showUsers ? 'Hide' : 'Show'} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}


// const Users = () => {
//   const [showUsers, setShowUsers] = useState(true);

//   const toggleUsersHandler = () => {
//     setShowUsers((curState) => !curState);
//   };

//   const usersList = (
//     <ul>
//       {DUMMY_USERS.map((user) => (
//         <User key={user.id} name={user.name} />
//       ))}
//     </ul>
//   );

//   return (
//     <div className={classes.users}>
//       <button onClick={toggleUsersHandler}>
//         {showUsers ? 'Hide' : 'Show'} Users
//       </button>
//       {showUsers && usersList}
//     </div>
//   );
// };

export default Users;
