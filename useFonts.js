// useFonts.js
import * as Font from "expo-font";
import { useEffect, useState } from "react";

const useFonts = (fontMap) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync(fontMap);
      setFontsLoaded(true);
    })();
  }, []);

  return fontsLoaded;
};

export default useFonts;
