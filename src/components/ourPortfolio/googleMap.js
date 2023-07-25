import GoogleMapReact from "google-map-react";
import MyMarker from "./MyMarker";

const GoogleMapComp = () => {
  const distanceToMouse = (pt, mp) => {
    if (pt && mp) {
      // return distance between the marker and mouse pointer
      return Math.sqrt(
        (pt.x - mp.x) * (pt.x - mp.x) + (pt.y - mp.y) * (pt.y - mp.y)
      );
    }
  };

  const points = [
    { id: 1, title: "Round Pond", lat: 51.506, lng: -0.184 },
    { id: 2, title: "The Long Water", lat: 51.508, lng: -0.175 },
    { id: 3, title: "The Serpentine", lat: 51.505, lng: -0.164 },
  ];

  return (
    <>
      <h2>Google Mapg</h2>
      <GoogleMapReact
        bootstrapURLKeys={{
          // remove the key if you want to fork
          key: "AIzaSyDiKc4HxX5G7EfneIZBN_Hlk2_luoT_yvo",
          language: "en",
          region: "US"
        }}
        defaultCenter={{ lat: 51.506, lng: -0.169 }}
        defaultZoom={15}
        distanceToMouse={distanceToMouse}
      >
        {points.map(({ lat, lng, id, title }) => {
          return (
            <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={title} />
          );
        })}
      </GoogleMapReact>
    </>
  );
};

export default GoogleMapComp;
