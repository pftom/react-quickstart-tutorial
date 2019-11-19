import React from "react";
import ReactDOM from "react-dom";

const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];

class Todo extends React.Component {
  render() {
    return <li>Hello, {this.props.content}</li>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: []
    };
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        todoList: todoList
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  render() {
    return (
      <ul>
        <Todo content={this.state.todoList[0]} />
        <Todo content={this.state.todoList[1]} />
        <Todo content={this.state.todoList[2]} />
        <Todo content={this.state.todoList[3]} />
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
