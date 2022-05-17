import { Avatar, Badge, Flex, Tag, TagLabel, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";

import api from "../../../../dataBase/db";
import { useToken } from "../../../../Providers/Token";

export const RequestList = ({ order }) => {
  const [user, setUser] = useState({});
  const { id, name, price, quantity,image } = order;
  const { token } = useToken();

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    api
      .get(`/users/${order.userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUser(res.data));
  };

  const total = quantity * price;

  return (
    <Flex
      key={id}
      id={id}
      width={"100%"}
      height={"fit-content"}
      borderRadius={"10px"}
      margin={"10px 0"}
      padding={"10px"}
      boxShadow={"0 0 10px #424242"}
      backgroundColor={"#dfdfdf"}
      justifyContent={"space-between"}
      alignItems={"flex-start"}
      flexWrap={["wrap", "wrap", "wrap", "wrap", "wrap"]}
      color={"#000"}
      _hover={{
        boxShadow: "0 0 15px #eeeeee",
        cursor: "pointer",
      }}
    >
      <Flex
        width={"100%"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"22px"}
          backgroundColor={"#fff"}
          borderRadius={"20px"}
          padding={"5px 10px 0px 10px"}
          boxShadow={"0 0 5px #202020"}
        >
          OC: #{id}
        </Text>
      </Flex>

      <Flex
        w="220px"
        flexDirection={"column"}
        justifyContent={"center"}
        margin={"5px"}
      >
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Cliente:
        </Text>
        <Text color="black" fontWeight={"bold"} fontSize={"20px"}>
          {user.name}
        </Text>
        <Tag display="flex" justifyContent={"space-between"} alignItems={"center"} p="2px" size="lg" colorScheme="blackAlpha" borderRadius="full">
          <Avatar
            src={image}
           
            name="Segun Adebayo"
            ml={-1}
            mr={1}
          />
          <TagLabel mr="10px">{name}</TagLabel>
        </Tag>
        <Badge mt="5px" colorScheme={"blackAlpha"} maxW="120px" borderRadius="10px" p="4px" fontWeight={"bold"}>
          Valor:{" "}
          {price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumIntegerDigits: 2,
          })}
        </Badge>
      </Flex>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        margin={"5px"}
      ></Flex>
      <Flex flexDirection={"column"} justifyContent={"center"} margin={"5px"}>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          Qty
        </Text>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          {quantity}
        </Text>
      </Flex>

      <Flex
        w="120px"
        flexDirection={"column"}
        justifyContent={"center"}
        margin={"5px"}
      >
        <Text w="220px" fontWeight={"bold"} fontSize={"20px"}>
          Total
        </Text>
        <Text fontWeight={"bold"} fontSize={"20px"}>
          {total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
            minimumIntegerDigits: 2,
          })}
        </Text>
      </Flex>

      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        margin={"5px"}
      ></Flex>
    </Flex>
  );
};
