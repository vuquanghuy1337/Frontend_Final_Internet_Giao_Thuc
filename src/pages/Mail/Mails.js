import { Outlet } from "react-router-dom";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const MAILS_LIST = [
  { id: 0, sender: "A", subject: "subject A", sent_time: "" },
  { id: 1, sender: "B", subject: "subject B", sent_time: "" },
  { id: 2, sender: "C", subject: "subject C", sent_time: "" },
  { id: 3, sender: "D", subject: "subject D", sent_time: "" },
  { id: 4, sender: "E", subject: "subject E", sent_time: "" },
];

export default function Mails() {
  let navigate = useNavigate();
  const columns = [
    { title: "Người gửi", dataIndex: "sender" },
    { title: "Chủ đề", dataIndex: "subject" },
    { title: "Thời gian nhận", dataIndex: "sent_time" },
  ];
  const handleRowClick = (record, rowIndex) => {
    return {
      onClick: (e) => {
        console.log(e.target, record);
        navigate(`${record.id}`);
      },
    };
  };

  return (
    <>
      <Table columns={columns} dataSource={MAILS_LIST} onRow={handleRowClick} />
      <Outlet></Outlet>
    </>
  );
}
