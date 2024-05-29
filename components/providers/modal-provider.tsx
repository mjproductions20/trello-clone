"use client";

import React, { useEffect, useState } from "react";
import { CardModal } from "../modals/card-modal";
import { ProModal } from "../modals/pro-modal";

export const ModalProvider = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};
