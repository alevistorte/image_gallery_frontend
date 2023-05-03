import { getData, getImagesFromCGT } from "./requests";

export async function categoriesLoader() {
  const collections = await getData("collections");
  if (collections) {
    return collections;
  }
  return [];
}

export async function collectionItemsLoader({ params }) {
  const data = await getData(`collections/${params["collectionName"]}`);
  if (data) {
    return data.images;
  }
  return [];
}

export async function searchResultsLoader({ request }) {
  const url = new URL(request.url);
  const keywords = url.searchParams.get("q");
  if (keywords.trim() === "") {
    return { items: [] };
  }
  let response = await getImagesFromCGT(keywords);
  if (response.ok) {
    let data = await response.json();
    return data;
  } else {
    console.log(`Error ${response.status}: ${response.statusText}`);
    return { items: [] };
  }
}
