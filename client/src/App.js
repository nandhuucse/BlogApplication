import "./App.css";
import Navbar from "./Components/NavbarComponent/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./Components/createnote/CreateNote";
import ViewNote from "./Components/viewnote/ViewNote";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const getData = async () => {
    const { data } = await axios.get("/api/view");
    setBlogs(data);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<CreateNote />} />
        <Route
          exact
          path="/view"
          element={
            <ViewNote appBlogs={blogs} setBlogs={setBlogs} getData={getData} />
          }
        />
        <Route
          exact
          path="/edit/:id"
          element={<CreateNote flag={true} blogs={blogs} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
