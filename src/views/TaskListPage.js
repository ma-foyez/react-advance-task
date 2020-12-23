import React, { useState, useEffect } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
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
        const data = [
            // {
            //   id: 1,
            //   title: 'First Title',
            //   description: 'Test Description',
            //   priority: 'High',
            // }
        ];

        setTasks(data);
    }, []);


    const createTask = (e) => {
        e.preventDefault();

        // validate data
        if (title.length === 0) {
            alert('Please give a title !');
            return false;
        }
        if (description.length === 0) {
            alert('Please give a description !');
            return false;
        }
        if (priority.length === 0) {
            alert('Please give a priority !');
            return false;
        }

        const taskItem = {
            id: 100,
            title,
            description,
            priority,
        }
        const tasksData = tasks;
        tasksData.unshift(taskItem);
        setTasks(tasksData);
        setTitle('');
        setDescription('');
        setPriority('');
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
