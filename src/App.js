import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/dashboard";
import PageNotFound from "./Components/PageNotFound/pageNotFound";
import TodoApp, {addItem} from "./Components/ToDoApp/todoApp";

function App() {

  addItem();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoApp />} />
        <Route path="dashboard/*" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
