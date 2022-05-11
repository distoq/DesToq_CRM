import {

  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

const FormLogin = () => {
  return (
    <>
      <Flex
        w="100%"
        maxW="400px"
        direction="column"
        justify="center"
        align="center"
      >
          <Heading mb="100px" variant="primary" as="h1" position="relative">
        Faça seu login aqui !
      </Heading>
        <form  action="">
          <FormControl
          display="flex"
          flexDirection="column"
          align="center"
            sx={{
              label: {
                margin:"0 10px",
                 
              },
              input: {
                borderColor: "black",
                color: "white",
                width: "100%",
                maxW:"300px",
                margin:"auto",
                _placeholder: {
                  color: "black",
                  borderColor: "black",
                },
              },
            }}
          >
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input
              variant="outline"
              id="email"
              type="email"
              placeholder="Digite seu email"
            />
            <FormLabel htmlFor="email">Senha </FormLabel>
            <Input
              variant="outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
            />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          
          <Button variant="primary">LOGIN</Button>
        </form>
      </Flex>
    </>
  );
};

export default FormLogin;
