import { Button, Row } from "antd";
import { useState } from "react";

export default function TodoItem(props) {
  // console.log(props.element)
  const [changeButton, setChangeButton] = useState(false);
  let type = "";
  const handleClick = (e) => {
    // console.log(e);
    e.preventDefault();
    let item = {
      taskName: e.target.taskName.value,
      status: e.target.status.value,
      changeType: type,
    };
    console.log(type);
    props.onChangeStatus(item);
  };

  return (
    <div className="border d-flex justify-content-center m-2">
      <form onSubmit={handleClick}>
        <Row
          className="p-3"
          onMouseEnter={() => {
            setChangeButton(!changeButton);
          }}
          onMouseLeave={() => {
            setChangeButton(!changeButton);
          }}
        >
          {props.element.status === 0 || !changeButton ? (
            ""
          ) : (
            <Button
              size="sm"
              type="primary"
              name="changeType"
              value="dec"
              onClick={() => {
                type = "dec";
              }}
              htmlType="submit"
            >
              {"<"}
            </Button>
          )}
          <span className="mx-2">{props.element.taskName}</span>
          {props.element.status === 2 || !changeButton ? (
            ""
          ) : (
            <Button
              name="changeType"
              type="primary"
              value="inc"
              onClick={() => {
                type = "inc";
              }}
              htmlType="submit"
            >
              {">"}
            </Button>
          )}
        </Row>
        <input
          onChange={() => {}}
          hidden
          name="taskName"
          value={props.element.taskName}
        ></input>
        <input
          onChange={() => {}}
          hidden
          name="status"
          value={props.element.status}
        ></input>
      </form>
    </div>
  );
}
