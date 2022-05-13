import {  Button, Flex, Image } from "@chakra-ui/react";

import { BsBoxArrowInRight } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DEStoq from "../../../assets/imgs/DEStoq.svg";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "react-jwt";

const HeaderHome = () => {
  const tokenUser = JSON.parse(localStorage.getItem("@DEStoq:token")) || ""
  const decodedToken = decodeToken(tokenUser)
  const navigate = useNavigate()

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
          <Flex>
            <Button
             disabled={decodedToken.sub !== "1"}
              bg="transparent"
              _hover={{ bg: "transparent" }}
              onClick={() => navigate("/dashboard")}
            >
              <RiAdminFill fontSize={35} color="#ffff" />
            </Button>
            <Button bg="transparent" _hover={{ bg: "transparent" }}>
              <AiOutlineShoppingCart fontSize={35} color="#ffff" />
            </Button>
            <Button bg="transparent" _hover={{ bg: "transparent" }}>
              <BsBoxArrowInRight color="white" fontSize={35} />
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export { HeaderHome };
