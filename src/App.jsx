import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useLoaderData } from "react-router-dom";
import { setCollections } from "./actions/collectionActions";

function App() {
  const collections = useLoaderData();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(collections);
    dispatch(setCollections(collections));
  }, []);

  return (
    <div className="">
      <Outlet />
    </div>
  );
}

export default App;
