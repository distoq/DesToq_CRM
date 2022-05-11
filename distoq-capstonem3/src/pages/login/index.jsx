import { Flex, Image } from "@chakra-ui/react";
import FormLogin from "../../components/login-components/FormLogin";
import DEStoq from "../../assets/imgs/DEStoq.svg";
import ImageLogin from "../../components/login-components/ImageLogin";


const LoginPage = () => {
  return (
    <Flex
      w="100vw"
      h="100vh"
      justify="center"
      align="center"
      direction={["column","column","column","column","row-reverse"]}
    >
      <Image
        position="absolute"
        top="200px"
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
      
      <ImageLogin/>
    </Flex>
  );
};

export default LoginPage;
