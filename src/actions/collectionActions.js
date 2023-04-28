import types from "../helpers/types";

export const setCollections = (collections) => ({
  type: types.setCollections,
  payload: collections,
});
