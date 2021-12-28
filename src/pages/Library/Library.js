const ITEMS_DATA = [
  {
    name: "Kỹ năng thuyết trình",
    author: "Trần Hương Giang",
    year: "2017",

    url: "http://dlib.ptit.edu.vn/flowpaper?bitstid=6321867a-ec10-4abd-8976-d972527bcc4f",
  },
];

export default function Library() {
  return (
    <>
      Thư viện: <a href={ITEMS_DATA[0].url}>url</a>
    </>
  );
}
