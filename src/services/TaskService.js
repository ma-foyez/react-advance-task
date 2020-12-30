import axios from "axios";

export const getTasksData = async () => {
    let data = [];
    await axios.get("https://todo-app37.herokuapp.com/loadTodo").then((response) => {
        data = response.data;
    });
    return data;
}

/**
 * Store New Task Data to database
 * 
 * @param {object} taskItem 
 */
export const storeTaskData = async (taskItem) => {
  let isAdded = false;
  await axios
    .post("https://todo-app37.herokuapp.com/addTodo", taskItem)
    .then((response) => {
      isAdded = response.data;
    });
  return isAdded;
};