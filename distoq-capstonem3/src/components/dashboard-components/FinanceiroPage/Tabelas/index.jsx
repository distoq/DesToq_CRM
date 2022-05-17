import { Flex, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

export const CardTable = () => {

  return (
    <>
      <Flex 
        w={"100%"}
        height={"100%"}
        justifyContent={"space-around"}
        flexWrap={"wrap"}
      >
        <TableContainer>
          <Table variant={"striped"} size='lg' colorScheme={"facebook"} >
            <Thead>
              <Tr>
                <Th color={"#ccc"}>Tipo</Th>
                <Th color={"#ccc"}>Prazo</Th>
                <Th color={"#ccc"} isNumeric>Valor</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td color={"#111"}>Vendas</Td>
                <Td color={"#111"}>millimetres (mm)</Td>
                <Td color={"#111"} isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td>Compras</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td color={"#111"}>Gastos</Td>
                <Td color={"#111"}>metres (m)</Td>
                <Td color={"#111"} isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td>À pagar</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td color={"#111"}>yards</Td>
                <Td color={"#111"}>metres (m)</Td>
                <Td color={"#111"} isNumeric>0.91444</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td color={"#111"}>yards</Td>
                <Td color={"#111"}>metres (m)</Td>
                <Td color={"#111"} isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td color={"#111"}>yards</Td>
                <Td color={"#111"}>metres (m)</Td>
                <Td color={"#111"} isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td color={"#111"}>yards</Td>
                <Td color={"#111"}>metres (m)</Td>
                <Td color={"#111"} isNumeric>R$ 2500</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td color={"#111"}>yards</Td>
                <Td color={"#111"}>metres (m)</Td>
                <Td color={"#111"} isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      
    </>
  )
}