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
  useToast,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";


const FormRegister = () => {
  const history = useNavigate();
  const toast = useToast()
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("E-mail inválido"),
    confirmEmail: yup
      .string()
      .required("Campo obrigatório")
      .email("E-mail inválido")
      .oneOf([yup.ref("email")], "As senhas estão diferentes"),
    address: yup.string().required("Campo obrigatório"),
    number: yup
      .string()
      .required("Campo obrigatório")
      .max(8, "Máximo de 8 caracteres"),
    state: yup.string().required("Campo obrigatório"),
    cep: yup.string().required("Campo obrigatório"),
    city: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        "Senha deve conter ao menos 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial"
      ),
    confirmPassword: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "As senhas estão diferentes"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const Register = ({
    name,
    email,
    password,
    address,
    city,
    state,
    number,
    cep,
  }) => {
    console.log("oi");
    const user = {
      name,
      email,
      password,
      addressInfo: {
        cep,
        address,
        city,
        state,
        number,
      },
    };

    api
      .post("/register", user)
      .then((_) => toast({
        description: "Registrado!",
        status: "success",
        duration: 4000,
        isClosable: true,
        position: "top",
      }))
      .catch((_) => toast({
        description: "Registrado!",
        status: "error",
        duration: 4000,
        isClosable: true,
        position: "top",
      }));
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
      .catch((_) => toast.error("CEP inválido"));
  };

  return (
    <Flex maxW="400px" justify="center" align="center">
      <form onSubmit={handleSubmit(Register)}>
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
                margin: "0 2px 2px 0",
              },
            }}
          >
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="name">Nome </FormLabel>
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
              placeholder="digite seu nome"
              {...register("name")}
            />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="email">E-mail </FormLabel>
              {errors && (
                <FormHelperText color="red" m="0px">
                  {errors.email?.message}
                </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="email"
              type="text"
              placeholder="digite seu e-mail"
              {...register("email")}
            />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="confirmEmail">Confirme seu e-mail </FormLabel>
              {errors && (
                <FormHelperText color="red" m="0px">
                  {errors.confirmEmail?.message}
                </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="confirmEmail"
              type="text"
              placeholder="confirme seu e-mail"
              {...register("confirmEmail")}
            />
            <Flex>
              <Flex mt="10px" direction="column">
                <FormLabel htmlFor="cep">CEP </FormLabel>
                <Input
                  variant="outline"
                  id="cep"
                  type="text"
                  placeholder="número do CEP"
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
                <FormLabel htmlFor="state">Estado </FormLabel>
                <Input
                  ml="3px"
                  variant="outline"
                  id="state"
                  type="text"
                  placeholder="digite o estado"
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
                <FormLabel htmlFor="address">Endereço </FormLabel>
                <Input
                  variant="outline"
                  id="address"
                  type="text"
                  placeholder="digite seu endereço"
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
                  placeholder="nº"
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
              <FormLabel htmlFor="city">Cidade </FormLabel>
              {errors && (
                <FormHelperText color="red" m="0px">
                  {errors.city?.message}
                </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="city"
              type="text"
              placeholder="digite a cidade"
              {...register("city")}
            />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="password">Senha </FormLabel>
              {errors && (
                <FormHelperText color="red" m="0px">
                  {errors.password?.message}
                </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="password"
              type="password"
              placeholder="digite sua senha"
              {...register("password")}
            />
            <Flex mt="10px" justify="space-between">
              <FormLabel htmlFor="confirmPasswprd">
                Confirme sua senha
              </FormLabel>
              {errors && (
                <FormHelperText color="red" m="0px">
                  {errors.confirmPassword?.message}
                </FormHelperText>
              )}
            </Flex>
            <Input
              variant="outline"
              id="confirmPassword"
              type="password"
              placeholder="repita sua senha"
              {...register("confirmPassword")}
            />
            <Button variant="primary" w="100%" mr="0" ml="0" type="submit">
              CADASTRAR
            </Button>
            <Text>
              Já possui cadastro?
              <Link onClick={() => history("/login")}> clique aqui </Link>
            </Text>
          </FormControl>
        </Box>
      </form>
    </Flex>
  );
};

export default FormRegister;
