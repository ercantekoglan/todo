// component i eklediginde bu sekilde import etmen lazim
import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);
  // auto id sorununu cozmek icin kullaniyoruz
 // const [todoId, setTodoId] = useState(4);
  useEffect(() => {
    //fetch the data from DB
    // fetch returns a promise
    fetch("/api/todoItems")
      // gelen veriyi json a cevir. .json is a method -- you can chain the methods which returns promise
      .then((response) =>
        response.json().then((data) => {
          setTodoItems(data);
        })
      );
  }, []);

  function handleTodoItemDataUpdate(data, shouldSave) {
    if (!shouldSave) {
      //if data changes
      const todoItemsCopy = [...todoItems];
      const index = todoItemsCopy.findIndex(
        (todoItem) => todoItem.id === data.id
      );
      todoItemsCopy[index] = data;
      setTodoItems(todoItemsCopy);
      // ost the changes to the DB
      // fetch('url', method:'post').then((result) =>  setTodoItems(todoItemsCopy);)
    } else {
      fetch("/api/todoItems", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((todoItems) => setTodoItems(todoItems));
    }
  }

  function handleTodoItemDataAdd() {
  /*  const todoItemsCopy = [...todoItems];
    todoItemsCopy.push({
      id: todoId,
      itemName: "",
      isDone: false,
    });
    setTodoId(todoId + 1);
    setTodoItems(todoItemsCopy);*/
    const data = {
      itemName: "Get the milk",
      isDone: false,
    };

    fetch("/api/todoItems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => setTodoItems(todoItems));
  }

  function handleTodoItemDataDelete(data) {
    //modify copy of existing array
   /* let todoItemsCopy = [...todoItems];
    todoItemsCopy = todoItemsCopy.filter((todoItem) => todoItem.id !== data.id);
    console.log("Deleting", data);
    setTodoItems(todoItemsCopy);*/
    fetch("/api/todoItems", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => setTodoItems(todoItems));
  }

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
            onClick={(e) => {
              handleTodoItemDataAdd();
            }}
          >
            ➕
          </div>
        </div>
        {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              emitTodoItemDataUpdate={handleTodoItemDataUpdate}
              emitTodoItemDataDelete={handleTodoItemDataDelete}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default TodoApp;
