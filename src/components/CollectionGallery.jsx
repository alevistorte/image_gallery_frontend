import { useLoaderData } from "react-router-dom";
import Gallery from "./Gallery";
import SearchBox from "./SearchBox";

export default function CollectionGallery() {
  const images = useLoaderData();

  return (
    <div>
      <SearchBox short={true} />
      <hr className="border-black" />
      <div className="p-10">
        <Gallery items={images} />
      </div>
    </div>
  );
}
