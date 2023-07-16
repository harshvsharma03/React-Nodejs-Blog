import { Link } from "react-router-dom";
import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
  const [cats,setCats]=useState([]);

  useEffect(()=>{
    const getCats = async()=>{
      const res = await axios.get("http://localhost:5000/api/categories");
      setCats(res.data);
    }
    getCats();
  },[])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="data:image/jpeg;base64,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"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map(c=>(
              <Link className="link" to={`/?cat=${c.name}`}>
              <li className="sidebarListItem">
                {c.name} 
              </li>
              </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
