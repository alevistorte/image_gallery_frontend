import Swal from "sweetalert2";
import { addNewProduct, getImagesFromCGT } from "../helpers/requests";
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
    } else {
      console.log(`Error ${response.status}: ${response.statusText}`);
    }
  };
};

export const addProductToCollection = (collection = "", productUrl = "") => {
  return async () => {
    let response = await addNewProduct(collection, productUrl);
    if (response.ok) {
      Swal.fire({
        title: "Product added",
        icon: "success",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: `Error ${response.status}`,
        text: response.statusText,
      });
    }
  };
};
