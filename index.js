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
    }
    return (<>
        {todos.map((todo, i) => <div key={i}>{todo.text}</div>)}
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