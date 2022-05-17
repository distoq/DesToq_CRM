import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useRadio,
  useRadioGroup,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivePage } from "../../../Providers/DashboardPageController";

import { useEffect, useState } from "react";
import api from "../../../dataBase/db";
import { RequestList } from "./RequestsList";
import { useToken } from "../../../Providers/Token";
import { useSelectValues } from "../../../Providers/SelectValues";
import { AiOutlineDelete } from "react-icons/ai";

export const PedidosPage = () => {
  const { activeDashboardPage, setActiveDashboardPage, handleIcons, options } =
    useActivePage();
  const { token } = useToken();
  const { categoriasOptions } = useSelectValues();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [users, setUsers] = useState([]);
  const [ordersList, setOrdersList] = useState([]);
  const [requestProduct, setRequestProduct] = useState([]);
  const [productIngredient, setProductIngredient] = useState([]);
  const [value, setValue] = useState("");
  const [quantity, setQuantity] = useState('');
  const getOrdersList = () => {
    api
      .get("/tickets?_sort=id&_order=desc")
      .then((res) => setOrdersList(res.data))
      .catch((err) => err);
  };

  const getUsers = (id) => {
    if (id) {
      api
        .get(`users/${id}`, {
          headers: {
            Authentication: `Bearer ${token}`,
          },
        })
        .then((res) => setUsers(res.data));
    }
    api
      .get(`users`, {
        headers: {
          Authentication: `Bearer ${token}`,
        },
      })
      .then((res) => setUsers(res.data));
  };
  const getProducts = (id) => {
    if (id) {
      api.get(`/products/${id}`).then((resp) => {
        return setProduct(resp.data);
      });
    }
    api.get(`/products/`).then((resp) => {
      setProducts(resp.data);
    });
  };

  useEffect(() => {
    getOrdersList();
    getProducts();
    getUsers();
  }, []);

  const toast = useToast();
  const formSchema = yup.object().shape({
    providerId: yup.object().required("*** Preço obrigatória!"),
  });
  const deleteItems = (id) => {
    const deleteItem = requestProduct.filter((item) => item.id == id);
    setRequestProduct(deleteItem);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    console.log("data");
    // api
    //   .post("/tickets", data, {
    //     header: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //   .then((res) => {
    //     toast({
    //       description: "Usuário logado com sucesso!",
    //       status: "success",
    //       duration: 1500,
    //       isClosable: true,
    //       position: "top",
    //     });
    //     getOrdersList();
    //   });
  };

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "menuOptions",
    defaultValue: activeDashboardPage,
    onChange: setActiveDashboardPage,
  });

  const group = getRootProps();

  function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props);

    const input = getInputProps();
    const checkbox = getCheckboxProps();
    console.log(requestProduct)
    return (
      <Box as="label" width={"100%"}>
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
    //FULL CONTAINER
    <Flex className="fullPage" width="100%" minHeight="calc(100vh - 80px)">
      <VStack
        {...group}
        alignItems="flex-start"
        backgroundColor={"#434343"}
        display={["none", "none", "none", "none", "flex"]}
      >
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {handleIcons(value)} {value}
            </RadioCard>
          );
        })}
      </VStack>
      <Flex
        className="contentContainer"
        width="100%"
        minHeight="100%"
        flexDir="column"
        alignItems={"center"}
        backgroundImage={
          "https://www.jeronimoburger.com.br/img/home/banner-sobre-desk.png"
        }
        bgRepeat="no-repeat"
        backgroundSize="100% 100%"
      >
        <Heading
          variant="primary"
          width="100%"
          margin={["0px", "0px", "0px", "0px", "20px 20px"]}
          display={[
            "inline-block",
            "inline-block",
            "inline-block",
            "inline-block",
            "none",
          ]}
          textAlign="center"
        >
          Pedidos
        </Heading>
        <InputGroup
          size="md"
          width={"90%"}
          maxW={"500px"}
          margin={["0px", "0px", "0px", "0px", "20px 0 0 0"]}
          display={["flex", "flex", "flex", "flex", "none"]}
        >
          <Input
            pr="4.5rem"
            type={"text"}
            placeholder="Faça sua pesquisa..."
            backgroundColor={"white"}
            fontWeight={"bold"}
            boxShadow={"0 0 5px grey"}
            _focus={{
              boxShadow: "0 0 10px grey",
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={() => console.log("teste")}>
              <GoSearch />
            </Button>
          </InputRightElement>
        </InputGroup>
        <Flex
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            backgroundColor={"#dbdbdb"}
            boxShadow={"0 0 15px #464646"}
            width={["100%", "100%", "100%", "100%", "90%"]}
            height={["100%", "100%", "100%", "100%", "90%"]}
            marginTop={["20px", "20px", "20px", "20px", "0px"]}
            borderTopRadius={"15px"}
            borderBottomRadius={["0px", "0px", "0px", "0px", "15px"]}
            color={"white"}
          >
            <Tabs
              isFitted
              variant="enclosed"
              w={"100%"}
              backgroundColor={"#434343"}
              borderRadius={"20px"}
            >
              <TabList mb="1em">
                <Tab
                  color={"#fff"}
                  fontWeight={"bold"}
                  fontSize={"26px"}
                  _selected={{
                    color: "#F4BF39",
                    borderBottomColor: "#F4BF39",
                    borderBottomWidth: "2px",
                  }}
                  _focus={{
                    borderColor: "#F4BF39",
                    borderTopLeftRadius: "18px",
                    border: "2px",
                  }}
                >
                  Pedidos
                </Tab>
                <Tab
                  color={"#fff"}
                  fontWeight={"bold"}
                  fontSize={"26px"}
                  _selected={{
                    color: "#F4BF39",
                    borderBottomColor: "#F4BF39",
                    borderBottomWidth: "2px",
                  }}
                  _focus={{
                    borderColor: "#F4BF39",
                    borderTopRightRadius: "18px",
                    border: "2px",
                  }}
                >
                  Adicionar Pedido
                </Tab>
              </TabList>
              <TabPanels
                sx={{
                  minWidth: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                maxHeight={[
                  "calc(100% - 150px)",
                  "calc(100% - 110px)",
                  "calc(100% - 110px)",
                  "calc(100% - 110px)",
                  "calc(100% - 80px)",
                ]}
              >
                <TabPanel
                  width={"90%"}
                  height={"100%"}
                  maxH={"80vh"}
                  display={"flex"}
                  flexDir={"column"}
                  justfyContent={"center"}
                  alignItens={"center"}
                  overflowY={"auto"}
                  sx={{
                    "&::-webkit-scrollbar": {
                      width: "5px",
                      height: "50px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#7a7a7a",
                      marginTop: "25px",
                      marginBottom: "25px",
                      borderRadius: "5px",
                      boxShadow: "inset 0 0 3px black",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "#505050",
                      boxShadow: "inset 0 0 5px #e7e7e7dd",
                      borderRadius: "5px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "#555",
                    },
                  }}
                >
                  {ordersList?.map((elem) => (
                    elem.map((items)=> 
                    <RequestList
                    order={items}
                    getOrdersList={getOrdersList}
                    setOrdersList={setOrdersList}
                  />
                    )
                  ))}
                </TabPanel>
                <TabPanel
                  width={"100%"}
                  height={"100%"}
                  maxH={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  sx={{}}
                >
                  <Flex
                    w={"100%"}
                    maxWidth={"700px"}
                    height={"100%"}
                    justifyContent={"center"}
                  >
                    <Stack
                      spacing={3}
                      width="400px"
                      maxWidth={"90%"}
                      height={"100%"}
                      display="flex"
                      flexDir={"column"}
                      alignItems="center"
                      justifyContent={"center"}
                      padding={"0 30px"}
                      backgroundColor={"#fff"}
                      borderRadius={"10px"}
                      boxShadow="0 0 10px grey"
                      color={"black"}
                    >
                      <Heading fontSize={"30px"}> Criar Produto</Heading>
                      <Select
                        placeholder="Clientes..."
                        margin={"5px 0"}
                        backgroundColor={"#ffffff"}
                        value={value}
                        onChange={(e) => {
                          setValue(e.target.value);
                          getProducts(value);
                        }}
                      >
                        {users?.map((user) => (
                          <option value={user.id}>{user.name}</option>
                        ))}
                      </Select>
                      <Flex
                        width={"100%"}
                        direction={"column"}
                        backgroundColor={"#f7f7f7"}
                        boxShadow={"inset 0 0 5px #dbdbdb"}
                        padding={"10px"}
                        borderRadius={"5px"}
                      >
                        <Select
                          placeholder="Produtos..."
                          margin={"5px 0"}
                          backgroundColor={"#ffffff"}
                          onChange={(e) => getProducts(e.target.value)}
                        >
                          {products?.map((supply) => (
                            <option value={supply.id}>{supply.name}</option>
                          ))}
                        </Select>
                        <InputGroup
                          margin={"5px 0"}
                          backgroundColor={"#ffffff"}
                        >
                          <InputLeftAddon children={"Qty."} />
                          <Input
                            type={"number"}
                            value={quantity}
                            backgroundColor={"#ffffff"}
                            onChange={(e) => {
                              setQuantity(+e.target.value);
                            }}
                          />
                        </InputGroup>
                        <Button
                          margin={"5px 0"}
                          colorScheme="blue"
                          onClick={() => {
                            api
                              .get(`products/${value}`, {
                                headers: {
                                  Authorization: `Bearer ${token}`,
                                },
                              })
                              .then((res) =>
                                setRequestProduct(...requestProduct, res.data)
                              );

                            setValue("");
                            setQuantity('');
                          }}
                        >
                          Adicionar
                        </Button>
                        {requestProduct?.map((ele, index) => (
                          <Box mb="5px">
                            <Flex>
                              <Text w="130px">
                                {index + 1}. {ele.name} - {ele.quantity}{" "}
                                {ele.measurementUnit}
                                <Button
                                  colorScheme={"red"}
                                  onClick={() => deleteItems(ele.id)}
                                >
                                  <AiOutlineDelete fontSize={20} />
                                </Button>
                              </Text>
                            </Flex>
                          </Box>
                        ))}
                      </Flex>
                      <Select
                        placeholder="Categoria"
                        {...register("providerId")}
                      >
                        {categoriasOptions.map((ele) => (
                          <option value={ele}>{ele}</option>
                        ))}
                      </Select>
                      {errors.provider && (
                        <Text color={"#ff0000"} width={"95%"}>
                          {errors.provider.message}
                        </Text>
                      )}

                      <Button
                        minHeight={"40px"}
                        colorScheme="blue"
                        onClick={handleSubmit(onSubmitFunction)}
                      >
                        Adicionar Pedido
                      </Button>
                    </Stack>
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PedidosPage;
