import React, { useState } from "react";
import { IoAdd } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { v4 as uuidv4 } from "uuid";

const Todolist = () => {

    let [todos, setTodos] = useState([]);

let [newTodo, setNewTodo] = useState("");

const addNewTask = () => {
    if(newTodo.trim() === "") return;
  setTodos((prevTodos) => {
    return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
  });
  setNewTodo("");
};

const updateTodoValue = (event) => {
  setNewTodo(event.target.value);
};

const deleteTodo = (id) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};

const markAsDone = (id) => {
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
  );
  setTodos(updatedTodos);
};


  return (
    <div className="todo py-5 w-full md:w-1/2  md:border-[1px] rounded-xl flex-col justify-center items-center text-center ">
      <h1 className="font-anton tracking-wide text-3xl">YOUR TASK LIST</h1>

      <div className="todo-select w-full mt-5">
        <input
          type="text"
          value={newTodo}
          onChange={updateTodoValue}
          onKeyDown={(e) => {
            if(e.key === "Enter") {
                addNewTask();
            }
          }}
          className="border-[1px] w-full sm:w-2/4 md:w-1/2 p-2 rounded-2xl outline-none font-semibold"
          placeholder="Enter Your Task"
        />
        <button
          onClick={addNewTask}
          className="w-full sm:w-auto mt-2 p-3 sm:ml-3 bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-full"
        >
          <IoAdd />
        </button>
      </div>

      <div className="todo-list mt-5 w-full flex justify-center items-center">
        <ul className="w-full md:w-3/4 max-h-59 overflow-y-scroll">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="border-[1px] my-2 rounded-2xl flex justify-between p-2"
            >
              <span
                style={{
                  textDecoration: todo.isDone ? "line-through" : "none",
                }}
                className="font-semibold"
              >
                {todo.task}
              </span>
              <span className="btns flex gap-2">
                <button onClick={() => markAsDone(todo.id)} className="p-1 bg-gradient-to-br from-sky-950 to-green-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-full">
                  <TiTick />
                </button>
                <button onClick={() => deleteTodo(todo.id) } className="p-1 bg-gradient-to-br from-red-950 to-orange-800 hover:to-sky-700 transition ease-in-out duration-200 rounded-full">
                  <RxCross2 />
                </button>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todolist;
