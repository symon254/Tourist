import React, { useState, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../../Components/Table/TableData";
import Pagination from "../../Components/Table/Pagination";
import { retrievePassengers } from "../../Actions/action/airport";

const Users = () => {
	const dispatch = useDispatch();

	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(10);
	const pageNumber = [5, 10, 25, 50, 100];

	const passengerList = useSelector((state) => state.passengerList);
	const { loading, passengers, error, totalCount } = passengerList;
	console.log("tourists", passengers);
	const tableData = () => {
		const params = {
			page: page - 1,
			size: pageSize,
		};
		dispatch(retrievePassengers(params));
	};

	useEffect(tableData, [dispatch, page, pageSize]);

	const handlePageSize = (e) => {
		setPageSize(e.target.value);
		setPage(1);
	};

	const columns = useMemo(
		() => [
			{
				Header: "Name",
				accessor: "name",
			},
			{
				Header: "Trips",
				accessor: "trips",
			},
		],
		[]
	);

	return (
		<main className="mt-4">
			<div className="flex flex-row justify-between ">
				<div className="flex items-center ">
					<select value={pageSize} onChange={(e) => handlePageSize(e)}>
						{pageNumber.map((item) => (
							<option key={item} value={item}>
								{item}
							</option>
						))}
					</select>
				</div>
				<div className="flex">
					{loading ? <p>loading...</p> : null}
					{error ? <p>error</p> : null}
				</div>
			</div>

			<DataTable
				columns={columns}
				data={passengers}
				Paging={
					<div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 ">
						<span className="flex items-center font-semibold uppercase">
							showing {page} - {pageSize} of {totalCount}
						</span>

						<div className="flex mt-2 sm:mt-auto sm:justify-end">
							<Pagination
								className="text-2xl"
								currentPage={page}
								totalCount={totalCount}
								pageSize={pageSize}
								onPageChange={(e) => setPage(e)}
							/>
						</div>
					</div>
				}
			/>
		</main>
	);
};

export default Users;

// import React, {useState} from 'react'
// import {  useSelector } from "react-redux";
// import Pagination from "../../Components/Pagination/Pagination";
// import PassList from './PassList';

// const Passenger = () => {
//   const passenger = useSelector((state) => state.passenger);

// 	const [currentPage, setCurrentPage] = useState(1);
// 	const [postsPerPage] = useState(10);

//   	//get current posts
//     const indexOfLastPost= currentPage * postsPerPage
//     const indexOfFirstPost= indexOfLastPost - postsPerPage
//     const currentPosts = passenger.slice(indexOfFirstPost, indexOfLastPost)

//     //change page
//     const paginate = (pageNumber)=>setCurrentPage(pageNumber)

//   return (
//     <div>
// 			<PassList airports={currentPosts} />

// 			<Pagination postsPerPage={postsPerPage} totalPosts={passenger.length} paginate={paginate} />

//     </div>
//   )
// }

// export default Passenger
