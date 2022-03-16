import { Link } from "react-router-dom";
import pageNotFoundImage from "../images/illustarions/404-page-not-found.svg";

function Error() {
  return (
    <>
      <div className="page-not-found">
        <img src={pageNotFoundImage} alt="page not found" />
        <h2>Upss.. looks like this page doesn’t exist.</h2>
        <button type="button">
          <Link to="/">Go back home</Link>
        </button>
      </div>
    </>
  );
}

export default Error;
