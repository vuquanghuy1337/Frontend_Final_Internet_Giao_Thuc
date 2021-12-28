import { Button, Row, Col, Form, Input } from "antd";
import { useEffect, useState } from "react";
import Post from "./Post";

const BLOG_DATA = [{ author: "A", date_posted: "xxxx", content: "a" }];

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
    <Row>
      <Col span={24 / 2}>Blog</Col>
      <Col span={24 / 2}>
        <div>
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
