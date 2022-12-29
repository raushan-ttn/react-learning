import { Component } from "react";
import classes from "./User.module.css";

class User extends Component {

  render() {
    return <li className={classes.user}>{this.props.name}</li>
  }

}

// const User = (props) => {
//   return <li className={classed.user}>{props.name}</li>
// }

export default User;
