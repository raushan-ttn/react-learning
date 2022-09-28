import React from "react";
import BasicHooks from "../CLifeCycle/HooksMethods/BasicHooks";

const LifeCycleExample = () => {
    return (
        <div className="life-cycle">
            <div className="class-method">
                Class component
            </div>
            <div className="hooks-method">
                <BasicHooks />
            </div>
        </div>
    )
}

export default LifeCycleExample;