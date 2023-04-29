import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CategoriesList() {
  const { collections } = useSelector((store) => store.collections);

  return (
    <div className="flex flex-wrap justify-evenly ">
      {collections.map((c) => (
        <Link key={c.name} to={`/${c.name}`}>
          <button className="bg-gray-600 rounded-xl px-2 py-1 m-1">
            <p className="text-xs uppercase text-white">{c.name}</p>
          </button>
        </Link>
      ))}
    </div>
  );
}
