import { Avatar, Flex } from "@chakra-ui/react";
import FormLogin from "../../components/login-components/FormLogin";
import DEStoq from "../../assets/imgs/DEStoq.png";
import ImageLogin from "../../components/login-components/ImageLogin";

const LoginPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      direction={["column", "column", "column", "column", "row-reverse"]}
    >
      <Avatar
        w="200px"
        h="200px"
        position="absolute"
        top="100px"
        src={DEStoq}
        alt="logo da empresa"
        display={[
          "inline-block",
          "inline-block",
          "inline-block",
          "inline-block",
          "none",
        ]}
      />

      <FormLogin />

      <ImageLogin />
    </Flex>
  );
};

export default LoginPage;
