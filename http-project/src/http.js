export async function fetchAvailablePlaces() {
  const response = await fetch('http://localhost:3000/places');
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch places');
  }
  return responseData.places;
}
export async function fetchUserPlaces() {
  const response = await fetch('http://localhost:3000/user-places');
  const responseData = await response.json();
  if (!response.ok) {
    throw new Error('Failed to fetch user places');
  }
  return responseData.places;
}
export async function updateUserPlaces(places) {
  const response = await fetch('http://localhost:3000/user-places', {
    method: 'PUT',
    body: JSON.stringify({ places }),
    headers: {
      'content-type': 'application/json',
    },
  });
  const resData = await response.json();
  if (!response.ok) {
    throw new Error('faild to update user data');
  }
  return resData.message;
}
