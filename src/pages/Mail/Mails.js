import { Outlet } from "react-router-dom";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";

const MAILS_LIST = [
  {
    id: 0,
    sender: "Học sinh A",
    subject: "Về việc xin tăng thời gian làm bài",
    sent_time: "3 giờ trước",
  },
  {
    id: 1,
    sender: "Học sinh B",
    subject: "Về việc xin phép gia hạn bài tập",
    sent_time: "4 giờ trước",
  },
  {
    id: 2,
    sender: "Học sinh C",
    subject: "Về việc gia hạn bài tập",
    sent_time: "4 giờ trước",
  },
  {
    id: 3,
    sender: "Học sinh D",
    subject: "Về việc đổi điểm tiếng anh",
    sent_time: "4 giờ trước",
  },
  {
    id: 4,
    sender: "Học sinh E",
    subject: "Về việc miễn giảm học phí",
    sent_time: "4 giờ trước",
  },
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
    <div className="MailPage">
      <Table columns={columns} dataSource={MAILS_LIST} onRow={handleRowClick} />
      <Outlet></Outlet>
    </div>
  );
}
