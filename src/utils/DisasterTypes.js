import fireIcon from "@iconify-icons/icomoon-free/fire";
import floodIcon from "@iconify-icons/bi/water";
import stormIcon from "@iconify-icons/bi/tropical-storm";
import volcanoIcon from "@iconify-icons/maki/volcano-11";
import icebergIcon from "@iconify-icons/openmoji/iceberg";
import earthquakeIcon from "@iconify-icons/wi/earthquake";

function DisasterTypes(name, id, iconType, iconClass) {
	this.name = name;
	this.id = id;
	this.iconType = iconType;
	this.iconClass = iconClass;
}

const wildfires = new DisasterTypes(
	"Wildfires",
	"wildfires",
	fireIcon,
	"location-icon fire"
);
const floods = new DisasterTypes(
	"Floods",
	"floods",
	floodIcon,
	"location-icon flood"
);
const severeStorms = new DisasterTypes(
	"Severe Storms",
	"severeStorms",
	stormIcon,
	"location-icon storm"
);
const volcanoes = new DisasterTypes(
	"Volcanoes",
	"volcanoes",
	volcanoIcon,
	"location-icon volcano"
);

const seaLakeIce = new DisasterTypes(
	"Sea, Lake Ice",
	"seaLakeIce",
	icebergIcon,
	"location-icon"
);
const earthquakes = new DisasterTypes(
	"Earthquakes",
	"earthquakes",
	earthquakeIcon,
	"location-icon earthquake"
);

let disasterTypes = [
	wildfires,
	floods,
	severeStorms,
	volcanoes,
	seaLakeIce,
	earthquakes,
];

export default disasterTypes;
