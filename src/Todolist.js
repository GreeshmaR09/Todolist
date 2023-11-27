import React, { useState } from 'react'
import './External.css'

function Todolist() {


    const [input, setInput] = useState("");
    const [inputdes, setInputdes] = useState("");
    const [avatarinput, setAvatar] = useState("");
    const [listtitle, setList] = useState([]);
    const [editTask, setEditTask] = useState({ id: null, text: "", avatarinput: "" });
  
    function onclickEvent() {
      setList([
        ...listtitle,
        { id: Date.now(), input, inputdes, avatarinput },
      ]);
      setInput("");
      setInputdes("");
      setAvatar("");
    }
  
    const deleteTask = (id) => {
      setList(listtitle.filter((item) => item.id !== id));
    };
  
    const editTaskText = (id, text, avatarinput) => {
      setEditTask({ id, text, avatarinput });
    };
  
    const updateTask = () => {
      setList(
        listtitle.map((item) =>
          item.id === editTask.id ? { ...item, input: editTask.text, avatarinput: editTask.avatarinput } : item
        )
      );
      setEditTask({ id: null, text: "", avatarinput: "" });
    };
  return (
        <div className="maindiv">
          <input
            type="text"
            placeholder="Enter your task..."
            className="inputStyle"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setAvatar(e.target.value.charAt(0));
            }}
          />
          <input
            type="text"
            placeholder="Enter description..."
            className="inputStyle"
            value={inputdes}
            onChange={(e) => setInputdes(e.target.value)}
          />
          <button className="button" onClick={onclickEvent}>
            Add
          </button>
      
          {listtitle.map((item) => (
            <div className="displayStyle" key={item.id}>
              <div className="avatar">{item.avatarinput}</div>
              <div className="title">
                {item.input}
                <br />
                <span className="description">{item.inputdes}</span>
              </div>
              {item.id === editTask.id ? (
                <div>
                  <input
                    type="text"
                    className="inputStyle"
                    value={editTask.text}
                    onChange={(e) =>
                      setEditTask({ ...editTask, text: e.target.value, avatarinput: e.target.value.charAt(0) })
                    }
                  />
                  <div onClick={updateTask} className="updateButton">
                    <img src="update.png" alt="Update" className="size" />
                    Update
                  </div>
                </div>
              ) : (
                <div className="buttons">
                  <div className="btneditdlt" onClick={() => editTaskText(item.id, item.text, item.avatarinput)}>
                    <img src="edit.png" alt="Edit" className="buttonIcon" />
                  </div>
                  <div className="btneditdlt" onClick={() => deleteTask(item.id)}>
                    <img src="delete.png" alt="Delete" className="buttonIcon" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      );
}

export default Todolist