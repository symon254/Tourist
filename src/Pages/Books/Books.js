import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../../Components/Pagination/Pagination";
import Posts from "./Book";

const Books = () => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage, setPostsPerPage] = useState(100);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			const res = await axios.get(
				"https://api.instantwebtools.net/v1/airlines"
			);
			setPosts(res.data);
			setLoading(false);
			console.log(res)
		};
		fetchData();
	}, []);

	//get current posts
  const indexOfLastPost= currentPage * postsPerPage
  const indexOfFirstPost= indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)

  //change page
  const paginate = (pageNumber)=>setCurrentPage(pageNumber)

	return (
		<div className="container mt-5">
			<h1 className="text-primary mb-3">just a simple test</h1>

			<Posts posts={currentPosts} loading={loading} />

			<Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
		</div>
	);
};

export default Books;
