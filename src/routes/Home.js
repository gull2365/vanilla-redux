import React, { useState } from "react";
import { connect } from "react-redux";

function Home(toDos) {
  const [text, setText] = useState("");
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefalut();
    console.log(text);
  }
  return (
    <>
      <h1>To Do</h1>
      <form onuSubmit={onSubmit}>
        <input type="text" value={text} onchange={onChange} />
        <button>ADD</button>
      </form>
      <ul>{JSON.stringify(toDos)}</ul>
    </>
  );
}
function getCurrentState(state){
  return {toDos: state}

}

export default connect(getCurrentState)(Home);
