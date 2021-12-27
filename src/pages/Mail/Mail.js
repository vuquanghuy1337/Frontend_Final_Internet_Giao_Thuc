import { useParams } from "react-router-dom";

export default function Mail() {
  let params = useParams();
  let mailId = parseInt(params.mailId, 10);
  return (
    <>
      <div>Mail: {mailId}</div>
    </>
  );
}
