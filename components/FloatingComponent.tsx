"use client";

import { useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
import FloatingContacts from "./FloatingContacts";

export default function FloatingComponent() {
  const [showTop, setShowTop] = useState(false);

  return (
    <>
      <ScrollToTopButton onVisibleChange={setShowTop} />
      <FloatingContacts shiftUp={showTop} />

      {/* เนื้อหาอื่น */}
    </>
  );
}
