import { useEffect, useState } from 'react';
const IsLarge = () => window.innerWidth >= 960;
export default function useIsLargeScreen() {
  const [IsLargeScreen, setIsLargeScreen] = useState(IsLarge());

  useEffect(() => {
    const onResize = () => {
      setIsLargeScreen(IsLarge());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return IsLargeScreen;
}
