import React from "react";
import ReactDOM from "react-dom";

const todoList = ["图雀", "图雀写作工具", "图雀社区", "图雀文档"];

class Todo extends React.Component {
  render() {
    if (this.props.index % 2 === 0) {
      return <li style={{ color: "red" }}>Hello, {this.props.content}</li>;
    }

    return <li>Hello, {this.props.content}</li>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nowTodo: "",
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

  handleChange(e) {
    this.setState({
      nowTodo: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault(e);
    const newTodoList = this.state.todoList.concat(this.state.nowTodo);

    this.setState({
      todoList: newTodoList,
      nowTodo: ""
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" onChange={e => this.handleChange(e)} />
          <button type="submit">提交</button>
        </form>
        <ul>
          {this.state.todoList.map((todo, index) => (
            <Todo content={todo} key={index} index={index} />
          ))}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
