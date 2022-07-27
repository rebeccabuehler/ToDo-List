function App() {
    const [todos, setTodos] = React.useState([
        {
            text: 'Learn React',
            isComplete: false,
        },
        {
            text: 'Meeting a friend for lunch',
            isComplete: false,
        },
        {
            text: 'Build ToDo App',
            isComplete: false,
        }
    ]);
    const [value, setValue] = React.useState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(!value) return;
        const newToDos = [...todos, {text: value, isComplete: false}];
        setTodos(newToDos);
        setValue('');
    };
    const removeTodo = e => {
        const index = Number(e.target.id);
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    }
    return (<>
        {todos.map((todo, i) => <div key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            className="input"
            value={value}
            placeholder="Add ToDo ..."
            onChange={e => setValue(e.target.value)}
            />
        </form>
    </>);
}

ReactDOM.render(
    <App/>
,
document.getElementById('root')
);