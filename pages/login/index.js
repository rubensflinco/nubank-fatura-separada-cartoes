import * as React from 'react';
import * as Mui from '@mui/material';
import * as Icon from '@mui/icons-material';
import TituloPagina from '../../components/titulo-pagina';
import Msg from '../../components/msg';
import { v4 as uuidv4 } from "uuid";



// Função executada quando no servidor sempre que tem uma nova requisição
export async function getServerSideProps(context) {
  try {

    return {
      props: {

      }
    }

  } catch (error) {

    return {
      props: {
        erro: String(error)
      }
    }

  }
}


export default function PagesLogin(props) {

  const [formLoginValues, setFormLoginValues] = React.useState({});
  const [tela, setTela] = React.useState("form");
  const authCode = uuidv4();


  React.useEffect(() => {
    (async () => {


    })()
  }, [])

  function inputChangeSetFormValues(e) {
    const { name, value } = e.target;
    setFormLoginValues({ ...formLoginValues, [name]: value, });
  };

  function submitFormLogin(event) {
    event.preventDefault();
    console.log(formLoginValues);
  };


  return (<>

    <TituloPagina
      nome="Login"
    />

    {(props.carregando) ? (<>
      <Msg icone={(<Mui.CircularProgress color="inherit" thickness={4} size={100} />)} titulo={`Carregando...`} />
    </>) : (<>
      {(props.erro) ? (<>
        <Msg icone={(<Icon.Error fontSize="large" />)} titulo={`Erro`} btnTentarNovamente={true} descricao={props.erro} />
      </>) : (<>

        <Mui.Container justifyContent="center" sx={{ pt: 3 }}>

          <Mui.Typography variant="h3" component="h1" fontWeight="bold" textAlign="center" sx={{ p: 5 }} >Login da sua conta Nu</Mui.Typography>


          {
            (tela === "form") && (
              <form onSubmit={submitFormLogin}>
                <Mui.Typography variant="body1" component="p" sx={{ fontSize: { md: "1rem" } }} >Para utilizar o aplicativo você irá precisar fornece seu CPF e senha da sua conta Nu e depois escanear o qrcode, para que nosso sistema consiga extrair os dados de transações de compras do seu cartão, depois disso você irá conseguir ter informações de valor totais separados por cada cartão físico ou virtual que você tem e com um resumão de valores gastos em cada cartão.</Mui.Typography>

                <Mui.Stack container spacing={2} alignItems="center" justify="center" direction="column" sx={{ mt: 5 }}>
                  <Mui.TextField
                    id="cpf"
                    name="cpf"
                    label="CPF"
                    type="text"
                    value={formLoginValues?.cpf}
                    onChange={inputChangeSetFormValues}
                  />
                  <Mui.TextField
                    id="senha"
                    name="senha"
                    label="Senha"
                    type="password"
                    value={formLoginValues?.senha}
                    onChange={inputChangeSetFormValues}
                  />
                  <Mui.Button variant="contained" color="primary" type="submit">
                    Continuar {`>>`}
                  </Mui.Button>
                </Mui.Stack>
              </form>
            )
          }
          {
            (tela === "qrcode") && (
              <Mui.Grid container spacing={5} alignItems="center" justify="center" direction="row">
                <Mui.Grid item xs={6}>
                  <Mui.Typography variant="body1" component="p">1. Abra o App do Nubank no seu celular vá até configurações</Mui.Typography>
                  <Mui.Typography variant="body1" component="p">2. Selecione "Segurança" e vá para "Acesso no navegador"</Mui.Typography>
                  <Mui.Typography variant="body1" component="p">3. Aponte o celular para a tela do computador e escaneie o QR code.</Mui.Typography>
                </Mui.Grid>

                <Mui.Grid item xs={6}>
                  <center>
                    <img width="60%" src={`https://chart.googleapis.com/chart?cht=qr&chs=280x280&cht=qr&chl=${authCode}`} alt="QrCode de autenticação do Nubank" title="Escaneie esse qrcode pelo app do Nubank no seu celular." />
                    <br />
                    <Mui.Button variant="contained" color="primary">
                      Escaneie continuar {`>>`}
                    </Mui.Button>
                  </center>
                </Mui.Grid>
              </Mui.Grid>
            )
          }


        </Mui.Container>

      </>)
      } </>)}
  </>)
}


