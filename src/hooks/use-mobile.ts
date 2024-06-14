import { useLayoutEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  useLayoutEffect(() => {
    function checkIsMobile() {
      setIsMobile(window.matchMedia("(max-width: 990px)").matches);
    }

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  return isMobile;
}
export default useIsMobile;
