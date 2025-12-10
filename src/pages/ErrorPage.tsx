import { useNavigate } from "react-router-dom";

function ErrorPage() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>Nothing to see here</h1>
      <button onClick={() => navigate("/")}>Go to Homepage</button>
    </div>
  );
}

export default ErrorPage;
