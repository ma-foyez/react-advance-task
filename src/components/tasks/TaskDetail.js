import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteTasksDataAction } from '../../redux/actions/TaskAction';

const TaskDetail = (props) => {
  const dispatch = useDispatch();

    const { item, index } = props;

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{item._id}</td>
        <td>{item.Title}</td>
        <td>{item.Priority}</td>
        <td>
          <Link to={`/edit/${item._id}`}>
            <i
              className="fa fa-pencil text-success pointer"
              title="Edit Task"
            ></i>
          </Link>

          <i
            className="fa fa-trash text-danger ml-2 pointer"
            title="Delete Task"
            onClick={() => dispatch(deleteTasksDataAction(item._id))}
          ></i>
        </td>
      </tr>
    );
}

export default TaskDetail;