import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { fetchAsyncShows } from "../../features/movies/movieSlice";

const Header = () => {

  const [term,setTerm] = useState("")
const dispatch = useDispatch();
 const  submitHandler =(e)=>{
   e.preventDefault();
   dispatch(fetchAsyncMovies(term));
   dispatch(fetchAsyncShows(term));
    setTerm("");


 }
  return (
    <div className="header">
    
     
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="searchBar fa fa-search">
     <form onSubmit={submitHandler} >
        <   input type="text"
         value={term} 
        className="search" 
        placeholder="search the movies"
        onChange={(e)=>setTerm(e.target.value)}></input>
         <button className="searchButton">search </button>
      </form>
     </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
