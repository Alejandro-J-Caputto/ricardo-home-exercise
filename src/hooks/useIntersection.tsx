import { useEffect, useState } from "react";

const useIntersection = (opts: { threshold: number }) => {
  const [obsItem, setObsItem] = useState<HTMLElement | null>(null!);
  useEffect(() => {
    const obs$ = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("animate__animated");
        entry.target.classList.add("animate__fadeInUp");
      });
    }, opts);
    if (obsItem) {
      obsItem.childNodes.forEach((card) => {
        const element = card as HTMLDivElement;
        obs$.observe(element);
      });
    }
    return () => {
      if (obsItem) {
        obs$.unobserve(obsItem);
      }
    };
  }, [obsItem, opts]);
  return { setObsItem };
};

export default useIntersection;
