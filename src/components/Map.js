import { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom, checkIds, typesArr }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  const [openInfoBox, setOpenInfoBox] = useState(false);

  // create marker for events
  const markers = eventData.map(ev => {
    // if there is a typesArr includes "all" (and something in the coordinates - this is here to handle a single edge-case I've seen)
    if (
      typesArr.includes("all") &&
      ev.geometries[0].coordinates[0] &&
      ev.geometries[0].coordinates[1]
    ) {
      return (
        // add properties to LocationMarker
        <LocationMarker
          key={ev.id}
          evId={ev.categories[0].id}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          title={ev.title}
          typesArr={typesArr}
          checkIds={checkIds}
          openInfoBox={openInfoBox}
          setOpenInfoBox={setOpenInfoBox}
          onClick={() => {
            setOpenInfoBox(true);
            setLocationInfo({
              id: ev.id,
              title: ev.title,
              lat: ev.geometries[0].coordinates[1],
              lng: ev.geometries[0].coordinates[0],
              learn: ev.sources[0].url,
            });
          }}
        />
      );
    } else if (
      ev.geometries[0].coordinates[0] &&
      ev.geometries[0].coordinates[1]
    ) {
      // if the typesArr includes value of the category id as a string
      if (typesArr.includes(ev.categories[0].id.toString())) {
        // add properties to LocationMarker
        return (
          <LocationMarker
            key={ev.id}
            evId={ev.categories[0].id}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            title={ev.title}
            typesArr={typesArr}
            checkIds={checkIds}
            openInfoBox={openInfoBox}
            setOpenInfoBox={setOpenInfoBox}
            onClick={() => {
              setOpenInfoBox(true);
              setLocationInfo({
                id: ev.id,
                title: ev.title,
                lat: ev.geometries[0].coordinates[1],
                lng: ev.geometries[0].coordinates[0],
                learn: ev.sources[0].url,
              });
            }}
          />
        );
      }
    }

    return null;
  });
  //if locationInfo is not null and openInfoBox is true, then show LocationInfoBox
  const locationBox =
    locationInfo && openInfoBox ? (
      <LocationInfoBox
        info={locationInfo}
        openInfoBox={openInfoBox}
        setOpenInfoBox={setOpenInfoBox}
      />
    ) : null;
  // return GoogleMapReact component with props
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
        className="google-map"
      >
        {markers}
      </GoogleMapReact>
      {locationBox}
    </div>
  );
};

Map.defaultProps = {
  // defaults to Seattle
  center: {
    lat: 47.6062,
    lng: -122.3321,
  },
  // zoom level 5
  zoom: 5,
};

export default Map;