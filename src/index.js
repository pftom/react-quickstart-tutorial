import React from "react";
import ReactDOM from "react-dom";

class Todo extends React.Component {
  render() {
    return <li>Hello, {this.props.content}</li>;
  }
}

class App extends React.Component {
  render() {
    const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];
    return (
      <ul>
        <Todo content={todoList[0]} />
        <Todo content={todoList[1]} />
        <Todo content={todoList[2]} />
        <Todo content={todoList[3]} />
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
