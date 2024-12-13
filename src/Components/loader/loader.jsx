import { useRef } from "react";
import { useEffect, useState } from "react";
import "./loader.scss";

function Loader() {
  const load = useRef();
  const [loading, setLoading] = useState(false);
  let html = document.querySelector("html");
  window.addEventListener("load", async function () {
    setLoading(true);
  });
  setTimeout(() => {
    setLoading(true);
  }, 10000);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [loading]);

  return (
    <div ref={load} className={loading ? "loaderHide" : "loader"}>
      <div className="loadingCircle">
        <div className="loadingCircleInner"></div>
      </div>
    </div>
  );
}

export default Loader;
