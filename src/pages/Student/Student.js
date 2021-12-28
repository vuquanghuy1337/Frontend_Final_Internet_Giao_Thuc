import { useParams } from "react-router-dom";

export default function Student() {
  let params = useParams();
  let studentId = parseInt(params.studentId, 10);
  return (
    <>
      <div>Student: {studentId}</div>
    </>
  );
}
