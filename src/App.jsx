import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import { setCollections } from "./actions/collectionActions";

function App() {
  const collections = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCollections(collections));
  }, []);

  return (
    <div className="relative">
      <Outlet />
    </div>
  );
}

export default App;
