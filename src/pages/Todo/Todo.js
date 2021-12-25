import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";

const ListAPI = [{ name: "List 1" }, { name: "List 2" }, { name: "List 3" }];
const ListDetail = [
  {
    name: "List 1",
    detail: [
      { taskName: "Do HW", status: 1 },
      { taskName: "Do HW 2", status: 3 },
      { taskName: "Do HW 3", status: 0 },
      { taskName: "Do HW 4", status: 2 },
    ],
  },
  {
    name: "List 2",
    detail: [
      { taskName: "Do PJ", status: 1 },
      { taskName: "Do PJ 2", status: 3 },
      { taskName: "Do PJ 3", status: 0 },
      { taskName: "Do PJ 4", status: 2 },
    ],
  },
  {
    name: "List 3",
    detail: [
      { taskName: "Study", status: 1 },
      { taskName: "Study 2", status: 3 },
      { taskName: "Study 3", status: 0 },
      { taskName: "Study 4", status: 2 },
    ],
  },
];

export default function Todo() {
  const [list, setList] = useState({});
  const [currentList, setCurrentList] = useState(0);
  const [detail, setDetail] = useState({});

  useEffect(() => {
    setList(ListAPI);
    setDetail(ListDetail[0]);
  }, []);

  const handleChangeList = (e) => {
    setCurrentList(e.target.value);
    setDetail(ListDetail[e.target.value]);
  };

  return (
    <div>
      <h1>Todo Page: List {currentList}</h1>
      <Row>
        <Col span={6}>
          <TodoList list={list} onClick={handleChangeList} />
        </Col>
        <Col span={24 - 6}>
          <TodoDetail {...detail} />
        </Col>
      </Row>
    </div>
  );
}
