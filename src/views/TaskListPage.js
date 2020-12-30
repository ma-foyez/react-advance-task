import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import CounterComponent from "../components/counter/CounterComponent";
import TestCounterHit from "../components/counter/TestCounterHit";
import { getTasksData, storeTaskData } from "../services/TaskService";
import Layout from "./../components/layouts/Layout";
import TaskCreate from "./../components/tasks/TaskCreate";
import TaskList from "./../components/tasks/TaskList";

function TaskListPage() {
  const dispatch = useDispatch();
  const [isCreateMode, setIsCreateMode] = useState(false);
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    initilializeData();
  }, []);

  const initilializeData = async () => {
    let data = await getTasksData();
    data.sort();
    data.reverse();
    dispatch({ type: "GET_TASKS", payload: data });
  };

  return (
    <Layout>
      <br />
      <br />
      <br />
      <br />
      <CounterComponent />
      <br />
      <TestCounterHit />
      <br />
      <br />
      <br />
      {isCreateMode && <TaskCreate />}
      <TaskList
        tasks={tasks}
        onclickHandler={() => setIsCreateMode(isCreateMode ? false : true)}
      />
    </Layout>
  );
}

export default TaskListPage;
