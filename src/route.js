import Home from "./pages/Home";
import Todo from "./pages/Todo/Todo";
import Mails from "./pages/Mail/Mails";
import Mail from "./pages/Mail/Mail";
import { Routes, Route } from "react-router-dom";
import Scores from "./pages/Score/Scores";
import Student from "./pages/Student/Student";
import Students from "./pages/Student/Students";
import Library from "./pages/Library/Library";
import Blog from "./pages/Blog/Blog";

const NAVBAR_ROUTE = [
  { name: "Home", url: "/" },
  { name: "Todo", url: "todo" },
  { name: "Mail", url: "mail" },
  { name: "Blog", url: "blog" },
  { name: "Score", url: "score" },
  { name: "Student", url: "student" },
  { name: "Library", url: "library" },
];

const ROUTE = () => (
  <Routes>
    <Route path="/" element={<Home></Home>}></Route>,
    <Route path="todo" element={<Todo></Todo>}></Route>
    <Route path="mail" element={<Mails></Mails>}>
      <Route path=":mailId" element={<Mail></Mail>}></Route>
    </Route>
    <Route path="blog" element={<Blog></Blog>}></Route>
    <Route path="score" element={<Scores></Scores>}></Route>
    <Route path="student" element={<Students></Students>}>
      <Route path=":studentId" element={<Student></Student>}></Route>
    </Route>
    <Route path="library" element={<Library></Library>}></Route>
  </Routes>
);

export { NAVBAR_ROUTE, ROUTE };
