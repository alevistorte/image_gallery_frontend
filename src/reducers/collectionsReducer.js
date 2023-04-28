import types from "../helpers/types";

const initialState = {
  collections: [],
};

export const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setCollections:
      return {
        ...state,
        collections: action.payload,
      };

    default:
      return state;
  }
};
