import { useEffect, useState } from "react";

const useGetDimensions = () => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const handleWindowResize = () => {
    const currentHeight = window.innerHeight;
    const currentWidth = window.innerWidth;

    setHeight(currentHeight);
    setWidth(currentWidth);
  };

  useEffect(() => {
    const initialHeight = window.innerHeight;
    const initialWidth = window.innerWidth;

    setHeight(initialHeight);
    setWidth(initialWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return { height, width };
};

export default useGetDimensions;
