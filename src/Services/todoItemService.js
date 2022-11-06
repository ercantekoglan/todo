function handleTodoItemDataAdd(setTodoItems) {
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

function handleTodoItemDataUpdate(data, todoItems, setTodoItems, shouldSave) {
  if (!shouldSave) {
    const todoItemsCopy = [...todoItems];
    const index = todoItemsCopy.findIndex(
      (todoItem) => todoItem.id === data.id
    );
    todoItemsCopy[index] = data;
    setTodoItems(todoItemsCopy);
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

function handleTodoItemDataDelete(data, setTodoItems) {
  fetch("/api/todoItems", {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((todoItems) => setTodoItems(todoItems));
}

export {handleTodoItemDataAdd, handleTodoItemDataUpdate, handleTodoItemDataDelete };
