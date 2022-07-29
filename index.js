function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "Learn React",
      isComplete: false,
    },
    {
      text: "Meeting a friend for lunch",
      isComplete: false,
    },
    {
      text: "Build ToDo App",
      isComplete: false,
    },
  ]);

  const addTodo = (text) => {
    const newToDos = [...todos, { text: text, isComplete: false }];
    setTodos(newToDos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div classname="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo index={i} key={i} todo={todo} remove={removeTodo} />
        ))}
        <ToDoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
