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
    return (<></>);
}

ReactDOM.render(
    <App/>
,
document.getElementById('root')
);