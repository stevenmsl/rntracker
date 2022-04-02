import * as Location from "expo-location";

const tenMetersWithDegress = 0.0001;

const initiaLocation = {
  latitude: 49.13757173228552,
  longitude: -123.1453698616553,
};

const getLocation: (increment: number) => Location.LocationObject = (
  increment: number
) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      latitude: initiaLocation.latitude + increment * tenMetersWithDegress,
      longitude: initiaLocation.longitude + increment + tenMetersWithDegress,
    },
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 3000);
