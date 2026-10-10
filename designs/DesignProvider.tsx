"use client";

import { createContext, ReactNode, useCallback, useContext, useState } from "react";
import {
  DESIGN_COOKIE,
  DESIGN_COOKIE_MAX_AGE,
  DESIGN_IDS,
  DesignId,
} from "./ids";

interface DesignContextValue {
  design: DesignId;
  designs: readonly DesignId[];
  setDesign: (id: DesignId) => void;
}

const DesignContext = createContext<DesignContextValue | null>(null);

export function DesignProvider({
  initialDesign,
  children,
}: {
  initialDesign: DesignId;
  children: ReactNode;
}) {
  const [design, setDesignState] = useState<DesignId>(initialDesign);

  const setDesign = useCallback((id: DesignId) => {
    document.cookie = `${DESIGN_COOKIE}=${id}; path=/; max-age=${DESIGN_COOKIE_MAX_AGE}; samesite=lax`;
    document.documentElement.dataset.design = id;
    setDesignState(id);
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <DesignContext.Provider value={{ design, designs: DESIGN_IDS, setDesign }}>
      {children}
    </DesignContext.Provider>
  );
}

export function useDesign() {
  const ctx = useContext(DesignContext);
  if (!ctx) throw new Error("useDesign must be used inside <DesignProvider>");
  return ctx;
}
