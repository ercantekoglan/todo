import { useEffect, useState } from "react";
import {
  handleTodoItemDataAdd,
} from "../../Services/todoItemService";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    fetch("/api/todoItems")
      .then((response) => response.json())
      .then((data) => {
        setTodoItems(data);
      });
  }, []);

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <h1 style={{ alignItems: "center" }}>Todo List</h1>
          <div
            style={{
              fontSize: "16px",
              alignItems: "center",
              marginLeft: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => 
              handleTodoItemDataAdd(setTodoItems)
            }
          >
            ➕
          </div>
        </div>
        {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              todoItems = {todoItems}
              setTodoItems = {setTodoItems}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default TodoApp;
