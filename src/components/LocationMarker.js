import React from "react";

import { Icon } from "@iconify/react";
import exclamationIcon from "@iconify-icons/bi/exclamation-triangle-fill";
import fireIcon from "@iconify-icons/icomoon-free/fire";
import floodIcon from "@iconify-icons/bi/water";
import stormIcon from "@iconify-icons/bi/tropical-storm";
import volcanoIcon from "@iconify-icons/maki/volcano-11";
import earthquakeIcon from "@iconify-icons/wi/earthquake";

const LocationMarker = ({ evId, lat, lng, title, onClick }) => {
	let iconType;
	let iconName;
	let latitude = lat.toFixed(2);
	let longitude = lng.toFixed(2);

	// change latitude to S or N
	if (latitude < 0) {
		latitude = latitude * -1 + " °S";
	} else {
		latitude = latitude + " °N";
	}
	// change longitude to W or E
	if (longitude < 0) {
		longitude = longitude * -1 + " °W";
	} else {
		longitude = longitude + " °E";
	}

	// display different icon depending on evId
	switch (evId) {
		case "wildfires":
			iconType = fireIcon;
			iconName = "location-icon fire";
			break;
		case "floods":
			iconType = floodIcon;
			iconName = "location-icon flood";
			break;
		case "severeStorms":
			iconType = stormIcon;
			iconName = "location-icon storm";
			break;
		case "volcanoes":
			iconType = volcanoIcon;
			iconName = "location-icon volcano";
			break;
		case "earthquakes":
			iconType = earthquakeIcon;
			iconName = "location-icon earthquake";
			break;
		case 19:
			iconType = exclamationIcon;
			iconName = "location-icon other";
			break;
		default:
			iconType = null;
			iconName = "location-icon hidden";
	}

	return (
		<div className="location-marker" onClick={onClick}>
			<Icon icon={iconType} className={iconName} />
			<div className="location-hover-info">
				<h4>{title}</h4>
				<h5>
					{latitude} {longitude}
				</h5>
				<p>Click Icon for more info</p>
			</div>
		</div>
	);
};

export default LocationMarker;
