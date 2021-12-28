import { Image } from "antd";

const ITEMS_DATA = [
  {
    name: "Kỹ năng thuyết trình",
    author: "Trần Hương Giang",
    year: "2017",

    url: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.18169-9/25659234_563289877341634_8836860418612025611_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=PV4TUD0CFVgAX8wOka8&_nc_ht=scontent.fhan2-4.fna&oh=00_AT87o5gJf2aVY7CnSlRglTI--EpgMd3ECowY1YYbILv0Jw&oe=61F24CF4",
  },
];

export default function Library() {
  return (
    <>
      <Image width={200} src={ITEMS_DATA[0].url}></Image>
      Thư viện: <a href={ITEMS_DATA[0].url}>url</a>
    </>
  );
}
