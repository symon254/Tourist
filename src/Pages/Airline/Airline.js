import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { retrieveArlines } from "../../Actions/action/airport";

const Airline = () => {
	const airports = useSelector((state) => state.airports);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(retrieveArlines());
	}, [dispatch]);

	return (
		<div className="">
			<div className="col-md-6">
				<h4>Airline List</h4>
				<table className="table-fixed border-spacing-[7px] text-center w-[100%] overflow-hidden overflow-y-scroll">
					<thead className="border-b bg-gray-600 text-white">
						<tr>
							<th
								scope="col"
								className="text-lg font-medium text-white px-6 py-4 mr-4"
							>
								id
							</th>
							<th
								scope="col"
								className="text-lg font-medium text-white px-6 py-4 mr-10"
							>
								Name
							</th>
							<th
								scope="col"
								className="text-lg font-medium text-white px-6 py-4"
							>
								Country
							</th>

							<th
								scope="col"
								className="text-lg font-medium text-white px-6 py-4"
							>
								Established
							</th>
						</tr>
					</thead>
					<tbody>
						{airports &&
							airports.map((airport, index) => {
								return (
									<tr className="bg-white border-b">
										<td className="px-6 py-4 whitespace-nowrap ">
											{airport.id}
										</td>
										<td className="px-6 py-4 whitespace-nowrap mr-10">
											{airport.name}
										</td>
										<td className="px-6 py-4 whitespace-nowrap ">
											{airport.country}
										</td>
										<td className="px-6 py-4 whitespace-nowrap ">
											{airport.established}
										</td>
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Airline;
