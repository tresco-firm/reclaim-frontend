import { Link } from "react-router-dom";

const ErrorPage = () => (
  <main className="flex min-h-[calc(100vh-96px)] flex-col items-center justify-center bg-slate-50 px-8 py-20 text-center">
    <div className="mx-auto max-w-2xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-xl">
      <h1 className="text-5xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-6 text-lg leading-8 text-slate-600">
        The page you were looking for does not exist or has been moved. Use the
        link below to return home.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex rounded-full bg-primary px-8 py-3 text-white transition hover:bg-primary/90"
      >
        Back to home
      </Link>
    </div>
  </main>
);

export default ErrorPage;
