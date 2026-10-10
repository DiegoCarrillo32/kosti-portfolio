"use client";

import { DESIGNS } from "./registry";
import { useDesign } from "./DesignProvider";

export default function DesignRenderer() {
  const { design } = useDesign();
  const { Page } = DESIGNS[design];
  return <Page />;
}
