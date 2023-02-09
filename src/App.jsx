import { Provider } from "react-redux";
import Form from "./components/form";
import TodoList from "./components/todoList";
import { store } from "./redux/redux";
import "./styles/index.scss";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app dark">
        <h1>Todo List</h1>
        <TodoList />
        <Form />
      </div>
    </Provider>
  );
};
export default App;
