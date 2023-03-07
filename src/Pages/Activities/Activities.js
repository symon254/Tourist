import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../Components/Pagination/Pagination";
import { retrieveArlines } from "../../Actions/action/airport";
import Posts from './ActivityList';


const Activities = () => {


  const airports = useSelector((state) => state.airports);

  const [posts, setPosts] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(10);

 

  	//get current posts
    const indexOfLastPost= currentPage * postsPerPage
    const indexOfFirstPost= indexOfLastPost - postsPerPage
    const currentPosts = airports.slice(indexOfFirstPost, indexOfLastPost)
  
    //change page
    const paginate = (pageNumber)=>setCurrentPage(pageNumber)

  return (
    <div>
			<Posts airports={currentPosts} />

			<Pagination postsPerPage={postsPerPage} totalPosts={airports.length} paginate={paginate} />

    </div>
  )
}

export default Activities