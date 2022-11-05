// component i eklediginde bu sekilde import etmen lazim
import { useEffect, useState } from "react";
import Footer from "../Footer/footer";
import Header from "../Header/header";
import TodoItem from "../TodoItem";

const TodoApp = () => {
  const [todoItems, setTodoItems] = useState([]);
  useEffect(() => {
    //fetch the data from DB
    const dataFromDB = [
      {
        id: 1,
        itemName: "Get the milk!",
        isDone: false,
      },
      {
        id: 2,
        itemName: "Pick up the kids",
        isDone: false,
      },
      {
        id: 3,
        itemName: "Go to work",
        isDone: true,
      },
    ];

    // assign data from DB to React via set method
    setTodoItems(dataFromDB);
  }, []);
  /*
or
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      itemName: "Get the milk!",
      isDone: false,
    },
    {
      id: 2,
      itemName: "Pick up the kids",
      isDone: false,
    },
    {
      id: 3,
      itemName: "Go to work",
      isDone: true,
    },
  ]);
*/
  function handleTodoItemDataUpdate(data) {
    //if data changes
    const todoItemsCopy = [...todoItems];
    const index = todoItemsCopy.findIndex(
      (todoItem) => todoItem.id === data.id
    );
    todoItemsCopy[index] = data;
    setTodoItems(todoItemsCopy);
    // ost the changes to the DM
    // fetch('url', method:'post').then((result) =>  setTodoItems(todoItemsCopy);)
  }

  return (
    <div>
      <Header />
      <div style={{ marginBottom: "3rem" }}>
        <h1>Todo List</h1>
        {todoItems.map((data) => {
          return (
            <TodoItem
              todoItemData={data}
              key={data.id}
              emithandleTodoItemDataUpdate={handleTodoItemDataUpdate}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
};
export default TodoApp;
