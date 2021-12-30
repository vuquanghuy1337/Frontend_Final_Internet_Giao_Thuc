import { Image } from "antd";

export default function Post(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="Post border rounded p-3 my-3">
      <div className="content">
        <p>
          {data?.author ? data.author : "null"} vào lúc{" "}
          <span>{data?.date_posted ? data.date_posted : "null"}</span>
        </p>

        <p>{data?.content ? data.content : "null"}</p>
        {data?.attachment ? (
          <Image src={data?.attachment} height="250px"></Image>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
