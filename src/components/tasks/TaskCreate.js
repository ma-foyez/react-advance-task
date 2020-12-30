import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import { getTasksData, storeTaskData } from "../../services/TaskService";
import { useDispatch } from 'react-redux';

const TaskCreate = (props) => {
  const dispatch = useDispatch();
    // const { title, setTitle, priority, setPriority, createTask } = props;

    const [title, setTitle] = useState('');
    const [priority, setPriority] = useState('');

    const createTask = async (e) => {
      e.preventDefault();

      // validate data
      if (title.length === 0) {
        alert("Please give a title !");
        return false;
      }
      if (priority.length === 0) {
        alert("Please give a priority !");
        return false;
      }

      const taskItem = {
        Title: title,
        Priority: priority,
      };

      await storeTaskData(taskItem);
      dispatch({ type: 'ADD_TASK', payload: taskItem });
      
      let data = await getTasksData();
      data.sort();
      data.reverse();
      dispatch({ type: "GET_TASKS", payload: data });
    };

    return (
        <Form onSubmit={(e) => createTask(e)}>
            <h2 className="mt-5 pb-2">
                New Task
            </h2>
            <Form.Group controlId="title">
                <Form.Control type="text" placeholder="Enter Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <select className="form-control" value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value={''}>Select Task Priority</option>
                    <option value={'Low'}>Low</option>
                    <option value={'Medium'}>Medium</option>
                    <option value={'High'}>High</option>
                </select>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default TaskCreate;