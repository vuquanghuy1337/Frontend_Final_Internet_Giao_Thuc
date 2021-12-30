import { Button, Row, Col, Form, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import Post from "./Post";

const BLOG_DATA = [
  {
    author: "Nguyễn Văn A",
    date_posted: "2021-11-12",
    content: "Có ai làm được bài này không?",
    attachment:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.18169-9/25659234_563289877341634_8836860418612025611_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=PV4TUD0CFVgAX8wOka8&_nc_ht=scontent.fhan2-4.fna&oh=00_AT87o5gJf2aVY7CnSlRglTI--EpgMd3ECowY1YYbILv0Jw&oe=61F24CF4",
  },
  {
    author: "Nguyễn Văn B",
    date_posted: "2021-11-13",
    content: "Có đề này khó, ai làm được không?",
    attachment:
      "https://scontent.fhan2-4.fna.fbcdn.net/v/t1.18169-9/25659234_563289877341634_8836860418612025611_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=PV4TUD0CFVgAX8wOka8&_nc_ht=scontent.fhan2-4.fna&oh=00_AT87o5gJf2aVY7CnSlRglTI--EpgMd3ECowY1YYbILv0Jw&oe=61F24CF4",
  },
];

export default function Blog() {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    setBlogData(BLOG_DATA);
  }, []);

  const renderBlogs = () => {
    return blogData.map((blog, key) => {
      return <Post key={key} data={blog}></Post>;
    });
  };

  const handlePost = (e) => {
    console.log(e);
  };

  return (
    <Row className="BlogPage">
      <Col span={24 }>
        <div>
          <h6>Đăng bài viết mới</h6>
          <Form onFinish={handlePost}>
            <Form.Item
              // label="content"
              placeholder="Nội dung"
              name="content"
              rules={[
                {
                  required: true,
                  message: "Nội dung bài viết không được để trống!",
                },
              ]}
            >
              <Input.TextArea autoSize={false} />
            </Form.Item>

            <Form.Item name="attachment">
              <Upload>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div> {blogData ? renderBlogs() : ""}</div>
      </Col>
    </Row>
  );
}
