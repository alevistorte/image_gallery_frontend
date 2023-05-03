import { getImagesFromCGT } from "../helpers/requests";
import types from "../helpers/types";

export const setCollections = (collections) => ({
  type: types.setCollections,
  payload: collections,
});

export const searchData = (data = "") => {
  return async () => {
    let response = await getImagesFromCGT(data);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    } else {
      console.log(`Error ${response.status}: ${response.statusText}`);
    }
  };
};
