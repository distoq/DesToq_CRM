import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { GoSearch } from "react-icons/go";

import { useActivePage } from "../../../Providers/DashboardPageController";
import { useProvidersList } from "../../../Providers/ProvidersList";
import { FormProviders } from "./FormFornecedor";
import { ListProviders } from "./ListFornecedores";

export const FornecedoresPage = () => {
  const { activeDashboardPage, setActiveDashboardPage, handleIcons, options } =
    useActivePage();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "menuOptions",
    defaultValue: activeDashboardPage,
    onChange: setActiveDashboardPage,
  });
  const { providersList } = useProvidersList();
  const group = getRootProps();

  const [input, setInput] = useState("");

  const filteredProvidersList = providersList.filter((item) =>
    item.companyName.toLowerCase().includes(input.toLowerCase())
  );

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
          margin={["0px", "0px", "0px", "0px", "20px 0px"]}
          textAlign="center"
        >
          Fornecedores
        </Heading>
        <InputGroup size="md" width={"90%"} maxW={"500px"}>
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
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            backgroundColor={"#434343"}
            boxShadow={"0 0 15px #464646"}
            width={["100%", "100%", "100%", "100%", "90%"]}
            height={["100%", "100%", "100%", "100%", "90%"]}
            marginTop={["20px", "20px", "20px", "20px", "0px"]}
            borderTopRadius={"15px"}
            borderBottomRadius={["0px", "0px", "0px", "0px", "15px"]}
            color={"white"}
          >
            <Tabs w="100%">
              <TabList>
                <Tab
                  color="#F4BF39"
                  borderColor="#F4BF39"
                  _focus={{
                    color: "#F4BF39",
                    borderBottom: "2px",
                    borderColor: "#F4BF39",
                    borderTopLeftRadius: "15px",
                  }}
                  w="100%"
                >
                  <Heading variant={"dashboard"} color="##F4BF39">
                    Listar Fornecedores
                  </Heading>
                </Tab>
                <Tab
                  color="#F4BF39"
                  borderColor="#F4BF39"
                  _focus={{
                    borderBottom: "2px",
                    color: "#F4BF39",
                    borderColor: "#F4BF39",
                    borderTopRightRadius: "15px",
                  }}
                  w="100%"
                >
                  <Heading variant={"dashboard"} color="##F4BF39">
                    Cadastrar Fornecedor
                  </Heading>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel >
                  <UnorderedList  m="10">
                    {filteredProvidersList?.map((list) => (
                      <ListProviders key={list.id} list={list} />
                    ))}
                  </UnorderedList>
                </TabPanel>
                <TabPanel display={"flex"} justifyContent="center">
                  <Flex
                    bg="#ffff"
                    justify="center"
                    align="center"
                    maxWidth="340px"
                    borderRadius={"20px"}
                  >
                    <FormProviders />
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

export default FornecedoresPage;
