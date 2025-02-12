import { useEffect, useState } from 'react';
import Places from './Places.jsx';
// import ErrorPage from './Error.jsx';
// if (error) {
//   return <ErrorPage title="An error occurred!" message={error.message} />;
// }
export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch('http://localhost:3000/places');
      const responseData = await response.json();
      setAvailablePlaces(responseData.places);
      setIsFetching(false);
    }
    fetchPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data ..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
