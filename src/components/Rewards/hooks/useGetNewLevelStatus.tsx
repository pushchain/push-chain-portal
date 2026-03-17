import { useEffect, useRef, useState } from "react";

const LEVEL_STORAGE_KEY = 'push-portal-last-known-level';

export const useGetNewLevelStatus = (level?: number, wallet?: string) => {
  const [hasLevelledUp, setHasLevelledUp] = useState(false);
  const hasCheckedRef = useRef(false);

  useEffect(() => {
    if (!level || !wallet || hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    const key = `${LEVEL_STORAGE_KEY}-${wallet}`;

    try {
      const stored = localStorage.getItem(key);
      const storedLevel = stored ? parseInt(stored, 10) : null;

      if (storedLevel !== null && level > storedLevel) {
        setHasLevelledUp(true);
      }

      localStorage.setItem(key, String(level));
    } catch {}
  }, [level, wallet]);

  const dismiss = () => setHasLevelledUp(false);

  return { hasLevelledUp, dismiss };
};
