import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
  render() {
    return <li>Hello, 图雀</li>;
  }
}

class App extends React.Component {
  render() {
    const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
    return (
      <ul>
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
