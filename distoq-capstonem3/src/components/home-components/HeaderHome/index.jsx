import {
  Button,
  Flex,
  Image,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  UnorderedList,
  ListItem,
  Avatar,
  useToast,
} from "@chakra-ui/react";

import { BsBoxArrowInRight } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { DeleteIcon } from "@chakra-ui/icons";
import DEStoq from "../../../assets/imgs/DEStoq.svg";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import React, { useContext } from "react";
import { CartContext } from "../../../Providers/cart";
import api from "../../../services/api";

const HeaderHome = () => {
  const tokenUser = JSON.parse(localStorage.getItem("@DEStoq:token")) || "";
  const decodedToken = decodeToken(tokenUser);
  const navigate = useNavigate();
  const { cart, deleteCart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const sum = cart.reduce((previous, current) => {
    return previous + current.price;
  }, 0);

  const toast = useToast();
  const handleLogOut = () => {
    navigate("/login");
    toast({
      description: "Logout Feito com Sucesso",
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  const deleteFromCart = (id) => {
    deleteCart(id);
    toast({
      description: "Produto removido com Sucesso!",
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  const getOrder = () => {
    const cartItems = JSON.parse(localStorage.getItem("@DEStoq:cart"));
    api
      .post("/tickets", cartItems)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Flex
        w="100%"
        h="150px"
        bg="#101010"
        direction={["row", "row"]}
        justify="center"
        align="center"
      >
        <Flex w="80%" justify={["space-between"]} align="center">
          <Image src={DEStoq} alt="logo da empresa" />
          <Flex w={["151px", "200px", "300px"]}>
            <Button
              disabled={decodedToken?.sub !== "1"}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              onClick={() => navigate("/dashboard")}
            >
              <RiAdminFill fontSize={35} color="#ffff" />
            </Button>
            {cart.length !== 0 && (
              <Avatar
                position="relative"
                bottom="20px"
                left="60px"
                variant="secondary"
                color="#101010"
                bg="#ffff"
                w="20px"
                h="20px"
                padding="7px"
                fontSize={"12px"}
                fontWeight={"bold"}
              >
                {cart.length}
              </Avatar>
            )}
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              ref={btnRef}
              onClick={onOpen}
            >
              <AiOutlineShoppingCart fontSize={35} color="#ffff" />
            </Button>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size="lg"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Carrinho</DrawerHeader>
                <DrawerBody>
                  <Flex direction="center" align="center" justify="center">
                    <UnorderedList m="0">
                      {cart.map((product, index) => (
                        <ListItem
                          key={index}
                          display="flex"
                          alignItems="center"
                          justifyContent="space-between"
                          width={["280px", "300px", "600px"]}
                          h="85px"
                          m="10px"
                          p="10px"
                          border="1px solid black"
                          borderRadius="10px"
                          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                        >
                          <Avatar
                            w="57px"
                            h="57px"
                            src={product.image}
                            alt={product.name}
                          />
                          <Text w={"100px"} maxW={"100px"}>
                            {product.name}
                          </Text>
                          <Text>
                            {product.price.toLocaleString("pt-br", {
                              style: "currency",
                              currency: "BRL",
                            })}
                          </Text>
                          <Button onClick={() => deleteFromCart(product.id)}>
                            <DeleteIcon />
                          </Button>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Flex>
                </DrawerBody>
                <DrawerFooter alignSelf="center">
                  <Flex
                    bg="#E2E8F0"
                    justify={"space-around"}
                    borderRadius="5px"
                    p="5px"
                    h="43px"
                    align="center"
                    w="150px"
                  >
                    <Text variant="primary">Total:</Text>
                    <Text variant="primary">
                      {sum.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </Text>
                  </Flex>
                  <Button variant="primary" w="350px" onClick={getOrder}>
                    Finalizar Compra
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <Button
              bg="transparent"
              _hover={{ bg: "transparent" }}
              onClick={handleLogOut}
            >
              <BsBoxArrowInRight color="white" fontSize={35} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export { HeaderHome };
