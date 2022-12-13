import React from "react";
import "../styles/App.css";
const PaginationButtonsList = (props) => {
  const eventHandler = (event) => {
    event.currentTarget.classList.add("active-btn");

    for (let i = 1; i <= 20; i++) {
      if (!(event.target.id == "button-" + i)) {
        document.getElementById("button-" + i).classList.remove("active-btn");
      }
    }
    props.buttonPressed(event.target.innerText);
  };

  return (
    <div className="pagination-buttons-list">
      <button id="button-1" className="active-btn" onClick={eventHandler}>
        1
      </button>
      <button id="button-2" onClick={eventHandler}>
        2
      </button>
      <button id="button-3" onClick={eventHandler}>
        3
      </button>
      <button id="button-4" onClick={eventHandler}>
        4
      </button>
      <button id="button-5" onClick={eventHandler}>
        5
      </button>
      <button id="button-6" onClick={eventHandler}>
        6
      </button>
      <button id="button-7" onClick={eventHandler}>
        7
      </button>
      <button id="button-8" onClick={eventHandler}>
        8
      </button>
      <button id="button-9" onClick={eventHandler}>
        9
      </button>
      <button id="button-10" onClick={eventHandler}>
        10
      </button>
      <button id="button-11" onClick={eventHandler}>
        11
      </button>
      <button id="button-12" onClick={eventHandler}>
        12
      </button>
      <button id="button-13" onClick={eventHandler}>
        13
      </button>
      <button id="button-14" onClick={eventHandler}>
        14
      </button>
      <button id="button-15" onClick={eventHandler}>
        15
      </button>
      <button id="button-16" onClick={eventHandler}>
        16
      </button>
      <button id="button-17" onClick={eventHandler}>
        17
      </button>
      <button id="button-18" onClick={eventHandler}>
        18
      </button>
      <button id="button-19" onClick={eventHandler}>
        19
      </button>
      <button id="button-20" onClick={eventHandler}>
        20
      </button>
    </div>
  );
};

export { PaginationButtonsList };
