import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children }) => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div>{children}</div>
    </div>
  );
};
