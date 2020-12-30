import axios from "axios";
import * as Types from "../types/Types";

/**
 * Get All Task Action
 *
 */
export const getTasksDataAction = () => (dispatch) => {
  axios.get("https://todo-app37.herokuapp.com/loadTodo").then((response) => {
    let data = response.data;
    data.sort();
    data.reverse();
    dispatch({ type: Types.GET_TASKS, payload: data });
  });
};


export const getTasksDetailDataAction = (id) => (dispatch) => {
    axios
      .get(`https://todo-app37.herokuapp.com/singleTodo?id=${id}`)
      .then((response) => {
        let data = response.data;
        dispatch({ type: Types.GET_TASK_DETAIL, payload: data });
      });
};

/**
 * Store New Task
 *
 * @param {object} taskItem
 */
export const storeTasksDataAction = (taskItem) => (dispatch) => {
  // validate data
  if (taskItem.Title.length === 0) {
    alert("Please give a title !");
    return false;
  }
  if (taskItem.Priority.length === 0) {
    alert("Please give a priority !");
    return false;
  }

  axios
    .post("https://todo-app37.herokuapp.com/addTodo", taskItem)
    .then((response) => {
      dispatch({ type: Types.ADD_TASK, payload: taskItem });
      dispatch(getTasksDataAction());
    });
};

export const updateTasksDataAction = (taskItem, id) => (dispatch) => {
  // validate data
  if (taskItem.Title.length === 0) {
    alert("Please give a title !");
    return false;
  }
  if (taskItem.Priority.length === 0) {
    alert("Please give a priority !");
    return false;
  }

  axios
    .patch(
      `https://todo-app37.herokuapp.com/updateTodo?id=${id}`,
      taskItem
    )
      .then((response) => {
          if (response.data.ok == 1) {
              alert('Task Updated !')
          } else {
              alert('something went wrong !');
          }
    });
};



export const deleteTasksDataAction = (id) => (dispatch) => {
  axios
    .delete(
      `https://todo-app37.herokuapp.com/deleteTodo?id=${id}`
    )
      .then((response) => {
        console.log('response.data', response.data)
      if (response.data.ok == 1) {
          alert("Task Deleted");
          dispatch(getTasksDataAction());
      } else {
        alert("Something went wrong !");
      }
    });
};


export const handleChangeTextInputAction = (name, value) => (dispatch) => {
  const formData = {
    name: name,
    value: value,
  };
  dispatch({ type: Types.CHANGE_TASK_INPUT, payload: formData });
};
