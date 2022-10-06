import React from "react";
import BasicHooks from "../CLifeCycle/HooksMethods/BasicHooks";
import AdvanceHooks from "../CLifeCycle/HooksMethods/AdvanceHooks";
import MountingLifeCycle from "../CLifeCycle/LCycleMethods/MountingLifeCycle";

/** Class component have Four life cycle states and each have several methods. */
// Mounting => constructor(), static getDerivedStateFromProps(), render(), componentDidMount()
// Updating => static getDerivedStateFromProps(), shouldComponentUpdate(), render(), getSnapshotBeforeUpdate(), componentDidUpdate()
// Unmounting => componentWillUnmount()
// Error Handling => static getDerivedStateFromError(), componentDidCatch()
/** Other APi's => setState(), forceUpdate() */
/** Class Properties => defaultProps, displayName */
/** Instance Properties => props, state */

const LifeCycleExample = () => {
    return (
        <div className="life-cycle">
            <div className="class-method">
                <h1>Class component </h1>
                <MountingLifeCycle />
            </div>
            <div style={{ color: "yellow" }}>######################################</div>
            <div className="hooks-method">
                <BasicHooks />
                <div style={{ color: "green" }}>######################################</div>
                <AdvanceHooks />
            </div>
        </div>
    )
}

export default LifeCycleExample;