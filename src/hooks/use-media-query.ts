import { useEffect, useState } from "react";

export default function useMediaQuery(mediaQueryString: string) {
  const [matches, setMatches] = useState<Boolean>();
  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    setMatches(mediaQueryList.matches);
    const listener = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [mediaQueryString]);

  return matches;
}
