import * as Mui from '@mui/material';
import * as Icon from '@mui/icons-material';

export default function Msg(props) {
    return (
        <Mui.Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ height: "65vh", ...props.sx }}
        >
            {props?.icone}
            <Mui.Typography variant="h4" component="h1" fontWeight="bold">{props?.titulo}</Mui.Typography>
            <Mui.Typography variant="subtitle1" component="p">{props?.descricao}</Mui.Typography>
            {props?.children}


            {(props.btnTentarNovamente) && (
                <Mui.Button variant="outlined" startIcon={<Icon.Cached />} onClick={() => { window.location.reload(); }}>
                    Tentar novamente!
                </Mui.Button>
            )}

            {(props.btnInicio) && (
                <Mui.Button variant="outlined" startIcon={<Icon.Home />} onClick={() => { window.location.href = "/" }}>
                    Voltar ao Inicio
                </Mui.Button>
            )}
        </Mui.Stack>
    )
}