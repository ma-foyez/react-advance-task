import React from 'react';
import { Table } from 'react-bootstrap'
import TaskDetail from './TaskDetail';

const TaskList = (props) => {
    const { tasks, onclickHandler } = props;
    return (
        <div>
            <div>
                <div className="float-left">
                    <h2 className="mt-5 pb-2">
                        My Tasks
                    </h2>
                </div>
                <div className="float-right">
                    <h2>
                        <button className="btn btn-primary" onClick={() => onclickHandler()}>
                            <i className="fa fa-plus-circle" title="Create Task"></i>
                        </button>
                    </h2>
                </div>
                <div className="clearfix"></div>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tasks.map((item, index) => (
                            <TaskDetail key={index} item={item} index={index} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default TaskList;