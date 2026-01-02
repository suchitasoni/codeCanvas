import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SECTION_IDS = ["#guess", "#roadmap", "#blog"];

export default function ResetHashOnScroll() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.hash) return;

    const sections = SECTION_IDS
      .map((id) => document.querySelector(id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some(
          (entry) => entry.isIntersecting
        );

        // user scrolled away from all tracked sections
        if (!anyVisible && location.hash) {
          navigate(location.pathname, { replace: true });
        }
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [location.hash, location.pathname, navigate]);

  return null;
}
