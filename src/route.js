import Home from "./pages/Home";
import About from "./pages/About";
import Todo from "./pages/Todo/Todo";
import Mails from "./pages/Mail/Mails";
import Mail from "./pages/Mail/Mail";
import { Routes, Route } from "react-router-dom";
import Scores from "./pages/Score/Scores";

const NAVBAR_ROUTE = [
  { name: "Home", url: "/" },
  { name: "About", url: "about" },
  { name: "Todo", url: "todo" },
  { name: "Mail", url: "mail" },
  { name: "Score", url: "score" },
];

const ROUTE = () => (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>,
    <Route path="about" element={<About></About>}></Route>
    <Route path="todo" element={<Todo></Todo>}></Route>
    <Route path="mail" element={<Mails></Mails>}>
      <Route path=":mailId" element={<Mail></Mail>}></Route>
    </Route>
    <Route path="score" element={<Scores></Scores>}></Route>
  </Routes>
);

export { NAVBAR_ROUTE, ROUTE };
