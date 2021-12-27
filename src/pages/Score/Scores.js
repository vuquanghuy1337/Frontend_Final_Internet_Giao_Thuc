import { ScoresChart } from "./ScoresChart";
import { Table } from "antd";

const SCORES_DATA = [
  {
    names: "Vũ Quang Huy",
    studentId: "B18DCVT062",
    ccScore: "9",
    thScore: "10",
    finalScore: "10",
  },
  {
    names: "Kiều Mạnh Dũng",
    studentId: "B18DCVT062",
    ccScore: "7",
    thScore: "10",
    finalScore: "10",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9",
  },
];

export default function Scores() {
  const columns = [
    { title: "Họ và tên", dataIndex: "names" },
    { title: "Mã sinh viên", dataIndex: "studentId" },
    { title: "Điểm chuyên cần", dataIndex: "ccScore" },
    { title: "Điểm thực hành", dataIndex: "thScore" },
    { title: "Điểm cuối kỳ", dataIndex: "finalScore" },
  ];
  return (
    <>
      <Table columns={columns} dataSource={SCORES_DATA} />
      <div style={{ width: "400px" }}>
        <ScoresChart />
      </div>
    </>
  );
}
