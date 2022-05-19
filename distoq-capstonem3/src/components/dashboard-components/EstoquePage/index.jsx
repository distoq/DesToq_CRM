import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  UnorderedList,
  useRadio,
  useRadioGroup,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useActivePage } from "../../../Providers/DashboardPageController";
import { useStockList } from "../../../Providers/Stock";
import { StockList } from "./StockList";

export const EstoquePage = () => {
  const [minValue, setMinValue] = useState(
    JSON.parse(localStorage.getItem("@DEStoq:minStock")) || { min: 0 }
  );
  const { activeDashboardPage, setActiveDashboardPage, handleIcons, options } =
    useActivePage();
  const { stockList, getListStock } = useStockList();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "menuOptions",
    defaultValue: activeDashboardPage,
    onChange: setActiveDashboardPage,
  });

  useEffect(() => {
    getListStock();
  }, []);

  const group = getRootProps();
  const formSchema = yup.object().shape({
    min: yup
      .number("Deve ser um número.")
      .nullable(true)
      .typeError("Campo obrigatório")
      .required("Campo obrigatório.")
      .positive("Deve ser um número positivo."),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const handleSubmitForm = (data) => {
    localStorage.setItem("@DEStoq:minStock", JSON.stringify(data)) ||
      setMinValue(data);
  };

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
          borderRadius="md"
          fontWeight="bold"
          fontSize="26px"
          color="white"
          alignItems="center"
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
        <Flex
          width={"100%"}
          height={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex
            backgroundColor={"#aeaeae4e"}
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
                  color="#101010"
                  _selected={{
                    color: "#FFFF",
                    borderBottomColor: "#14213d",
                    background: "#14213d",
                    borderBottomWidth: "2px",
                  }}
                  _focus={{
                    color: "#FFFF",

                    borderTopLeftRadius: "18px",
                    borderTopRightRadius: "18px",
                    border: "2px solid #14213d",
                  }}
                  w="100%"
                >
                  <Heading variant={"dashboard"} color="##F4BF39">
                    Estoque Mínimo
                  </Heading>
                </Tab>
                <Tab
                  color="#101010"
                  _selected={{
                    color: "#FFFF",
                    borderBottomColor: "#14213d",
                    background: "#14213d",
                    borderBottomWidth: "2px",
                  }}
                  _focus={{
                    color: "#FFFF",

                    borderTopLeftRadius: "18px",
                    borderTopRightRadius: "18px",
                    border: "2px solid #14213d",
                  }}
                  w="100%"
                >
                  <Heading variant={"dashboard"} color="##F4BF39">
                    Estoque Mínimo
                  </Heading>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <UnorderedList m="0">
                    {stockList?.map((stockItem) => (
                      <StockList key={stockItem.id} list={stockItem} />
                    ))}
                  </UnorderedList>
                </TabPanel>
                <TabPanel>
                  <Flex
                    mr="10px"
                    direction="column"
                    justify={"center"}
                    align="flex-end"
                  >
                    <Flex justify={"flex-start"}>
                      <FormLabel color="#101010">
                        Defina o estoque mínimo
                      </FormLabel>
                      {errors.min && (
                        <Text color="red.500">{errors.min.message}</Text>
                      )}
                    </Flex>

                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                      <FormControl>
                        <Input
                          borderColor={" #101010"}
                          color="#101010"
                          type="number"
                          maxW="120px"
                          placeholder="Qtd Mínima"
                          _placeholder={{ color: "#434343" }}
                          errorBorderColor={errors.min && "red.300"}
                          {...register("min")}
                        />
                        <Button type="submit" ml="10px" colorScheme={"green"}>
                          ALTERAR
                        </Button>
                      </FormControl>
                    </form>
                  </Flex>

                  <UnorderedList m="0">
                    {stockList?.map((stockItem) => (
                      <StockList
                        key={stockItem.id}
                        list={stockItem}
                        min={minValue.min}
                      />
                    ))}
                  </UnorderedList>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default EstoquePage;
