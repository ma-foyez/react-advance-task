import React from 'react';
import Layout from '../components/layouts/Layout';
import TaskEdit from '../components/tasks/TaskEdit';

function TaskEditPage(props) {
    return (
        <Layout>
            <TaskEdit />
        </Layout>
    );
}

export default TaskEditPage;
