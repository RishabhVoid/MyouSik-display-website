import { RefObject, useEffect, useState } from "react";

type RefParam = RefObject<HTMLDivElement | null>;

const useScrollProgress = (
  ref: RefParam,
  parentRef?: RefObject<HTMLDivElement | null>
) => {
  const [scrollProg, setScrollProg] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (parentRef) {
        if (!ref.current || !parentRef.current) return;
      }
      if (!ref.current) return;

      const scrollableHeight = ref.current.scrollHeight;
      let scrollY: number = 0;
      if (parentRef && parentRef.current) {
        scrollY = parentRef.current.scrollTop - ref.current.offsetTop;
      } else {
        scrollY = window.screenTop - ref.current.offsetTop;
      }
      const scrollPercentage = Math.round((scrollY / scrollableHeight) * 100);

      setScrollProg(scrollPercentage);
    };

    if (parentRef && parentRef.current) {
      parentRef.current.addEventListener("scroll", handleScroll);
    } else {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (parentRef && parentRef.current) {
        parentRef.current.removeEventListener("scroll", handleScroll);
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref, parentRef]);

  return scrollProg;
};

export default useScrollProgress;
