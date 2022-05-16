import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
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
  VStack,
} from "@chakra-ui/react";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { motion } from "framer-motion";

import { GoSearch } from "react-icons/go";

import { useActivePage } from "../../../Providers/DashboardPageController";

export const FinanceiroPage = () => {
  const { activeDashboardPage, setActiveDashboardPage, handleIcons, options } =
    useActivePage();


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

  const faturamento = [
    {name: 'Mar', uv: 150, pv: 2400, amt: 2400},
    {name: 'Abr', uv: 200, pv: 2400, amt: 2400},
    {name: 'Mai', uv: 350, pv: 2400, amt: 2400},

  ];
  const vendas = [
    {name: 'Page A', uv: 150, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 200, pv: 2400, amt: 2400},
    {name: 'Page C', uv: 350, pv: 2400, amt: 2400},

  ];
  const data = [
    {
      name: 'Janeiro',
      uv: 590,
      pv: 800,
      amt: 1400,
    },
    {
      name: 'Fevereiro',
      uv: 868,
      pv: 967,
      amt: 1506,
    },
    {
      name: 'Março',
      uv: 1397,
      pv: 1098,
      amt: 989,
    },
    {
      name: 'Abril',
      uv: 1480,
      pv: 1200,
      amt: 1228,
    },
    {
      name: 'Maio',
      uv: 1520,
      pv: 1108,
      amt: 1100,
    },
    {
      name: 'Junho',
      uv: 1400,
      pv: 680,
      amt: 1700,
    },
  ];
  return (
    //FULL CONTAINER
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      transition={{duration:1}}
    >
    
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
          Financeiro 
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
            m={"20px"}
            justifyContent={"space-around"}
            flexWrap={"wrap"}
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
                  Resumo
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
                  Gráficos
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
                  flexDir={"column"}
                  justifyContent={"center"}
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
                  Teste
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
                  {/* <ComposedChart
                    width={350}
                    height={350}
                    data={data}
                    margin={{
                      top: 30,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                  <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                  </ComposedChart>
                  <ComposedChart
                    width={350}
                    height={350}
                    data={data}
                    margin={{
                      top: 30,
                      right: 20,
                      bottom: 20,
                      left: 20,
                    }}
                  >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                  </ComposedChart> */}
                  <Flex
                    w={"100%"}
                    // maxWidth={"700px"}
                    height={"100%"}
                    justifyContent={"space-around"}
                    flexWrap={"wrap"}
                  >
                    {/* <Stack
                      spacing={3}
                      width="400px"
                      maxWidth={"90%"}
                      height={"100%"}
                      display="flex"
                      flexDir={"column"}
                      alignItems="center"
                      justifyContent={"center"}
                      padding={"0 30px"}
                      // backgroundColor={"#fff"}
                      borderRadius={"10px"}
                      boxShadow="0 0 10px grey"
                      color={"black"}
                    >
                      <Heading> Teste </Heading>
                       <ComposedChart
                        width={350}
                        height={350}
                        data={data}
                        margin={{
                          top: 30,
                          right: 20,
                          bottom: 20,
                          left: 20,
                        }}
                      >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                      </ComposedChart> 
                    </Stack> */}
                    <Stack
                      spacing={3}
                      width="100%"
                      maxWidth={"90%"}
                      height={"100%"}
                      display="flex"
                      flexDir={"column"}
                      alignItems="center"
                      justifyContent={"center"}
                      padding={"0 30px"}
                      // backgroundColor={"#fff"}
                      borderRadius={"10px"}
                      boxShadow="0 0 10px grey"
                      color={"black"}
                    >
                      <Heading mt={"10px"} color={"#fff"}> Resultado Mensal </Heading>
                      <Flex>
                        <ComposedChart
                          width={350}
                          height={350}
                          data={data}
                          margin={{
                            top: 30,
                            right: 20,
                            bottom: 20,
                            left: 20,
                          }}
                        >
                          <CartesianGrid stroke="#f5f5f5" />
                          <XAxis dataKey="name" scale="band" />
                          <YAxis />
                          <Tooltip/>
                          <Legend/>
                          <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart> 
                        <ComposedChart
                          width={350}
                          height={350}
                          data={data}
                          margin={{
                            top: 30,
                            right: 20,
                            bottom: 20,
                            left: 20,
                          }}
                        >
                          <CartesianGrid stroke="#f5f5f5" />
                          <XAxis dataKey="name" scale="band" />
                          <YAxis />
                          <Tooltip/>
                          <Legend/>
                          <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart> 
                      </Flex>
                      <Heading mt={"10px"} color={"#fff"}> Resultado Trimestral </Heading>
                      <Flex justify={"space-between"}>
                        <ComposedChart
                          width={350}
                          height={350}
                          data={data}
                          margin={{
                            top: 30,
                            right: 20,
                            bottom: 20,
                            left: 20,
                          }}
                        >
                          <CartesianGrid stroke="#f5f5f5" />
                          <XAxis dataKey="name" scale="band" />
                          <YAxis />
                          <Tooltip/>
                          <Legend/>
                          <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart> 
                        <ComposedChart
                          width={350}
                          height={350}
                          data={data}
                          margin={{
                            top: 30,
                            right: 20,
                            bottom: 20,
                            left: 20,
                          }}
                        >
                          <CartesianGrid stroke="#f5f5f5" />
                          <XAxis dataKey="name" scale="band" />
                          <YAxis />
                          <Tooltip/>
                          <Legend/>
                          <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                          <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                        </ComposedChart> 
                        
                      </Flex>
                      
                    </Stack>
                    
                  </Flex>
                </TabPanel>
              </TabPanels>
            </Tabs>

            {/* <Flex flexDirection={"column"} flex="wrap" width={"100%"} height={"100%"} justifyContent={"center"}>
              <Box>
                <Text color={"#ccc"} textAlign={"center"}>
                  Faturamento Bruto
                </Text>
                <LineChart width={600} height={300} data={faturamento}>
                  <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                  <CartesianGrid stroke="#ccc" />
                  <XAxis dataKey="name" />
                  <YAxis />
                </LineChart>
              </Box>
              <Text color={"#ccc"} textAlign={"center"}>
                  Vendas Trimestral
                </Text>
              <LineChart width={600} height={300} data={vendas} margin={{ top: 55, right: 200, bottom: 5, left: 0 }}>
                <Line type="monotone" dataKey="uv" stroke="#c02410c7" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name" />
                <YAxis />
              </LineChart>
            </Flex> */}

          
            {/* <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={faturamento}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer> */}

            {/* <ResponsiveContainer width="40%" height="50%">
              
            </ResponsiveContainer> */}
            {/* <ResponsiveContainer width="40%" height="50%">
              
            </ResponsiveContainer> */}
            {/* <ResponsiveContainer width="40%" height="50%">
              
            </ResponsiveContainer> */}
            {/* <ResponsiveContainer width="40%" height="50%">
              
            </ResponsiveContainer> */}
            {/* <Flex 
              flexWrap={"wrap"}
              justifyContent={"space-around"}

            >
              <ComposedChart
                width={350}
                height={350}
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>


              <ComposedChart
                width={350}
                height={350}
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>

              <ComposedChart
                width={350}
                height={350}
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>

              <ComposedChart
                width={350}
                height={350}
                data={data}
                margin={{
                  top: 30,
                  right: 20,
                  bottom: 20,
                  left: 20,
                }}
              >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name" scale="band" />
                <YAxis />
                <Tooltip/>
                <Legend/>
                <Bar dataKey="uv" barSize={20} fill="#F4BF39" />
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
              </ComposedChart>
            </Flex> */}
          
          </Flex>
        </Flex>
      </Flex>
    </Flex>
    </motion.div>
  );
};
export default FinanceiroPage;
