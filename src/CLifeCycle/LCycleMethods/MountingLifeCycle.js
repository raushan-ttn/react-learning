import React from "react";
import Counter from "./Counter";

class MountingLifeCycle extends React.Component {

    /** Four life cycle states and each have several methods. */
    // Mounting => constructor(), static getDerivedStateFromProps(), render(), componentDidMount()
    // Updating => static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
    // Unmounting => componentWillUnmount()
    // Error Handling => static getDerivedStateFromError(), componentDidCatch()

    constructor(props) {
        console.log("constructor called....");
        super(props);
        this.state = {
            mount: false,
        }
        this.mountCounter = () => this.setState({ mount: true })
        this.unmountCounter= () => this.setState({ mount: false });
    }

    render() {
        return (
            <div className="mounting" >
                <button onClick={this.mountCounter} disabled={this.state.mount}>Mount</button>
                <button onClick={this.unmountCounter} disabled={!this.state.mount}>unMount</button>
                {/* Mount Counter component each time. */}
                {this.state.mount ? <Counter /> : null}
                {/* <Counter1 myprops={this.state} myprops1={this.props} /> */}
            </div>
        );
    }

}

// create functional component and use in existing class.
const Counter1 = (props) => {
    console.log(props);
    return (
        <>
            <div>functional component inside class component {props.myprops.counter} and {props.myprops1.counter}</div>
        </>
    )
}
export default MountingLifeCycle;
