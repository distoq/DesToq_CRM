import {
  Box,
  Flex,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from "recharts";
import api from "../../../../dataBase/db";

export const CardChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    api.get(`/stock`).then((res) => {
      // console.log(res.data[0].totalValue);
      setChartData(res.data);
    });
  }, []);

  // console.log(chartData[0].totalValue)

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

  // const data = chartData.map((info, key) => {

  //   <>
  //     [
  //       {
  //         name: info.totalValue
  //       }

  //     ]
  //   </>
    
  // })

  const data = [
    {
      name: 'Janeiro',
      uv: chartData[0].totalValue,
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
    <>
      <Flex
        w={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
      >
        <Stack
          spacing={3}
          width="100%"
          maxWidth={"95%"}
          height={"100%"}
          display="flex"
          flexDir={"row"}
          alignItems="center"
          flexWrap={"wrap"}
          padding={"0 30px"}
          borderRadius={"10px"}
        >
          <Heading mt={"30px"} color={"#f5f5f5"} textAlign={"center"} width={"100%"}> Faturamento Mensal </Heading>
          <Flex width={"100%"} justify={"space-around"} flexWrap={"wrap"} >
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
          <Heading color={"#f5f5f5"} textAlign={"center"} width={"100%"}> Faturamento Trimestral </Heading>
          <Flex width={"100%"} justify={"space-around"} flexWrap={"wrap"}>
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
          <Heading color={"#f5f5f5"} textAlign={"center"} width={"100%"}> Faturamento Anual </Heading>
          <Flex width={"100%"} justify={"space-around"} flexWrap={"wrap"}>
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
    </>
    
  );
};

