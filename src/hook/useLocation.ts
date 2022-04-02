import { useState, useEffect } from "react";
import {
  Accuracy,
  LocationCallback,
  LocationSubscription,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
} from "expo-location";

const useLocation = (shouldTrack: boolean, callback: LocationCallback) => {
  const [err, setErr] = useState<unknown>();

  useEffect(() => {
    let subscriber: LocationSubscription | undefined;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        if (!granted) throw new Error("Location permission not granted");
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) startWatching();
    else {
      if (subscriber) subscriber.remove();
      subscriber = undefined;
    }

    /* clean up the previous subscriber */
    return () => {
      if (subscriber) subscriber.remove();
    };
  }, [shouldTrack, callback]);

  return [err] as const;
};

export default useLocation;
