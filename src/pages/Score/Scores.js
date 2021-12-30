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
    finalScore: "5",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "6",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "7",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "5",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "4",
  },
  {
    names: "Nguyễn Văn A",
    studentId: "B18DCVT062",
    ccScore: "1",
    thScore: "8",
    finalScore: "9.5",
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
  let scoreArray = [];

  const columns = [
    { title: "Họ và tên", key: "name", dataIndex: "names" },
    { title: "Mã sinh viên", key: "studentId", dataIndex: "studentId" },
    { title: "Điểm chuyên cần (10%)", key: "ccScore", dataIndex: "ccScore" },
    { title: "Điểm thực hành (20%)", key: "thScore", dataIndex: "thScore" },
    { title: "Điểm cuối kỳ (70%)", key: "finalScore", dataIndex: "finalScore" },
    {
      title: "Điểm tổng kết",
      key: "totalScore",
      render: (item) => {
        // console.log(item);
        let final = parseFloat(item.finalScore);
        let cc = parseFloat(item.ccScore);
        let th = parseFloat(item.thScore);
        let total = (final * 70) / 100 + (cc * 10) / 100 + (th * 20) / 100;
        scoreArray.push(total);
        return `${total}`;
      },
    },
  ];

  return (
    <div className="ScorePage">
      <Table columns={columns} dataSource={SCORES_DATA} />
      <div className="bg"
      style={{ width: "450px" }}>
        <ScoresChart data={scoreArray} />
      </div>
    </div>
  );
}
