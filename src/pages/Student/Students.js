import { Outlet } from "react-router-dom";
import { Table } from "antd";

const STUDENTS_DATA = [
  {
    names: "A B C",
    isMale: 1,
    currentResident: "Hà Nội",
    origin: "Thanh Hóa",
    hasPaidTuition: 1,
  },
  {
    names: "A B C",
    isMale: 1,
    currentResident: "Hà Nội",
    origin: "Thanh Hóa",
    hasPaidTuition: 1,
  },
  {
    names: "A B C",
    isMale: 1,
    currentResident: "Hà Nội",
    origin: "Thanh Hóa",
    hasPaidTuition: 1,
  },
  {
    names: "A B C",
    isMale: 1,
    currentResident: "Hà Nội",
    origin: "Thanh Hóa",
    hasPaidTuition: 1,
  },
  {
    names: "A B C",
    isMale: 1,
    currentResident: "Hà Nội",
    origin: "Thanh Hóa",
    hasPaidTuition: 1,
  },
];

export default function Students() {
  const columns = [
    { title: "Họ và tên", dataIndex: "names" },
    { title: "Giới tính", dataIndex: "isMale" },
    { title: "Nơi ở hiện tại", dataIndex: "currentResident" },
    { title: "Quê quán", dataIndex: "origin" },
    { title: "Đã đóng tiền học", dataIndex: "hasPaidTuition" },
  ];

  return (
    <div className="StudentPage">
      <h1>Thông tin sinh viên</h1>
      <Table columns={columns} dataSource={STUDENTS_DATA} />
      <Outlet></Outlet>
    </div>
  );
}
