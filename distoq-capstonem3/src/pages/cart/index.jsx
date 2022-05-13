import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../Providers/cart";

import {
  Flex,
  Box,
  List,
  ListItem,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

// Heading, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,
// useDisclosure,

// const BasicUsage = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   return (
//     <>
//       <Button onClick={onOpen}>CARRINHO</Button>

//       <Modal isOpen={isOpen} onClose={onClose}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Modal Title</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Lorem count={2} />
//           </ModalBody>

//           <ModalFooter>
//             <Button colorScheme='black' mr={3} onClick={onClose}>
//               Close
//             </Button>
//             <Button variant='ghost'>Secondary Action</Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </>
//   )
// }

const Cart = () => {
  const navigate = useNavigate();
  const { cart, deleteCart } = useContext(CartContext);
  console.log("produtos no Cart page", cart);

  const sum = cart.reduce((previous, current) => {
    return previous + Number(current.price);
  }, 0);

  return (
    <Flex justify="center">
      <Box>
        <Box
          backgroundColor="black"
          w="500px"
          h="60px"
          mb="15px"
          borderRadius="10px 10px 0px 0px"
        >
          <Text color="white" align="center" size="38px">
            carrinho
          </Text>
        </Box>
        <Flex direction="column">
          <List display="flex" direction="column" align="center">
            {cart.map((product, index) => (
              <ListItem
                key={index}
                display="flex"
                align="center"
                justify="space-around"
                width="370px"
                h="65px"
                m="10px"
                border="1px solid black"
                borderRadius="10px"
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
              >
                <Image
                  w="57px"
                  h="57px"
                  borderRadius="10px"
                  src={product.image}
                  alt={product.name}
                />
                <Text>{product.name}</Text>
                <Text>R$ {product.price}</Text>
                <Button onClick={() => deleteCart(product.id)}>X</Button>
              </ListItem>
            ))}
          </List>
        </Flex>
        <Box
          display="flex"
          justify="space-around"
          w="370px"
          mt="30px"
          backgroundColor="#434343"
        >
          <Text>Total:</Text>
          <Text>R$ {sum.toFixed(2)}</Text>
        </Box>
        <Button variant="primary" w="350px" onClick={() => navigate("/")}>
          finalizar compra
        </Button>
        {/* <Button className="btnBuying" onClick={() => navigate("/home")}>
          continuar comprando
        </Button> */}
      </Box>
    </Flex>
  );
};

export default Cart;
