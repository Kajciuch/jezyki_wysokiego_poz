import React from "react";

function ScoreDisplay({ score }) {
    let message;
    if (score<50){
        message = <p>Za mało punktów!</p>;

    } else {
        message = <p>Super wynik!</p>;
    }
    return <div>{message}</div>;
}

export default ScoreDisplay;