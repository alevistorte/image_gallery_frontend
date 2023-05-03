const BACKEND_URL = "http://localhost:8000/photos/";
const ACTIONS_URL = "http://localhost:8000/actions/";

export const getData = async (endpoint) => {
  const url = BACKEND_URL + endpoint;
  let response = await fetch(url);
  if (response.ok) {
    return await response.json();
  }
  return null;
};

export const getNewImages = (productUrl) => {
  const url = ACTIONS_URL + `getProductPhotos/`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        url: productUrl,
      },
    }),
  };

  return fetch(url, options);
};

export const getImagesFromCGT = async (data = "") => {
  const url = ACTIONS_URL + `search/`;
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: {
        prompt: data,
      },
    }),
  };

  return await fetch(url, options);
};

export const addNewProduct = async (collection, productUrl) => {
  const url = ACTIONS_URL + "saveItem/";
  const data = {
    collection,
    url: productUrl,
  };
  const options = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data,
    }),
  };
  return await fetch(url, options);
};
