import React from "react";
import BasicHooks from "../CLifeCycle/HooksMethods/BasicHooks";
import AdvanceHooks from "../CLifeCycle/HooksMethods/AdvanceHooks";
const LifeCycleExample = () => {
    return (
        <div className="life-cycle">
            <div className="class-method">
                Class component
            </div>
            <div className="hooks-method">
                <BasicHooks />
                <div style={{color:"green"}}>######################################</div>
                <AdvanceHooks />
            </div>
        </div>
    )
}

export default LifeCycleExample;