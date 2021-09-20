import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import TravelAdvisor from "../features/travelAdvisor/TravelAdvisor";
import {
  setPlaceData,
  selectChild,
  handleChildClicked,
  setShowTravelAdvisor,
  selectShowTravelAdvisor,
} from "../features/travelAdvisor/travelAdvisorSlice";
import { getPlacesData } from "../api";
export default function MapPage() {
  const dispatch = useDispatch();
  const childClicked = useSelector(selectChild);
  const showTravelAdvisor = useSelector(selectShowTravelAdvisor);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });
  const [bounds, setBounds] = useState({});
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  });
  useEffect(() => {
    if (bounds) {
      getPlacesData(bounds.sw, bounds.ne).then((data) => {
        dispatch(setPlaceData(data));
      });
    }
  }, [coordinates, bounds, dispatch]);
  return (
    <div>
      <TravelAdvisor
        setCoordinates={setCoordinates}
        setBounds={setBounds}
        coordinates={coordinates}
        handleChildClicked={handleChildClicked}
        childClicked={childClicked}
      />
    </div>
  );
}
