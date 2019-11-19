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
        {this.state.todoList.map((todo, index) => (
          <Todo content={todo} key={index} />
        ))}
      </ul>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
