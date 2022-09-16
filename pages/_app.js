import * as React from 'react'
import * as Mui from '@mui/material'
import { tema } from '../styles/tema'
import cssGlobal from '../styles/global.module.css'
import Router from 'next/router'
import 'aos/dist/aos.css'
import AOS from 'aos'


export default function App({ Component, pageProps }) {

  const [carregando, setCarregando] = React.useState(true);


  React.useEffect(() => {
    if (Router.isFallback === false) {
      if (typeof window !== "undefined") {
        window.addEventListener("loadstart", function () { setCarregando(true); });
        window.addEventListener("loadstop", function () { setCarregando(false); });
      }
    }
  });

  React.useEffect(() => {
    if (Router.isFallback === false) {
      Router.events.on("routeChangeStart", () => setCarregando(true));
      Router.events.on("routeChangeComplete", () => setCarregando(false));
      Router.events.on("routeChangeError", () => setCarregando(false));
      setCarregando(false);
    } else {
      setCarregando(true);
    }
  }, [Router]);


  React.useEffect(() => {
    AOS.init();
  }, []);


  return (<>
    <Mui.ThemeProvider theme={tema}>
      <Mui.CssBaseline />
      {/* <MenuCima />
      <div className={cssGlobal.espacamentoMenuCima}></div> */}

      <Component {...pageProps} carregando={carregando} cssGlobal={cssGlobal} />

      {/* <div className={cssGlobal.espacamentoMenuBaixo}></div>
      <MenuBaixo sx={{ display: { md: "none" } }} /> */}
    </Mui.ThemeProvider>
  </>)
}
