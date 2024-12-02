import "./App.css";
import { useState } from "react";
import React from "react";

function ToDoList() {
    const [ToDo, setToDo] = useState([
        { text: 'Make the bed', id: crypto.randomUUID() },
        { text: 'Wash my hands', id: crypto.randomUUID() },
        { text: 'Eat', id: crypto.randomUUID() },
        { text: 'Walk the dog', id: crypto.randomUUID() },
    ]);
    const [newToDo, setNewToDo] = useState("");

    const addToDo = (e) => {
        if (e.key === "Enter" && newToDo.trim() !== "") {
            const newTask = { text: newToDo, id: crypto.randomUUID() };
            setToDo([...ToDo, newTask]);
            setNewToDo("");
        }
    };
    const removeToDo = (id) => {
        setToDo(ToDo.filter((ToDo) => ToDo.id !== id));
    };
    return (
        <div>
            <input type="text" value={newToDo} onChange={(e) => setNewToDo(e.target.value)} onKeyDown={addToDo} placeholder="Add a new task" />
            <ul>
                {ToDo.map((ToDo) => (
                    <li id={ToDo.id}>
                        {ToDo.text}
                        <button onClick={() => removeToDo(ToDo.id)}>x</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default ToDoList;
