import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import SingleGif from "./pages/single-gif";
import Categories from "./pages/category";
import Search from "./pages/search";
import Favorites from "./pages/favorites";
import AppLayouts from "./layouts/app-layouts";
import Timer from "./pages/Timer";
import GifProvider from "./context/gif-context";

const router = createBrowserRouter([
  {
    element: <AppLayouts />,

    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/:type/:slug", //  defines a route with two dynamic segments.
        element: <SingleGif />, // why use dynamic - Reuse a single route definition for multiple URLs.
      },

      {
        path: "/:category",
        element: <Categories />,
      },

      {
        path: "/search/:query",
        element: <Search />,
      },

      {
        path: "/favorites",
        element: <Favorites />,
      },

      {
        path: "/timers",
        element: <Timer duration={1 * 24 * 60 * 60 * 1000} />,
      },
    ],
  },
]);

const App = () => {
  return (
    <GifProvider>
      <RouterProvider router={router} />;
    </GifProvider>
  );
};
export default App;
