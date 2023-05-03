import { useLoaderData } from "react-router-dom";
import Gallery from "./Gallery";
import SearchBox from "./SearchBox";

export default function SearchResults() {
  const { items } = useLoaderData();

  return (
    <div className="">
      <SearchBox short={true} />
      <hr className="border-black" />
      <div className="p-10 scroll-m-0">
        <Gallery items={items} />
      </div>
    </div>
  );
}
