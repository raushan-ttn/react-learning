import React from "react";

class Counter extends React.Component {
    constructor(props) {
        console.log("constructor ...");
        super(props);

        this.state = {
            counter: 0,
        }
        this.increment = () => this.setState({ counter: this.state.counter + 1 })
        this.decrement = () => this.setState({ counter: this.state.counter - 1 })
    }

    // This is called right after render.at only one once... at page load time.
    componentDidMount() {
        console.log('componentDidMount');
        console.log("---------------------------------");
    }

    render() {
        console.log("Render...");
        return (
            <div>
                <button className="button" onClick={this.increment}>+</button>
                <button className="button" onClick={this.decrement}>-</button>
                <div className="counter">
                    Counter:  {this.state.counter}
                </div>
            </div>
        )
    }

    // This will not call on page load, it called each time after render when component will update.
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("componentDidUpdate");
        console.log("---------------------------------");
    }

    componentWillUnmount() {
        console.log("willUnMount...");
        console.log("---------------------------------");
    }
}

export default Counter;