import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { getTasksData, storeTaskData } from '../services/TaskService';
import Layout from './../components/layouts/Layout';
import TaskCreate from './../components/tasks/TaskCreate';
import TaskList from './../components/tasks/TaskList';

function TaskListPage() {

    const [isCreateMode, setIsCreateMode] = useState(false);
    const [tasks, setTasks] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState();
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        // Call api and get data
        initilializeData();
    }, []);


    const initilializeData = async () => {
        let data = await getTasksData();
        data.sort();
        data.reverse();
        setTasks(data);
    }


    const createTask = async (e) => {
        e.preventDefault();

        // validate data
        if (title.length === 0) {
            alert('Please give a title !');
            return false;
        }
        if (priority.length === 0) {
            alert('Please give a priority !');
            return false;
        }

        const taskItem = {
          Title: title,
          Priority: priority,
        }

        // Call api and store to database
        const isAdded = await storeTaskData(taskItem);
        if (isAdded) {
            setTitle("");
            setDescription("");
            setPriority("");
            await initilializeData();
        } else {
            alert('Something went wrong !');
        }
    }

    return (
        <Layout>
            {
                isCreateMode && (
                    <TaskCreate
                        title={title}
                        setTitle={(val) => setTitle(val)}
                        description={description}
                        setDescription={(val) => setDescription(val)}
                        priority={priority}
                        setPriority={(val) => setPriority(val)}
                        createTask={(val) => createTask(val)}
                    />
                )
            }
            <TaskList tasks={tasks} onclickHandler={() => setIsCreateMode(isCreateMode ? false : true)} />
        </Layout>
    );
}

export default TaskListPage;
