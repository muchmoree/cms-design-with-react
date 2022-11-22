import "./app.scss"
import Mainpage from "./pages/Mainpage/Mainpage";
import Product from "./pages/Product/Product";
import Pricing from "./pages/Pricing/Pricing";
import Blog from "./pages/Blog/Blog";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

/*Route,Link ekleyebilirsin react-router-dom 'a*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/pricing",
    element: <Pricing />,
  },
  {
    path: "/blog",
    element: <Blog/>,
  }

]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
