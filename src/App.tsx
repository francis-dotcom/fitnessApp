import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomeHome from "./pages/HomeHome";
import HomeScroll from "./pages/HomeScroll";
import HomeDetailsScroll from "./pages/HomeDetailsScroll";
import MapMap from "./pages/MapMap";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/homescroll-6":
        title = "";
        metaDescription = "";
        break;
      case "/homedetails-scroll":
        title = "";
        metaDescription = "";
        break;
      case "/mapmap":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomeHome />} />
      <Route path="/homescroll-6" element={<HomeScroll />} />
      <Route path="/homedetails-scroll" element={<HomeDetailsScroll />} />
      <Route path="/mapmap" element={<MapMap />} />
    </Routes>
  );
}
export default App;
