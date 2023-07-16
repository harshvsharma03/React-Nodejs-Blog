import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Homepage() {
  const [posts,setPosts]=useState([]);
  const {search} = useLocation();
  useEffect(()=>{
    const fetchPosts = async ()=>{
      const res=await axios.get("http://localhost:5000/api/posts"+search);
      //console.log(res);
      setPosts(res.data);
    }
    fetchPosts();
  },[search])
  return (
    <>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
