import { Button, Card } from "antd";
import { useState } from "react";

// API
const todoList = [
  {
    name: "List 1",
    detail: [
      {
        name: "Todo 1",
        status: 1,
      },
      {
        name: "Todo 2",
        status: 0,
      },
      {
        name: "Todo 3",
        status: 1,
      },
    ],
  },
  {
    name: "List 2",
    detail: [
      {
        name: "Todo 4",
        status: 1,
      },
      {
        name: "Todo 5",
        status: 2,
      },
      {
        name: "Todo 6",
        status: 1,
      },
    ],
  },
];

export default function Todo() {
  const [list, setList] = useState(0);
  const [todos, setTodos] = useState(todoList[list]);
  const [count, setCount] = useState(0);

  function getStatusText(status) {
    switch (status) {
      case 0:
        return "Dự kiến";
      case 1:
        return "Đang làm";
      case 2:
        return "Đã xong";
      default:
        return "Không tồn tại";
    }
  }

  function handleChangeStatus(e, id) {
    let mode;
    switch (e.target.innerText) {
      case "<":
        mode = -1;
        break;
      case ">":
        mode = 1;
        break;
      default:
        return "";
    }
    // setTodos(todos, (todos.detail[id] = todos.detail[id].status + mode));
    setCount(() => count + 1);
    console.log("click");
    // todos.detail[e].status = 1;
  }

  function renderLists(lists) {
    return lists.map((list, key) => {
      return (
        <Button
          onClick={() => {
            setList(key);
            setTodos(todoList[key]);
          }}
          key={key}
        >
          {list.name}
        </Button>
      );
    });
  }

  function Task(props) {
    return (
      <Card>
        <Button onClick={(e) => handleChangeStatus(e, props.todoId)}>
          {"<"}
        </Button>
        {props.name} {JSON.stringify(props)}
        <Button onClick={(e) => handleChangeStatus(e, props.todoId)}>
          {">"}
        </Button>
      </Card>
    );
  }

  function TodoCol(props) {
    const statusText = getStatusText(props.status);
    const todos = props.todos.map((element, key) => {
      if (element.status === props.status)
        return (
          <Task
            name={element.name}
            status={element.status}
            key={key}
            todoId={key}
          />
        );
      return;
    });

    return <Card title={statusText}>{todos ? todos : "Không có"}</Card>;
  }

  function renderTodoDetail(index) {
    const ts = todos.detail;
    return (
      <div className="flex">
        <div className="mx-5">
          <TodoCol status={0} todos={ts} />
        </div>
        <div className="mx-5">
          <TodoCol status={1} todos={ts} />
        </div>
        <div className="mx-5">
          <TodoCol status={2} todos={ts} />
        </div>
      </div>
    );
  }

  return (
    <div className="m-3">
      {count}
      <h1>Todos site: </h1>
      <div className="todos-list">{renderLists(todoList)}</div>

      <div className="todo-detail">{renderTodoDetail(list)}</div>
    </div>
  );
}
