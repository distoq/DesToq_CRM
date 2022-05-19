import { useContext } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";
import { useInputHome } from "../../Providers/SearchHome";

import {
  Flex,
  Image,
  Text,
  Button,
  Stack,
  UnorderedList,
  Wrap,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  ListItem,
  Heading,
  useToast,
} from "@chakra-ui/react";

import { AddIcon, StarIcon } from "@chakra-ui/icons";

const CardSC = () => {
  const { listProducts } = useContext(ShowcaseContext);
  const { addCart } = useContext(CartContext);
  const { inputSearch } = useInputHome();
  const toast = useToast();

  const searchFilter = listProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      product.category.toLowerCase().includes(inputSearch.toLowerCase())
  );

  const addToCart = (id) => {
    addCart(id);
    toast({
      description: "adicionado!",
      status: "success",
      duration: 4000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Flex w="100%" align="center" justify="center">
      <UnorderedList w="80%" maxW="1300px" display="flex" direction={"column"}>
        <Wrap p={'20px'} align="center" justify="center" h="100%">
          {searchFilter.map((product, index) => (
            <ListItem
              _hover={{
                "transform": "scale(1.02)",
                "boxShadow":" 0px 20px 40px rgba(0, 0, 0, 0.25)",
                "border": "solid 1px rgba(0, 0, 0, 0.25)"
                
              }}
              transition= "all ease .5s"
              w="257px"
              h="507px"
              border="1px solid #E5E5E5"
              borderRadius="10px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              key={index}
            >
              <Image
                w="257px"
                h="257px"
                src={product.image}
                alt={product.name}
                borderRadius="10px 10px 0px 0px"
              />
              <Stack spacing={3}>
                <Heading
                  variant={"primary"}
                  fontSize="lg"
                  align="center"
                  pt="15px"
                >
                  {product.name}
                </Heading>
                <Flex pr="15px" justify="flex-end">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < product.rating ? "#de9e36" : "gray.300"}
                      />
                    ))}
                </Flex>

                <Popover placement='top'>
                  <Flex justify="flex-end">
                    <PopoverTrigger>
                      <Button bg="transparent">
                        descrição <AddIcon ml="10px" cursor="pointer" />
                      </Button>
                    </PopoverTrigger>
                  </Flex>
                  <PopoverContent>
                    <PopoverArrow position={"absolute"}/>
                    <PopoverCloseButton/>
                    <PopoverHeader>Descrição:</PopoverHeader>
                    <PopoverBody>{product.description}</PopoverBody>
                  </PopoverContent>
                </Popover>
                <Text fontSize="lg" pl="10px">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: 2,
                  })}
                </Text>
              </Stack>
              <Flex justify="center">
                <Button
                  variant="primary"
                  w="247px"
                  onClick={() => addToCart(product)}
                >
                  COMPRAR
                </Button>
              </Flex>
            </ListItem>
          ))}
        </Wrap>
      </UnorderedList>
    </Flex>
  );
};
export default CardSC;
