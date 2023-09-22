import React from "react";

const Header = () => {
	return (
		<header className="header">
			<h1>Disaster Track </h1>
			<a
				className="nasa-header"
				href="https://eonet.sci.gsfc.nasa.gov/"
				target="_blank"
				rel="noreferrer"
			>
				data by NASA
			</a>
		</header>
	);
};

export default Header;
