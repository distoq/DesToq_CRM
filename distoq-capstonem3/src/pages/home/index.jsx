import { Flex } from "@chakra-ui/react";
import { useContext, } from "react";
import { Navigate } from "react-router-dom";

import { HeaderHome } from "../../components/home-components/HeaderHome";
import Search from "../../components/home-components/HeaderHome/SearchHome";
import { TokenContext } from "../../Providers/Token";

const Home = () => {
  const { token } = useContext(TokenContext);

 

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Flex direction="column" justify="center" align="center">
        <HeaderHome />
        <Search />
      </Flex>
    </>
  );
};

export default Home;
