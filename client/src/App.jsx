import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/index";
import Resume from "./components/resumeContent/Resume";
import CertImage from "./components/certificatesContent/CertImage";
import Footer from "./components/Footer/Footer";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [{ path: "cert/:index", element: <CertImage /> }],
  },
  {
    path: "/resume",
    element: <Resume />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
}

export default App;
