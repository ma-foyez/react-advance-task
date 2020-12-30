import React, { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  storeTasksDataAction,
  handleChangeTextInputAction,
  getTasksDetailDataAction,
  updateTasksDataAction,
} from "../../redux/actions/TaskAction";

const TaskEdit = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const taskForm = useSelector((state) => state.TaskReducer.taskForm);

  const handleChangeText = (name, value) => {
    dispatch(handleChangeTextInputAction(name, value));
  }

  useEffect(() => {
    dispatch(getTasksDetailDataAction(id));
  }, [])

  const updateTask = async (e) => {
    e.preventDefault();
    dispatch(updateTasksDataAction(taskForm, id));
  };

  return (
    <Form onSubmit={(e) => updateTask(e)}>
      <h2 className="mt-5 pb-2">New Task</h2>
      <Form.Group controlId="title">
        <Form.Control
          type="text"
          placeholder="Enter Title"
          value={taskForm.Title}
          onChange={(e) => handleChangeText("Title", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <select
          className="form-control"
          value={taskForm.Priority}
          onChange={(e) => handleChangeText("Priority", e.target.value)}
        >
          <option value={""}>Select Task Priority</option>
          <option value={"Low"}>Low</option>
          <option value={"Medium"}>Medium</option>
          <option value={"High"}>High</option>
        </select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default TaskEdit;
