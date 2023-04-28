import { getData } from "./requests";

export async function categoriesLoader() {
  const collections = await getData("collections");
  if (collections) {
    return collections;
  }
  return [];
}

export async function collectionItemsLoader({ request, params }) {
  console.log(request);
  const data = await getData(`collections/${params["collectionName"]}`);
  if (data) {
    return data.images;
  }
  return [];
}
