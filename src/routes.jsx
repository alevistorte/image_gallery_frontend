import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { categoriesLoader, collectionItemsLoader } from "./helpers/loaders";
import CollectionGallery from "./components/CollectionGallery";
import HomeScreen from "./components/HomeScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: categoriesLoader,
    errorElement: <div>Esto es un error</div>,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "/:collectionName",
        element: <CollectionGallery />,
        loader: collectionItemsLoader,
      },
    ],
  },
]);
