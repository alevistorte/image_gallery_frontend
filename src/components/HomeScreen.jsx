import Gallery from "./Gallery";
import SearchBox from "./SearchBox";

export default function HomeScreen() {
  return (
    <div className="h-screen">
      <SearchBox />
      <Gallery items={[]} />
    </div>
  );
}
