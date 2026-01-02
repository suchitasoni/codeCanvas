import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "./layout/MainLayout";
import GuessOutputAll from "../pages/GuessOutput/GuessOutputAll";

// Lazy loaded pages (route-level splitting)
const HomePage = lazy(() => import("../pages/Home/Home"));
const BlogListPage = lazy(() => import("../pages/Blog/BlogList"));
const BlogPostPage = lazy(() => import("../pages/Blog/BlogPost"));
const NotFoundPage = lazy(() => import("../pages/NotFound"));

// Simple fallback (keep it minimal)
function PageLoader() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0e0e0e",
        color: "#ffffff",
      }}
    >
      Loading…
    </div>
  );
}

// Router config
const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: (
      <Suspense fallback={<PageLoader />}>
        <NotFoundPage />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "/blog",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogListPage />
          </Suspense>
        ),
      },
      {
        path: "/blog/:slug",
        element: (
          <Suspense fallback={<PageLoader />}>
            <BlogPostPage />
          </Suspense>
        ),
      },
      {
        path: "/guess-the-output",
        element: (
          <Suspense fallback={<PageLoader />}>
            <GuessOutputAll />
          </Suspense>
        ),
      }
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
