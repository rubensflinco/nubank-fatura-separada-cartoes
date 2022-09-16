import * as React from 'react';
import * as Mui from '@mui/material';
import Head from 'next/head';


export default function TituloPagina(props) {
    return (<>
        {
            props.nome && (
                <Head>
                    <title>{props?.nome} - {process.env.NEXT_PUBLIC_TITULO_SITE || `NuDash by Rubens Flinco`}</title>
                </Head>
            )
        }
        {
            props.titulo && (
                <Mui.Paper square sx={{ p: 5, ...props?.sx }} elevation={props?.elevation || 10}>
                    <Mui.Stack
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <Mui.Typography variant="h4" component="h1" fontWeight="bold">{props?.titulo}</Mui.Typography>
                        {(props?.descricao) && (<Mui.Typography variant="subtitle1" component="p" textAlign="center">{props?.descricao}</Mui.Typography>)}
                    </Mui.Stack>
                </Mui.Paper>
            )
        }
    </>)
}