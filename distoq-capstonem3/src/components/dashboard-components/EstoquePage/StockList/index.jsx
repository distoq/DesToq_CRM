import { AddIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  Tooltip,
  Badge,
  Flex,
  Heading,
  ListItem,
  Text,
  Stack,
} from "@chakra-ui/react";

export const StockList = ({ list, min  }) => {
    console.log(min)
  const valueStock = +list.purchasePrice * +list.quantity;
  return (
    <>
      <ListItem
        border={"3px solid"}
        background="#ffff"
        borderColor={list.quantity <= min ? "red.500" : null}
        listStyleType="none"
        p="10px"
        m="10px"
        borderRadius={"10px"}
      >
        <Flex
          direction={["column", "column", "row"]}
          align={["center"]}
          justify="space-between"
        >
          <Tooltip label={list.name}>
            <Heading
              maxW="18ch"
              overflow="hidden"
              textOverflow="ellipsis"
              whiteSpace="nowarp"
              textAlign={["center", "", ""]}
              w={["100%", "330px", "3   00px"]}
              variant="dashboard"
            >
              {" "}
              {list.name}
            </Heading>
          </Tooltip>

          <Text w={["", "", "220px"]} variant="bold">
            Fornecedor {list.supplier}
          </Text>
          <Flex direction="column" align={["center"]} justify="center">
            <Text variant="bold">Categoria:</Text>
            <Badge alignSelf="center" variant="solid" colorScheme="purple">
              {list.category}
            </Badge>
          </Flex>
          <Popover>
            <PopoverTrigger>
              <Stack spacing={10}>
                <Button m="10px" colorScheme={"green"}>
                  Mostrar <AddIcon margin="10px" />
                </Button>
              </Stack>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader color="#101010">
                Informações Financeiras
              </PopoverHeader>
              <PopoverBody>
                <Flex direction="column" align={["center"]}>
                  <Text variant="bold">Quantidade:</Text>
                  <Flex>
                    <Badge
                      alignSelf="center"
                      variant="solid"
                      colorScheme="purple"
                    >
                      {" "}
                      {list.quantity}
                    </Badge>
                    <Badge
                      alignSelf="center"
                      variant="solid"
                      colorScheme="purple"
                      ml="5px"
                    >
                      {list.metricUnity}
                    </Badge>
                  </Flex>
                </Flex>
                <Flex direction="column" align={["center"]}>
                  <Text variant="bold">Valor de compra:</Text>
                  <Badge
                    alignSelf="center"
                    variant="solid"
                    colorScheme="purple"
                  >
                    {list.purchasePrice.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    })}
                  </Badge>
                </Flex>
                <Flex direction="column" align={["center"]}>
                  <Text variant="bold">Valor do estoque:</Text>
                  <Badge
                    alignSelf="center"
                    variant="solid"
                    colorScheme="purple"
                  >
                    {valueStock.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                      minimumFractionDigits: 2,
                    })}
                  </Badge>
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </ListItem>
    </>
  );
};
