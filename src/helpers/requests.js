const BACKEND_URL = "http://localhost:8000/photos/";

export const getData = async (endpoint) => {
  const url = BACKEND_URL + endpoint;
  let response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  return null;
};
