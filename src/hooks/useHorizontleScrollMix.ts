import { useEffect, useRef } from "react";

const useHorizontleMix = () => {
  const mainRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (!mainRef.current) return;
    const windowY = Math.round(mainRef.current.scrollTop);
    const stickyBoxes = document.querySelectorAll(".sticky_box");

    stickyBoxes.forEach((stickyBox) => {
      if (!stickyBox.parentElement) return;
      const parentTop = stickyBox.parentElement?.offsetTop;
      const parentBottom = stickyBox.parentElement?.offsetHeight;

      if (windowY - parentTop < 0) return;
      const percentage = Math.round(
        ((windowY - parentTop) / parentBottom) * 100
      );
      const children = stickyBoxes[0].children;
      let totalWidth = 0;
      for (let i = 0; i < children.length; i++) {
        const child = children[i] as HTMLElement;
        totalWidth += child.offsetWidth;
      }
      stickyBox.scrollLeft = Math.round((percentage / 100) * totalWidth);
    });
  };

  useEffect(() => {
    if (!mainRef.current) return;
    mainRef.current.addEventListener("scroll", handleScroll);

    return () => {
      if (!mainRef.current) return;
      mainRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return mainRef;
};

export default useHorizontleMix;
