function handleTodoItemDataUpdate(data, shouldSave, todoItems) {
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
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((todoItems) => setTodoItems(todoItems));
  }