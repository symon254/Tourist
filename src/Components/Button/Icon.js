import React from "react";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const ContextP = ({ color, className, iconName }) => {
	return (
		<IconContext.Provider value={{ color: color, className: className }}>
			<div>{iconName}</div>
		</IconContext.Provider>
	);
};

class Icon {
	static LeftArrow = ({ color, className }) => {
		return (
			<ContextP
				color={color}
				className={className}
				iconName={<BiLeftArrowAlt />}
			/>
		);
	};

	static RightArrow = ({ color, className }) => {
		return (
			<ContextP
				color={color}
				className={className}
				iconName={<BiRightArrowAlt />}
			/>
		);
	};
}

ContextP.defaultProps = {
	color: "blue",
	className: "text-xl",
};

ContextP.propTypes = {
	color: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	iconName: PropTypes.node.isRequired,
};

export default Icon;
