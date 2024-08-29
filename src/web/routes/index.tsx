import { Flex } from "@radix-ui/themes";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
 
  return (
    <Flex
      className="h-screen w-full"
    >
      content
    </Flex>
  );
}
