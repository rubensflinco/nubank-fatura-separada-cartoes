import * as React from 'react';
import * as Icon from '@mui/icons-material';
import TituloPagina from '../components/titulo-pagina';
import Msg from '../components/msg';



export default function Pages404(props) {


  React.useEffect(() => {
    (async () => {


    })()
  }, [])



  return (<>

    <TituloPagina
      nome="404"
    />

    <Msg 
    icone={(<Icon.Error fontSize="large" />)} 
    titulo={`404`} 
    descricao={`Pagina não encontrada`} 
    btnInicio={true}
    />

  </>)
}


