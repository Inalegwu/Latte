import { CornersOut, Minus, X } from "@phosphor-icons/react";
import { Button, Flex, Text } from "@radix-ui/themes";
import t from "@src/shared/config";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex width="100%" direction="column" grow="1" className="transition">
      {children}
    </Flex>
  );
}
