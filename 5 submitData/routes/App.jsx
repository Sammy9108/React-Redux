import "./App.css";
import Footer from "../src/Components/Footer";
import Header from "../src/Components/Header";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../src/Components/Sidebar";
import CreatePost from "../src/Components/CreatePost";
import PostList from "../src/Components/PostList";
import { useState } from "react";
import PostListProvider from "../src/Store/post-list-store";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="AppContainer">
        <Sidebar
          selectedTab={selectedTab}
          handleSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="Content">
          <Header></Header>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
