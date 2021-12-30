import { Row, Col, Image } from "antd";

const ITEMS_DATA = [
  {
    name: "Kỹ năng thuyết trình",
    author: "Trần Hương Giang",
    year: "2017",
    url: "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.18169-9/25659234_563289877341634_8836860418612025611_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=PV4TUD0CFVgAX8wOka8&_nc_ht=scontent.fhan2-4.fna&oh=00_AT87o5gJf2aVY7CnSlRglTI--EpgMd3ECowY1YYbILv0Jw&oe=61F24CF4",
  },
  {
    url: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.18169-9/25594129_563289880674967_7748849390187785463_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=Sl_eN51IrE8AX-E3WM7&_nc_ht=scontent.fhan2-2.fna&oh=00_AT-FUkLQhg1IWOO1tJw_I33QqctMPId7bJm4S_JhHDyAXA&oe=61F1AE7B",
  },
  {
    url: "https://scontent.fpnh22-3.fna.fbcdn.net/v/t1.18169-9/26001050_563289934008295_5661351316826222455_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=vTrr5vqwtUUAX_XmRu3&tn=8IGLZYYyklWatW7r&_nc_ht=scontent.fpnh22-3.fna&oh=00_AT81qjuKn3Q3zDne2j6gxJ9bqsU1ctWE3Xxtfng4SSX8zg&oe=61F0793B",
  },
  {
    url: "https://scontent.fhan2-1.fna.fbcdn.net/v/t1.18169-9/25592131_563289937341628_8496858545576855175_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=K9UkDpsIu34AX-dutT7&tn=8IGLZYYyklWatW7r&_nc_ht=scontent.fhan2-1.fna&oh=00_AT8cCdDZ1BGKabVXxl9vJNSV_i3QmbKZ4ksk3uRs6vnjVg&oe=61F3A2EB",
  },
  {
    url: "https://scontent.fpnh22-4.fna.fbcdn.net/v/t1.18169-9/25592049_563289940674961_877256632455987515_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=V-CkVgCJJpgAX_j0CfE&_nc_oc=AQnVDvhh0dGumE9mLnXkg-AD23gdcY8IxRu49KtWJ6L4Ho6nm44nwdtnHvb9pBsXQ2Y&_nc_ht=scontent.fpnh22-4.fna&oh=00_AT_95EOogrlWua0Z72CruXt1JOBLLR4_Kp_a3K2VU0_NOw&oe=61F0C932",
  },
  {
    url: "https://scontent.fhan2-2.fna.fbcdn.net/v/t1.18169-9/25994925_563289977341624_2929543588244036663_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=rg46fbWMFQkAX8WwGju&_nc_oc=AQlqyFOh1Qyq0OVqYDtRv7ZMu8Hr5-pPhq_2ijtF5-ZVtvMEQkMV6hEcwt9xHf8Q7MI&tn=8IGLZYYyklWatW7r&_nc_ht=scontent.fhan2-2.fna&oh=00_AT8n34vOgfYy6KTJoAyYsEIhaWLmhMRZ6loyFEVQO7Knmw&oe=61F086F1",
  },
];

export default function Library() {
  return (
    <div className="LibraryPage">
      <Row gutter={[16, 16]}>
        <Col>
          <Image width={200} src={ITEMS_DATA[0].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[1].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[2].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[3].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[4].url}></Image>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col>
          <Image width={200} src={ITEMS_DATA[5].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[0].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[1].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[2].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[3].url}></Image>
        </Col>
      </Row>
      <Row gutter={[16, 16]}>
        <Col>
          <Image width={200} src={ITEMS_DATA[4].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[5].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[0].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[1].url}></Image>
        </Col>
        <Col>
          <Image width={200} src={ITEMS_DATA[2].url}></Image>
        </Col>
      </Row>
    </div>
  );
}
