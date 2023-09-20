import { Icon } from "@iconify/react";
import exclamationIcon from "@iconify-icons/bi/exclamation-triangle-fill";
import droughtIcon from "@iconify-icons/mdi/water-off-outline";
import dustHazeIcon from "@iconify-icons/bi/cloud-haze-fill";
import fireIcon from "@iconify-icons/icomoon-free/fire";
import floodIcon from "@iconify-icons/bi/water";
import stormIcon from "@iconify-icons/bi/tropical-storm";
import volcanoIcon from "@iconify-icons/maki/volcano-11";
import waterColorIcon from "@iconify/icons-mdi/water-alert";
import landslideIcon from "@iconify-icons/openmoji/landslide";
import icebergIcon from "@iconify-icons/openmoji/iceberg";
import earthquakeIcon from "@iconify-icons/wi/earthquake";
import snowIcon from "@iconify-icons/bi/snow";
import temperatureIcon from "@iconify-icons/bi/thermometer-high";

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
    case 6:
      iconType = droughtIcon;
      iconName = "location-icon drought";
      break;
    case 7:
      iconType = dustHazeIcon;
      iconName = "location-icon dust";
      break;
    case 8:
      iconType = fireIcon;
      iconName = "location-icon fire";
      break;
    case 9:
      iconType = floodIcon;
      iconName = "location-icon flood";
      break;
    case 10:
      iconType = stormIcon;
      iconName = "location-icon storm";
      break;
    case 12:
      iconType = volcanoIcon;
      iconName = "location-icon volcano";
      break;
    case 13:
      iconType = waterColorIcon;
      iconName = "location-icon water-color";
      break;
    case 14:
      iconType = landslideIcon;
      iconName = "location-icon landslide";
      break;
    case 15:
      iconType = icebergIcon;
      iconName = "location-icon ice";
      break;
    case 16:
      iconType = earthquakeIcon;
      iconName = "location-icon earthquake";
      break;
    case 17:
      iconType = snowIcon;
      iconName = "location-icon snow";
      break;
    case 18:
      iconType = temperatureIcon;
      iconName = "location-icon temperature";
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