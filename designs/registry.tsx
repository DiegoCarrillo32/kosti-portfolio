"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import type { DesignId } from "./ids";

// Each design is a full page that owns its own chrome (nav, footer, switcher).
// Loaded lazily so only the active design's code, styles and fonts ship.
export const DESIGNS: Record<DesignId, { Page: ComponentType }> = {
  classic: { Page: dynamic(() => import("./classic")) },
  "crab-crew": { Page: dynamic(() => import("./crab-crew")) },
};
