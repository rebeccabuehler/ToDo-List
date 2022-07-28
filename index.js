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

  const addTodo = text => {
    const newToDos = [...todos, { text: text, isComplete: false }];
    setTodos(newToDos);
  };

  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };
  return (
    <>
      {todos.map((todo, i) => (
        <div key={i} id={i} onClick={removeTodo}>
          {todo.text}
        </div>
      ))}
      <ToDoForm addTodo={addTodo} />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
