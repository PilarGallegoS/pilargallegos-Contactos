import "./App.css";
import React, { useState, useEffect } from "react";
import { Container, FormControl, ListGroup } from "react-bootstrap";

function ToDoList() {
  const [ToDo, setToDo] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [hoveredTaskId, setHoveredTaskId] = useState(null);

  const apiUrl = "https://playground.4geeks.com/todo/users/PilarGallego";

  useEffect(() => {
    fetch(apiUrl, { method: "GET" })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setToDo(res.todos || []);
      })
      .catch((error) => {
        console.error("Error al cargar las tareas:", error);
      });
  }, []);

  const addToDo = (e) => {
    if (e.key === "Enter" && newToDo.trim() !== "") {
      const newTask = { label: newToDo, id: crypto.randomUUID() };
      fetch("https://playground.4geeks.com/todo/todos/PilarGallego", {
        method: "POST",
        body: JSON.stringify(newTask),
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("task added", data);
          setToDo((prevToDo) => [...prevToDo, data]);
          setNewToDo("");
        })
        .catch((error) => {
          console.error("Error al agregar la tarea:", error);
        });
    }
  };

  const removeToDo = (id) => {
    setToDo(ToDo.filter((task) => task.id !== id));
  };

  return (
    <Container className="container mt-5">
      <h1 className="text-center">To Do List:</h1>
      <div className="addTask mx-auto" style={{ maxWidth: "400px" }}>
        <FormControl
          type="text"
          value={newToDo}
          onChange={(e) => setNewToDo(e.target.value)}
          onKeyDown={addToDo}
          placeholder="Add a new task"
        />
      </div>

      <ListGroup className="mx-auto" style={{ maxWidth: "400px" }}>
        {ToDo.map((task) => (
          <ListGroup.Item
            key={task.id}
            className="d-flex justify-content-between align-items-center"
            onMouseEnter={() => setHoveredTaskId(task.id)}
            onMouseLeave={() => setHoveredTaskId(null)}
          >
            {task.label}
            <button
              onClick={() => removeToDo(task.id)}
              style={{
                visibility: hoveredTaskId === task.id ? "visible" : "hidden",
              }}
              className="btn btn-light btn-sm border-0"
            >
              x
            </button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default ToDoList;
