import { Flex } from "@chakra-ui/react";


import { HeaderHome } from "../../components/home-components/HeaderHome";
import Search from "../../components/home-components/HeaderHome/SearchHome";
import { useIslogged } from "../../Providers/isLogged";


const Home = () => {
  const { isLogged } = useIslogged();

  console.log(isLogged)
  if(isLogged){
    
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
