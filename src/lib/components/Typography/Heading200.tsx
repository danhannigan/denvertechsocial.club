import { Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Heading200Props = {
  children: ReactNode;
};

const Heading200 = ({ children }: Heading200Props) => {
  return (
    <Heading
      maxWidth="540px"
      fontSize={["32px", "54px"]}
      lineHeight="58px"
      fontWeight="100"
      marginBottom="4"
    >
      {children}
    </Heading>
  );
};

export default Heading200;