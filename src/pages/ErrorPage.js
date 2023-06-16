import { Link, useRouteError } from "react-router-dom";
function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="grid h-screen px-4 bg-white place-content-center">
      <div className="text-center">
        <h1 className="font-black text-gray-200 text-9xl">404</h1>

        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Uh-oh!
        </p>

        <p className="mt-4 text-gray-500">We can't find that page.</p>

        <Link to="/admin/dashboard">
          <button className="btn btn-primary">Go Back Dashboard</button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
