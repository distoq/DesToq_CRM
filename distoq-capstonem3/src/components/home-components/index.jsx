import { useContext } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";

import {
  Flex,
  Image,
  Text,
  Button,
  Stack,
  UnorderedList,
  Box,
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
import { AddIcon, DeleteIcon, StarIcon } from "@chakra-ui/icons";
import { useInputHome } from "../../Providers/SearchHome";

const CardSC = () => {
  const { listProducts } = useContext(ShowcaseContext);
  const { cart, addCart } = useContext(CartContext);
  const { inputSearch, addInputSearch } = useInputHome();
  const searchFilter = listProducts.filter(
    (product) =>
      product.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
      product.category.toLowerCase().includes(inputSearch.toLowerCase())
  );
  const toast = useToast();
  const addToCart = (id) => {
    addCart(id);
    toast({
      description: "Produto Adicionado com Sucesso",
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <Flex w="100%" align="center" justify="center">
      <UnorderedList w="80%" maxW="1300px" display="flex" direction={"column"}>
        <Wrap align="center" justify="center" h="100%" maxH={"1440px"}>
          {searchFilter.map((product) => (
            <ListItem
              width="257px"
              h="507px"
              border="1px solid #E5E5E5"
              borderRadius="10px"
              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              key={product.id}
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

                <Popover>
                  <Flex justify="flex-end">
                    <PopoverTrigger>
                      <Button bg="transparent">
                        Descrição <AddIcon ml="10px" cursor="pointer" />{" "}
                      </Button>
                    </PopoverTrigger>
                  </Flex>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Descrição</PopoverHeader>
                    <PopoverBody>{product.description}</PopoverBody>
                  </PopoverContent>
                </Popover>
                <Text fontSize="lg" pl="10px">
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
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
