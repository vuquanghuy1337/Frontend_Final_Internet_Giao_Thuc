import { Row, Col } from "antd";
import { useEffect, useState } from "react";
import TodoDetail from "./TodoDetail";
import TodoList from "./TodoList";

const ListAPI = [{ name: "List 1" }, { name: "List 2" }, { name: "List 3" }];
const ListDetail = [
  {
    name: "List 1",
    detail: [
      { taskName: "Do HW", status: 2 },
      { taskName: "Do HW 2", status: 0 },
      { taskName: "Do HW 3", status: 1 },
      { taskName: "Do HW 4", status: 2 },
    ],
  },
  {
    name: "List 2",
    detail: [
      { taskName: "Do PJ", status: 1 },
      { taskName: "Do PJ 2", status: 2 },
      { taskName: "Do PJ 3", status: 0 },
      { taskName: "Do PJ 4", status: 2 },
    ],
  },
  {
    name: "List 3",
    detail: [
      { taskName: "Study", status: 1 },
      { taskName: "Study 2", status: 2 },
      { taskName: "Study 3", status: 2 },
      { taskName: "Study 4", status: 2 },
    ],
  },
];

export default function Todo() {
  const [list, setList] = useState();
  const [currentList, setCurrentList] = useState(0);
  const [detail, setDetail] = useState();

  useEffect(() => {
    setList(ListAPI);
    setDetail(ListDetail[0]);
  }, []);

  const handleChangeList = (e) => {
    setCurrentList(e.target.value);
    setDetail(ListDetail[e.target.value]);
    console.log(detail)
  };

const handleChangeStatus = (e) =>{
  // console.log(e)
  setDetail((pre)=>{
    let item = pre.detail.find((item)=> item.taskName === e.taskName && item.status === parseInt(e.status));
// item.status = 1
    // console.log(e.changeType)
    switch(e.changeType){
      case "dec" : item.status = item.status - 1; break;
      case "inc" : item.status = item.status + 1; break;
    }
    
    // console.log(item)
    // pre.map((item)=> {
    //  return pre.detail.find((item)=> item.taskName === e.taskName && item.status === parseInt(e.status)) || item
    // })
    return {...pre, item} 
  })


}

  return (
    <div>
      <h1>Todo Page: List {currentList}</h1>
      <Row>
        <Col span={6}>
          {list ? <TodoList list={list} onClick={handleChangeList} /> : "Không có dữ liệu"}
        </Col>
        <Col span={24 - 6}>
          {detail ? <TodoDetail detail={detail} onChangeStatus={handleChangeStatus}/> : "Không có dữ liệu"}
        </Col>
      </Row>
    </div>
  );
}
