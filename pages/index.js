import * as React from 'react';
import * as Mui from '@mui/material';
import * as Icon from '@mui/icons-material';
import TituloPagina from '../components/titulo-pagina';
import Msg from '../components/msg';
import Image from 'next/image';
import Link from 'next/link';





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


export default function PagesInicio(props) {


  React.useEffect(() => {
    (async () => {


    })()
  }, [])



  return (<>

    <TituloPagina
      nome="Inicio"
    />

    {(props.carregando) ? (<>
      <Msg icone={(<Mui.CircularProgress color="inherit" thickness={4} size={100} />)} titulo={`Carregando...`} />
    </>) : (<>
      {(props.erro) ? (<>
        <Msg icone={(<Icon.Error fontSize="large" />)} titulo={`Erro`} btnTentarNovamente={true} descricao={props.erro} />
      </>) : (<>

        <Mui.Container justifyContent="center" sx={{ pt: 3 }}>

          <Mui.Typography variant="h3" component="h1" fontWeight="bold" textAlign="center" sx={{ p: 5 }} >Seja um FullCycle Developer </Mui.Typography>
          <Mui.Typography variant="body1" component="p" sx={{ fontSize: { md: "1rem" } }} >Nossa formação completa vai te preparar para uma das carreiras mais promissoras do mercado. Aprenda todo o ciclo de desenvolvimento e ocupe qualquer área de tecnologia! 100% gratuito ;)</Mui.Typography>


        </Mui.Container>

      </>)
      } </>)}
  </>)
}


