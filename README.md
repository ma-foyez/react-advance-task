# React Todo

A Complete Single Page Application (SPA) or CRUD Application using React JS, React-Router, Redux, Redux-thunk, etc.

---

## Installation

1. Clone repository

```bash
https://github.com/ma-foyez/react-advance-task.git
```

2. Go to the folder

```bash
cd react-advance-task
```

3. Install Node packages

```bash
npm i
```

4. Run Local server with development change waching...

```bash
npm start
```

5. Open browser

```bash
http://localhost:3000
```

## Technology

- [x] JavaScript
- [x] React JS
- [x] Redux / Redux-thunk
- [x] HTML / CSS
- [x] Bootstrap

# Necessary API

## 1. Get Task List

---

```bash
  Method: Get
  https://todo-app37.herokuapp.com/loadTodo
```
## 2. Add New Task

---

```bash
  Method: POST
  https://todo-app37.herokuapp.com/addTodo
```
### Pass Object Data as parameters to store data
```bash 
     taskForm: {
          Title: "",
          Priority: "",
        },
```
## 3. Update Single Task

---

```bash
  Method: PATCH
  https://todo-app37.herokuapp.com/updateTodo?id=${id}
```
### Pass Object Data as parameters to update data
```bash 
     taskForm: {
          Title: "",
          Priority: "",
        },
```
## 4. Get Single Task
---

```bash
  Method: GET
  https://todo-app37.herokuapp.com/singleTodo?id=${id}
```
## 5. Delete Single Task
---

```bash
  Method: DELETE
  https://todo-app37.herokuapp.com/deleteTodo?id=${id}
```