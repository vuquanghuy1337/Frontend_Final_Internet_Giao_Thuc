import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function Navbar(props) {
  let navigate = useNavigate();

  const renderRoute = () => {
    return props.route.map((route, key) => {
      return (
        <Menu.Item
          key={key}
          onClick={() => {
            navigate(route.url);
          }}
        >
          {route.name}
        </Menu.Item>
      );
    });
  };

  return (
    <Menu theme="dark" mode="horizontal">
      {renderRoute()}
    </Menu>
  );
}
