import { Avatar, Flex } from "@chakra-ui/react";
import DEStoq from "../../../assets/imgs/DEStoq.png";

const ImageRegister = () => {
  return (
    <Flex
      w="100%"
      h="100%"
      flexDirection="column"
      justify="center"
      align="center"
      background="#101010"
      backgroundImage={
        "https://www.jeronimoburger.com.br/img/home/banner-sobre-desk.png"
      }
      bgRepeat="no-repeat"
      backgroundSize="100% 90%"
      display={["none", "none", "none", "none", "flex"]}
    >
      <Flex h="500px" justify="center" align="center">
        <Avatar
          w="200px"
          h="200px"
          ml="-100px"
          mt="150px"
          position="absolute"
          top="200px"
          src={DEStoq}
          alt="logo da empresa"
        />
      </Flex>
    </Flex>
  );
};

export default ImageRegister;
