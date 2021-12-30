import { Col, Row } from "antd";
// import { useEffect } from "react";
import TodoItem from "./TodoItem";

export default function TodoDetail(props) {
  // console.log(props)
  const { detail } = props.detail;
  // console.log(detail);

  let array1 = detail.filter((el) => {
    return el.status === 0;
  });

  let array2 = detail.filter((el) => {
    return el.status === 1;
  });

  let array3 = detail.filter((el) => {
    return el.status === 2;
  });

  const renderTodoItems = (array) => {
    return array.map((element, key) => {
      // console.log(element)
      return (
        <TodoItem
          {...{ element }}
          key={key}
          onChangeStatus={props.onChangeStatus}
        ></TodoItem>
      );
    });
  };

  return (
    <div className="ml-3">
      <Row>
        <Col span={8}>
          <h5>Chưa làm</h5>
          {renderTodoItems(array1)}
        </Col>
        <Col span={8}>
          <h5>Đang làm</h5>
          {renderTodoItems(array2)}
        </Col>
        <Col span={8} className="d-flex flex-column justify-content-center">
          <h5>Đã hoàn thành</h5>
          {renderTodoItems(array3)}
        </Col>
      </Row>
    </div>
  );
}
