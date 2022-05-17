import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Select,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { GoSearch } from "react-icons/go";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useActivePage } from "../../../Providers/DashboardPageController";

import { useEffect, useState } from "react";
import api from "../../../dataBase/db";
import { useToken } from "../../../Providers/Token";
import { useSelectValues } from "../../../Providers/SelectValues";
import { CardProdutos } from "./ProdutosCard";

export const ProdutosPage = () => {
  const { activeDashboardPage, setActiveDashboardPage, handleIcons, options } =
    useActivePage();
  // const { unidadesDeMedidaOptions, categoriasOptions } = useSelectValues();

  const [productsList, setProductsList] = useState(null);

  const { token } = useToken();

  const { categoriasOptions } = useSelectValues();

  const getProductsList = () => {
    api
      .get("/products")
      .then((res) => setProductsList(res.data))
      .catch((err) => err);
  };

  console.log(productsList);
  useEffect(() => {
    getProductsList();
  }, []);

  const [suppliesList, setSuppliesList] = useState(null);
  const [productIngredient, setProductIngredient] = useState(null);
  const [productIngredientsList, setProductIngredientsList] = useState([]);

  const [productNameValue, setProductNameValue] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [salePriceValue, setSalePriceValue] = useState(null);
  const [imgUrlValue, setImgUrlValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");

  const [inputSelect, setInputSelect] = useState("");
  const [inputQty, setInputQty] = useState("");
  const [showError, setShowError] = useState(false);

  const handleInputsFields = () => {
    setProductNameValue("");
    setCategoryValue("");
    setSalePriceValue(0);
    setImgUrlValue("");
    setDescriptionValue("");
    setProductIngredientsList([]);
  };

  useEffect(() => {
    api.get(`/supplies`).then((resp) => {
      setSuppliesList(resp.data);
    });
  }, []);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    category: yup.string().required("Selecione uma categoria!"),

    price: yup
      .number()
      .typeError("Preço obrigatório!")
      .positive("Proíbido valor negativo!")
      .nullable(true)
      .required("Preço obrigatório!"),

    image: yup.string().required("Imagem obrigatória!"),
    description: yup.string().required("Descrição obrigatória!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    if (productIngredientsList.length === 0) {
      setShowError(true);
    } else {
      const dataProducts = {
        ...data,
        ownerId: 1,
        userId: 1,
        ingredients: [...productIngredientsList],
        rating: 5,
      };

      console.log(dataProducts);

      api
        .post(`/products`, dataProducts, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(() => getProductsList());

      handleInputsFields();
    }
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
          Produtos
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
                  Produtos
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
                  Adicionar Novo Produto
                </Tab>
              </TabList>
              <TabPanels
                sx={{
                  minWidth: "100%",
                  height: "100%",
                  // maxHeight: "calc(100% - 75px)",
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
                  // backgroundColor={"#feffce"}
                  width={"90%"}
                  height={"100%"}
                  maxH={"80vh"}
                  display={"flex"}
                  flexDir={"row"}
                  flexWrap={"wrap"}
                  // backgroundColor={"#fff"}
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
                  {productsList?.map((ele) => (
                    <CardProdutos
                      product={ele}
                      setProductsList={setProductsList}
                      getProductsList={getProductsList}
                    />
                  ))}
                </TabPanel>
                <TabPanel
                  width={"100%"}
                  height={"100%"}
                  maxH={"100%"}
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  overflowY={"auto"}
                  sx={{
                    "&::-webkit-scrollbar": {
                      width: "5px",
                      height: "50px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "#7a7a7a",
                      marginTop: "5px",
                      marginBottom: "5px",
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
                  <Flex
                    w={"100%"}
                    maxWidth={"700px"}
                    height={"fit-content"}
                    justifyContent={"center"}
                  >
                    <Stack
                      spacing={3}
                      width="400px"
                      maxWidth={"90%"}
                      height={"fit-content"}
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
                      <Heading fontSize={"30px"} marginTop={"20px"}>
                        {" "}
                        Criar Produto
                      </Heading>
                      <Input
                        placeholder={"Nome do Produto"}
                        minH={"40px"}
                        marginTop={"40px"}
                        {...register("name")}
                        value={productNameValue}
                        onChange={(e) => setProductNameValue(e.target.value)}
                      />
                      {errors.name && (
                        <Text color={"#ff0000"} width={"95%"}>
                          {errors.name.message}
                        </Text>
                      )}

                      <Flex
                        width={"100%"}
                        direction={"column"}
                        backgroundColor={"#f7f7f7"}
                        boxShadow={"inset 0 0 5px #dbdbdb"}
                        padding={"10px"}
                        borderRadius={"5px"}
                      >
                        <Select
                          value={inputSelect}
                          placeholder="Ingredientes..."
                          margin={"5px 0"}
                          backgroundColor={"#ffffff"}
                          onChange={(e) => {
                            setProductIngredient({
                              ...productIngredient,
                              supplyId: +e.target.value,
                            });
                            setInputSelect(e.target.value);
                          }}
                        >
                          {suppliesList?.map((supply) => (
                            <option value={supply.id}>{supply.name}</option>
                          ))}
                        </Select>
                        <InputGroup
                          margin={"5px 0"}
                          backgroundColor={"#ffffff"}
                        >
                          <InputLeftAddon children={"Qty."} />
                          <Input
                            value={inputQty}
                            type={"number"}
                            backgroundColor={"#ffffff"}
                            onChange={(e) => {
                              const inputValue = +e.target.value;
                              setProductIngredient({
                                ...productIngredient,
                                qty: inputValue,
                              });
                              setInputQty(e.target.value);
                            }}
                          />
                        </InputGroup>
                        <Button
                          margin={"5px 0"}
                          colorScheme="blue"
                          onClick={() => {
                            api
                              .get(`/supplies/${productIngredient.supplyId}`)
                              .then((resp) => {
                                setProductIngredientsList([
                                  ...productIngredientsList,
                                  { ...resp.data, qty: productIngredient.qty },
                                ]);
                              });
                            setProductIngredient(null);
                            setInputSelect("");
                            setInputQty("");
                            setShowError(false);
                          }}
                        >
                          Adicionar
                        </Button>
                        {productIngredientsList?.map((ele, index) => (
                          <Text
                            value={ele.id}
                            display={"flex"}
                            fontWeight={"bold"}
                            alignItems={"center"}
                          >
                            {index + 1}. {ele.name} - {ele.qty}{" "}
                            {ele.measurementUnit}
                            <Button
                              value={ele.id}
                              size={"small"}
                              marginLeft={"10px"}
                              backgroundColor={"red"}
                              width={"15px"}
                              height={"15px"}
                              onClick={(e) => {
                                console.log(e.target.value);
                                setProductIngredientsList(
                                  productIngredientsList.filter(
                                    (ele) => ele.id != e.target.value
                                  )
                                );
                              }}
                            >
                              x
                            </Button>
                          </Text>
                        ))}
                      </Flex>
                      {showError && (
                        <Text color={"#ff0000"} width={"95%"}>
                          Adicione ao menos um ingrediente!
                        </Text>
                      )}
                      <Select
                        placeholder="Categoria"
                        {...register("category")}
                        value={categoryValue}
                        onChange={(e) => setCategoryValue(e.target.value)}
                      >
                        {categoriasOptions.map((ele) => (
                          <option value={ele}>{ele}</option>
                        ))}
                      </Select>
                      {errors.category && (
                        <Text color={"#ff0000"} width={"95%"}>
                          {errors.category.message}
                        </Text>
                      )}
                      <InputGroup>
                        <InputLeftAddon children={"R$"} />
                        <Input
                          placeholder="Preço de Venda"
                          type={"number"}
                          {...register("price")}
                          value={salePriceValue}
                          onChange={(e) => setSalePriceValue(e.target.value)}
                        />
                        <InputRightAddon children={"Preço de Venda"} />
                      </InputGroup>
                      {errors.price && (
                        <Text color={"#ff0000"} width={"95%"}>
                          {errors.price.message}
                        </Text>
                      )}
                      <InputGroup>
                        <InputLeftAddon children={"URL"} />
                        <Input
                          placeholder="Imagem do Produto..."
                          {...register("image")}
                          value={imgUrlValue}
                          onChange={(e) => setImgUrlValue(e.target.value)}
                        />
                      </InputGroup>
                      {errors.image && (
                        <Text color={"#ff0000"} width={"95%"}>
                          {errors.image.message}
                        </Text>
                      )}

                      <Textarea
                        placeholder="Descrição do produto..."
                        {...register("description")}
                        value={descriptionValue}
                        onChange={(e) => setDescriptionValue(e.target.value)}
                      />
                      {errors.description && (
                        <Text color={"#ff0000"} width={"95%"}>
                          {errors.description.message}
                        </Text>
                      )}
                      <Button
                        minHeight={"40px"}
                        colorScheme="blue"
                        marginBottom={"20px"}
                        onClick={handleSubmit(onSubmitFunction)}
                      >
                        Cadastrar Produto
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

export default ProdutosPage;
