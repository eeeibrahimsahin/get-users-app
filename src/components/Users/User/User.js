import React from "react";
import Button from "../../Button/Button";

export default function User({ name: { first }, click, bgColor }) {
    let newClass = `card mb-2 ml-5 ${bgColor}`;
    return (
        <div className={newClass} style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{first}</h5>
                <p className="card-text">Click button for more detail</p>
                <Button btnName="More Detail" onClick={click} />
            </div>
        </div>
    );
}
