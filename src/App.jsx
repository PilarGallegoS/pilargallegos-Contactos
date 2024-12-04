import "./App.css";
import { useState } from "react";
import React from "react";
import { Container, FormControl, ListGroup } from "react-bootstrap";


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
    const [hoveredTaskId, setHoveredTaskId] = useState(null);

    return (
        <Container className="container mt-5">
            <h1 className="text-center">To Do List:</h1>
            <div className="addTask mx-auto"style={{ maxWidth: "400px" }}>
                <FormControl type="text" value={newToDo} onChange={(e) => setNewToDo(e.target.value)} onKeyDown={addToDo} placeholder="Add a new task" />
            </div>
        
            <ListGroup className="mx-auto" style={{ maxWidth: "400px" }}>
                {ToDo.map((ToDo) => (
                    <ListGroup.Item id={ToDo.id} className="d-flex justify-content-between align-items-center" onMouseEnter={()=> setHoveredTaskId(ToDo.id)} onMouseLeave={() => setHoveredTaskId(null)}>
                        {ToDo.text}
                        <button onClick={() => removeToDo(ToDo.id)} style={{visibility: hoveredTaskId === ToDo.id ? "visible" : "hidden"}} className="btn btn-secondary btn-sm border-0">x</button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        
        </Container>
    )
}
export default ToDoList;
