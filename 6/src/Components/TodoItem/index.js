import React from "react";

const TodoItem = (props) => {
  // const todoItemData = props.todoItemData;

  // obj destructuring
  // const {todoItemData, history} = props; birden cok obj alabilirsin bu sekilde.

  // const { todoItemData } = props;
  const { todoItemData, emitTodoItemDataUpdate, emitTodoItemDataDelete } =
    props;

  return (
    <div>
      <input
        type="checkbox"
        onChange={(e) => {
          todoItemData.isDone = !todoItemData.isDone;
          emitTodoItemDataUpdate(todoItemData, true);
          console.log("isDone Value = ", todoItemData.isDone);
        }}
        checked={todoItemData.isDone}
      />

      {todoItemData.isDone ? (
        <label
          style={todoItemData.isDone ? { textDecoration: "line-through" } : {}}
        >
          {" "}
          {todoItemData.itemName}{" "}
        </label>
      ) : (
        <input
          type="text"
          value={todoItemData.itemName}
          placeholder="New todo item here"
          onChange={(e) => {
            todoItemData.itemName = e.target.value;
            emitTodoItemDataUpdate(todoItemData, false);
          }}
          onBlur ={(e) => {
            todoItemData.itemName = e.target.value;
            emitTodoItemDataUpdate(todoItemData, true);
          }}
        />
      )}

      <span
        style={{ marginLeft: "1em", cursor: "pointer" }}
        onClick={(e) => {
          emitTodoItemDataDelete(todoItemData);
        }}
      >
        ➖
      </span>
    </div>
  );
};

export default TodoItem;
