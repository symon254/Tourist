import {  FiActivity, FiBook } from "react-icons/fi";
import { GiAirplaneDeparture } from "react-icons/gi";
import {BsPersonCircle, BsPeopleFill} from "react-icons/bs"

export const links = [
	{
		title: "Dashboard",
		links: [
			{
				name: "passengers",
				icon: <BsPeopleFill />,
			},
		],
	},

	{
		title: "Pages",
		links: [
			{
				name: "activities",
				icon: <FiActivity />,
			},
			{
				name: "airlines",
				icon: <GiAirplaneDeparture />,
			},
            {
				name: "users",
				icon: <BsPersonCircle />,
			},
			{
				name: "books",
				icon: <FiBook />,
			},
		],
	},
];
