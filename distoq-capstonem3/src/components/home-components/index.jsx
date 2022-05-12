import { useContext } from "react";
import { ShowcaseContext } from "../../Providers/showcase/";
import { CartContext } from "../../Providers/cart";

import {
  Flex,
  Spacer,
  List,
  ListItem,
  UnorderedList,
  Image,
  Text,
  Button,
  Heading,
  Stack,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const CardSC = ({ product }) => {
  const { listProducts } = useContext(ShowcaseContext);
  const { cart, addCart } = useContext(CartContext);
  console.log("cart na Home page", cart);

  return (
    <>
      <Flex mt="79px">
        <List w="227px" h="375px" display="flex" spacing={10}>
          {listProducts.map((product) => (
            <ListItem key={product.id}>
              <Image
                w="227px"
                h="227px"
                src={product.image}
                alt={product.name}
              />
              <Stack spacing={4}>
                <Text fontSize="lg">{product.name}</Text>
                <Text fontSize="md">estrelas:{product.rating}</Text>
                <Text fontSize="lg" noOfLines={2}>
                  {product.description}
                </Text>
                <Text fontSize="lg">R$ {product.price}</Text>
              </Stack>
              <Button
                w="10px"
                variant="primary"
                onClick={() => addCart(product)}
              >
                COMPRAR
              </Button>
            </ListItem>
          ))}
        </List>
      </Flex>
    </>
  );
};

export default CardSC;
