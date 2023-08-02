import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="page-not-found">
       <h1>404 | Page Not Found</h1>
       <Link to="/">Home</Link>
      </div>
    </>
  );
}

export default Error;
