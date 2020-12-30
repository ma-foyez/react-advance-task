import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TestCounterHit from "../components/counter/TestCounterHit";

import { getTasksDataAction } from "../redux/actions/TaskAction";
import Layout from "./../components/layouts/Layout";
import TaskCreate from "./../components/tasks/TaskCreate";
import TaskList from "./../components/tasks/TaskList";

function TaskListPage() {
  const dispatch = useDispatch();
  const [isCreateMode, setIsCreateMode] = useState(false);
  const tasks = useSelector((state) => state.TaskReducer.tasks);

  useEffect(() => {
    dispatch(getTasksDataAction());
  }, []);


  return (
    <Layout>
      <TestCounterHit />
      {isCreateMode && <TaskCreate />}
      <TaskList
        tasks={tasks}
        onclickHandler={() => setIsCreateMode(isCreateMode ? false : true)}
      />
    </Layout>
  );
}

export default TaskListPage;
