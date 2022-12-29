import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {
  componentWillUnmount() {
    console.log("componentWillUnmount!!!"); // execute 3 times because we called this component 3 times, we have 3 users in array.
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }

}

// const User = (props) => {
//   return <li className={classed.user}>{props.name}</li>
// }

export default User;
