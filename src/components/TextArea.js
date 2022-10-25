import React from "react";

const TextArea = (props) => {
    return (
        <div>
            <input name={props.name} onChange={props.changeToHandle} placeholder={props.placeholder} />
        </div>
    )
}

export default TextArea