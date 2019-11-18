import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
    return (
      <ul>
        <li>Hello, {todoList[0]}</li>
        <li>Hello, {todoList[1]}</li>
        <li>Hello, {todoList[2]}</li>
        <li>Hello, {todoList[3]}</li>
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
