import { Flex } from "@radix-ui/themes";
import { MailRegular } from "@fluentui/react-icons"
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex width="100%" direction="column" grow="1" className="transition bg-zinc-50">
      <Flex align="center" justify="between" className="bg-zinc-100 border-b-solid border-b-1 border-b-zinc-300 px-2 py-2">
        <button className="bg-zinc-300 rounded-md flex items-center justify-center">
          <MailRegular fontSize={14} />
        </button>
      </Flex>
      {children}
    </Flex>
  );
}
