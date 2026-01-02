import { Outlet } from "react-router-dom";
import Header from "../../components/layout/Header.tsx";
import Footer from "../../components/layout/Footer.tsx";
import ScrollToHash from "../ScrollToHash.tsx";
import ResetHashOnScroll from "../ResetHashOnScroll.tsx";
import { Suspense, lazy } from "react";

const BallpitBackground = lazy(
  () => import("../../utils/ReactBitUtil.tsx").then((module) => ({ default: module.BallpitBG }))
);

export const LazyBackground = () => {
  return (
    <div className="backgroundLayer">
      <Suspense fallback={null}>
        <BallpitBackground />
      </Suspense>
    </div>
  );
}

export default function MainLayout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "99vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "var(--bg-main)",
        color: "var(--text-main)",
      }}
    >
        <ScrollToHash />
        <ResetHashOnScroll />
      <LazyBackground />
      {/* Sticky Header */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />

        {/* Page Content */}
        <main
            style={{
            flex: 1,
            width: "100%",
            }}
        >
            <Outlet />
        </main>

        {/* Footer */}
        <Footer />
    </div>
    </div>
  );
}
