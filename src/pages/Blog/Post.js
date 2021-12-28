export default function Post(props) {
  const { data } = props;
  console.log(data);
  return (
    <div className="Post border">
      <div className="content">
        <p>{data?.author ? data.author : "null"}</p>
        <p>
          Date posted:{" "}
          <span>{data?.date_posted ? data.date_posted : "null"}</span>
        </p>
        <p>{data?.content ? data.content : "null"}</p>
      </div>
    </div>
  );
}
