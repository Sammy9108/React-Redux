import AppHeader from "../Components/AppHeader";
import AddTodo from "../Components/AddTodo";
import AppTodoContent1 from "../Components/AppTodoContent1";
import AppTodoContent2 from "../Components/AppTodoContent2";
import "./App.css";
import IndiaClock from "../Components/IndiaClock";
function App() {
  return (
    <center className="Todo-container">
      <AppHeader />
      <AddTodo></AddTodo>
      <AppTodoContent1></AppTodoContent1>
      <AppTodoContent2></AppTodoContent2>

      <IndiaClock></IndiaClock>
    </center>
  );
}

export default App;
