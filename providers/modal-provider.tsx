"use client";
import React, { useState, useEffect } from "react";

// local imports
import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <StoreModal />
    </>
  );
};

// now add it to main layout
