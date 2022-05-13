import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  useDisclosure,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import DEStoq from "../../assets/imgs/DEStoq-white.png";
import React from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { MdDashboard } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { AiFillBank, AiOutlineDropbox } from "react-icons/ai";
import { FaBoxes, FaHamburger, FaFileInvoiceDollar, FaOpencart } from "react-icons/fa";
import { BsBoxArrowInRight } from "react-icons/bs";
import { useActivePage } from "../../Providers/DashboardPageController";

const DashboardHeader = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const options = [
    "Dashboard",
    "Pedidos",
    "Fornecedores",
    "Insumos",
    "Compras",
    "Produtos",
    "Estoque",
    "Financeiro",
  ];

  const { activeDashboardPage, setActiveDashboarPage } = useActivePage();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "menuOptions",
    defaultValue: activeDashboardPage,
    onChange: setActiveDashboarPage,
  });

  const group = getRootProps();

  const handleIcons = (value) => {
    switch (value) {
      case "Dashboard":
        return <MdDashboard />;
      case "Pedidos":
        return <FaFileInvoiceDollar />;

      case "Fornecedores":
        return <GiFactory />;

      case "Insumos":
        return <AiOutlineDropbox />;

      case "Compras":
      return <FaOpencart />;

      case "Produtos":
        return <FaHamburger />;

      case "Estoque":
        return <FaBoxes />;

      case "Financeiro":
        return <AiFillBank />;

      default:
        break;
    }
  };

  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();

    return (
      <Box as="label">
        <input {...input} />
        <Flex
          {...checkbox}
          cursor="pointer"
          //   borderWidth="1px"
          borderRadius="md"
          fontWeight="bold"
          fontSize="26px"
          color="white"
          alignItems="center"
          //   boxShadow="md"
          _checked={{
            bg: "#F4BF39",
            color: "#434343",
            fontWeight: "bold",
          }}
          _focus={{
            boxShadow: "outline",
          }}
          px={5}
          py={3}
          sx={{
            svg: {
              marginRight: "10px",
            },
          }}
        >
          {props.children}
        </Flex>
      </Box>
    );
  }

  return (
    <>
      <Flex
        w="100%"
        h="80px"
        backgroundColor="#101010"
        alignItems="center"
        justifyContent="center"
        boxShadow={"0 0 5px black"}
      >
        <Flex
          w="95%"
          h="100%"
          alignItems="center"
          justifyContent="space-between"
        >
          <Button
            width="45px"
            h="47px"
            ref={btnRef}
            colorScheme="teal"
            onClick={onOpen}
            backgroundColor="#101010"
            display={["flex", "flex", "flex", "flex", "none"]}
          >
            <HamburgerIcon w="45px" h="47px" />
          </Button>
          <Image src={DEStoq} width="150px" alt="DEStoq logo" />
          <Button
            backgroundColor="#101010"
            display={["none", "none", "none", "none", "inline-block"]}
            _hover={{
              backgroundColor: "#F4BF39",
            }}
          >
            <BsBoxArrowInRight fontSize={35} color="white" />
          </Button>
        </Flex>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="#434343">
          <DrawerCloseButton color="white" />
          <DrawerHeader color="white" fontWeight="bold" fontSize="26px">
            MENU
          </DrawerHeader>

          <DrawerBody>
            <VStack {...group} alignItems="flex-start">
              {options.map((value) => {
                const radio = getRadioProps({ value });
                return (
                  <RadioCard key={value} {...radio}>
                    {handleIcons(value)} {value}
                  </RadioCard>
                );
              })}
            </VStack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="primary"
              width={"100%"}
              fontWeight={"bold"}
              fontSize={"22px"}
              backgroundColor="#F4BF39"
              color={"#434343"}
              display={["flex", "flex", "flex", "flex", "none"]}
            >
              Logout <BsBoxArrowInRight />
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DashboardHeader;
