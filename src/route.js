import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo/Todo";

export const ROUTE = [
  { name: "Home", url: "/", component: <Home></Home> },
  { name: "About", url: "about", component: <About></About> },
  { name: "Todo", url: "todo", component: <Todo></Todo> },
];
