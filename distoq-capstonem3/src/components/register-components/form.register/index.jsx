import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Select,
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
    adress: yup.string().required("Campo obrigatório"),
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
    adress,
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
      adressInfo: {
        cep,
        adress,
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
        const adress = response.data;
        setValue("adress", adress.logradouro);
        setValue("city", adress.localidade);
        setValue("state", adress.uf);
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
                margin: "0",
              },
            }}
          >
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              variant="outline"
              id="name"
              type="text"
              placeholder="Digite seu nome"
              {...register("name")}
            />
            {errors && (
              <FormHelperText color="red" m="1px">
                {errors.name?.message}
              </FormHelperText>
            )}
            <FormLabel htmlFor="email">Email </FormLabel>
            <Input
              variant="outline"
              id="email"
              type="text"
              placeholder="Digite seu email"
              {...register("email")}
            />
            {errors && (
              <FormHelperText color="red" m="1px">
                {errors.email?.message}
              </FormHelperText>
            )}
            <FormLabel htmlFor="confirmEmail">Confirmar Email </FormLabel>

            <Input
              variant="outline"
              id="confirmEmail"
              type="text"
              placeholder="Confirme seu email"
              {...register("confirmEmail")}
            />
            {errors && (
              <FormHelperText color="red" m="1px">
                {errors.confirmEmail?.message}
              </FormHelperText>
            )}
            <Flex>
              <Flex direction="column" w="100%">
                <FormLabel htmlFor="adress">Seu endereço</FormLabel>
                <Input
                  variant="outline"
                  id="adress"
                  type="text"
                  placeholder="Digite seu endereço"
                  {...register("adress")}
                />
                {errors && (
                  <FormHelperText color="red" m="1px">
                    {errors.adress?.message}
                  </FormHelperText>
                )}
              </Flex>
              <Flex direction="column" w="50%" ml="1%" wrap="nowrap">
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
                  <FormHelperText color="red" m="1px">
                    {errors.number?.message}
                  </FormHelperText>
                )}
              </Flex>
            </Flex>
            <Flex>
              <Flex direction="column" sx={{ input: { w: "98%" } }}>
                <FormLabel htmlFor="state">Estado</FormLabel>
                <Input
                  variant="outline"
                  id="state"
                  type="text"
                  placeholder="Digite o Estado"
                  {...register("state")}
                />
                {errors && (
                  <FormHelperText color="red" m="1px">
                    {errors.state?.message}
                  </FormHelperText>
                )}
              </Flex>
              <Flex direction="column">
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
                  <FormHelperText color="red" m="1px">
                    {errors.CEP?.message}
                  </FormHelperText>
                )}
              </Flex>
            </Flex>
            <FormLabel htmlFor="city">Cidade</FormLabel>
            <Input
              variant="outline"
              id="city"
              type="text"
              placeholder="Digite a cidade"
              {...register("city")}
            />
            {errors && (
              <FormHelperText color="red" m="1px">
                {errors.city?.message}
              </FormHelperText>
            )}
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              variant="outline"
              id="password"
              type="password"
              placeholder="Digite sua senha"
              {...register("password")}
            />
            {errors && (
              <FormHelperText color="red" m="1px">
                {errors.password?.message}
              </FormHelperText>
            )}
            <FormLabel htmlFor="confirmPassword">Confirme sua senha</FormLabel>
            <Input
              variant="outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirme sua senha"
              {...register("confirmPassword")}
            />
            {errors && (
              <FormHelperText color="red" m="1px">
                {errors.confirmPassword?.message}
              </FormHelperText>
            )}
            <FormLabel htmlFor="profile">Selecione o tipo de perfil:</FormLabel>
            <Select placeholder="Escolha o perfil" {...register("profile")}>
              <option value="admin">Administrador</option>
              <option value="user">Usuário</option>
            </Select>
            {errors && (
              <FormHelperText color="red" m="1px">
                {errors.profile?.message}
              </FormHelperText>
            )}

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
