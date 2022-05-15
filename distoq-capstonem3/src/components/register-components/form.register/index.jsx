import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Box,
  FormHelperText,
  Text,
  Link,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormRegister = () => {
  const history = useNavigate();
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    confirmEmail: yup
      .string()
      .required("Campo obrigatório")
      .email("Email inválido")
      .oneOf([yup.ref("email")], "Senhas não conferem"),
    address: yup.string().required("Campo obrigatório"),
    number: yup
      .string()
      .required("Campo obrigatório")
      .max(8, "Máximo 8 caracteres"),
    state: yup.string().required("Campo obrigatório"),
    cep: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Senha deve conter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractére especial"
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senhas não conferem"),
    profile: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onRegister = ({
    name,
    email,
    password,
    profile,
    address,
    city,
    state,
    number,
    cep,
  }) => {
    const user = {
      name,
      email,
      password,
      profile,
      addressInfo: {
        cep,
        address,
        city,
        state,
        number,
      },
    };
    axios
      .post("https://destoq.herokuapp.com/register", user)
      .then((_) => console.log("success"))
      .catch((_) => console.log("error"));
  };

  const cepSearch = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const address = response.data;
        setValue("address", address.logradouro);
        setValue("city", address.localidade);
        setValue("state", address.uf);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Flex maxW="400px" justify="center" align="center">
      <form onSubmit={handleSubmit(onRegister)}>
        <Box p="15px">
          <FormControl
            sx={{
              input: {
                borderColor: "black",
                color: "black",
                _placeholder: {
                  color: "#716C6C",
                },
              },
              select: {
                borderColor: "black",
                color: "black",
                _placeholder: {
                  color: "#716C6C",
                },
              },
              label: {
                margin: "0 2px 2px 0"
              }
            }}
          >
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="name">Name</FormLabel>
              {errors && (
              <FormHelperText color="red" m="0px">
                {errors.name?.message}
              </FormHelperText>
            )}
            </Flex>
            <Input
              variant="outline"
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
              />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="name">Email</FormLabel>
              {errors && (
              <FormHelperText color="red" m="0px">
                {errors.name?.message}
              </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="email"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="name">Confirme seu email</FormLabel>
              {errors && (
              <FormHelperText color="red" m="0px">
                {errors.name?.message}
              </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="confirmEmail"
              type="text"
              placeholder="Confirme seu email"
              {...register("confirmEmail")}
            />
            <Flex>
            <Flex mt="10px" direction="column">
                <FormLabel htmlFor="cep">CEP</FormLabel>
                <Input
                  variant="outline"
                  id="cep"
                  type="text"
                  placeholder="Confirme o CEP"
                  {...register("cep")}
                  onBlur={cepSearch}
                />
                {errors && (
                  <FormHelperText color="red" m="0px">
                    {errors.CEP?.message}
                  </FormHelperText>
                )}
              </Flex>
              <Flex mt="10px" direction="column" sx={{ input: { w: "98%" } }}>
                <FormLabel htmlFor="state">Estado</FormLabel>
                <Input
                  ml="3px"
                  variant="outline"
                  id="state"
                  type="text"
                  placeholder="Digite o Estado"
                  {...register("state")}
                />
                {errors && (
                  <FormHelperText color="red" m="0px">
                    {errors.state?.message}
                  </FormHelperText>
                )}
              </Flex>
            </Flex>
            <Flex>
              <Flex mt="10px" direction="column" w="100%">
                <FormLabel htmlFor="address">Seu endereço</FormLabel>
                <Input
                  variant="outline"
                  id="address"
                  type="text"
                  placeholder="Digite seu endereço"
                  {...register("address")}
                />
                {errors && (
                  <FormHelperText color="red" m="0px">
                    {errors.address?.message}
                  </FormHelperText>
                )}
              </Flex>
              <Flex mt="10px" direction="column" w="50%" ml="1%" wrap="nowrap">
                <FormLabel htmlFor="number" wrap="nowrap">
                  Número
                </FormLabel>
                <Input
                  variant="outline"
                  id="number"
                  type="text"
                  placeholder="N"
                  {...register("number")}
                />
                {errors && (
                  <FormHelperText color="red" m="0px">
                    {errors.number?.message}
                  </FormHelperText>
                )}
              </Flex>
            </Flex>
            
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="name">Digite a cidade</FormLabel>
              {errors && (
              <FormHelperText color="red" m="0px">
                {errors.name?.message}
              </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="city"
              type="text"
              placeholder="Digite a cidade"
              {...register("city")}
            />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="name">Senha</FormLabel>
              {errors && (
              <FormHelperText color="red" m="0px">
                {errors.name?.message}
              </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="name">Confirme sua senha</FormLabel>
              {errors && (
              <FormHelperText color="red" m="0px">
                {errors.name?.message}
              </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            <Button variant="primary" w="100%" mr="0" ml="0" type="submit">
              CADASTRAR
            </Button>
            <Text>
              Já possui cadastro?{" "}
              <Link onClick={() => history("/")}>clique aqui</Link>
            </Text>
          </FormControl>
        </Box>
      </form>
    </Flex>
  );
};

export default FormRegister;