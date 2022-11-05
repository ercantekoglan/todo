import React from "react";

const TodoItem = (props) => {
  // const todoItemData = props.todoItemData;

  // obj destructuring
  // const {todoItemData, history} = props; birden cok obj alabilirsin bu sekilde.
 
  // const { todoItemData } = props;
  const { todoItemData, emithandleTodoItemDataUpdate } = props;

  return (
    <div >
      <>
        <input type="checkbox" onChange={(e) => {
         
            todoItemData.isDone = !todoItemData.isDone;
            emithandleTodoItemDataUpdate(todoItemData);
            console.log("isDone Value = ", todoItemData.isDone);
        }} value={todoItemData.isDone}/>
        <label
          style={todoItemData.isDone ? { textDecoration: "line-through" } : {}}
        >
          {todoItemData.itemName}
        </label>
      </>
    </div>
  );
};

export default TodoItem;
