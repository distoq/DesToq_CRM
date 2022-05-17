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

import React, { useContext } from "react";
import { CartContext } from "../../../Providers/cart";

import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";
import api from "../../../services/api";
import { useToken } from "../../../Providers/Token";

const HeaderHome = () => {
  const tokenUser = JSON.parse(localStorage.getItem("@DEStoq:token")) || "";
  const decodedToken = decodeToken(tokenUser);
  const navigate = useNavigate();
  const { cart, deleteCart } = useContext(CartContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const toast = useToast();

  const sum = cart.reduce((previous, current) => {
    return previous + current.price * current.quantity;
  }, 0);

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");

    toast({
      description: "deslogado com sucesso",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  const deleteFromCart = (id) => {
    deleteCart(id);
    toast({
      description: "removido!",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  const { token } = useToken();

  const getOrder = () => {
    const cartItems = JSON.parse(localStorage.getItem("@DEStoq:cart")) || [];

    if ( cartItems?.length === 0) {
      toast({
        description: "Carrinho vazio !",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      });
    }
    if (token && cartItems.length !== 0) {
      api
        .post("tickets/", cartItems, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          if (token) {
            onClose();
            localStorage.removeItem("@DEStoq:cart");
            toast({
              description: "Seu pedido foi feito!",
              status: "success",
              duration: 4000,
              isClosable: true,
              position: "top",
            });
          } else {
            toast({
              description: "Usuário não está logado!",
              status: "error",
              duration: 4000,
              isClosable: true,
              position: "top",
            });
          }
          onClose();
        })
        .catch((err) => {
          toast({
            description: "Ops, Algo deu errado!",
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top",
          });
        });
    }
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
              display={decodedToken?.sub !== "1" && "none"}
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
                {cart.reduce((previous, current) => {
                  return previous + current.quantity;
                }, 0)}
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
                      {cart.map((product, index) => {
                        const sumProduct = product.price * product.quantity;
                        return (
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
                            <Text w={"100px"} maxW={"100px"}>
                              Qtd: {product.quantity}
                            </Text>
                            <Text>
                              {sumProduct.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </Text>
                            <Button
                              onClick={() => deleteFromCart(product.uniqueId)}
                            >
                              <DeleteIcon />
                            </Button>
                          </ListItem>
                        );
                      })}
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
                    finalizar compra
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
