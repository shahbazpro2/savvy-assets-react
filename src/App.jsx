
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./routes/home";
import Prooducts from "./routes/products";
import Pricing from "./routes/pricing";
import Rental from "./routes/rental/Rental";
import Sales from "./routes/sales/Sales";
import Contact from "./routes/contact";
import Platform from "./routes/platform";
import Blog from "./routes/blog";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Prooducts />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/rental" element={<Rental />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resources" element={<Blog />} />
      </Route>


    </>
  )
);

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
