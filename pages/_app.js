import "../styles/globals.scss";
import { Provider } from "react-redux";
import store from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Head from "next/head";
import { SessionProvider } from "next-auth/react";
// import { PayPalScriptProvider, ReactPayPalScriptOptions } from "@paypal/react-paypal-js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from 'react';

let persistor = persistStore(store);
 
export default function App({ Component, pageProps:{session, ...pageProps} }) {
  return (
    <>
        <Head>
            <title>Houtkappers</title>
            <meta name="description"
                content="Welcome to the home of Awesomeness in Wood."
            />
            <link rel='icon' href="/HK_Logo.png"/>
            <link ref="shortcut icon" href="/HK_Logo.png"/>
            <link rel="shortcut icon"
                href="https://houtkappers.vercel.app/"
            />
            <link rel="apple-touch-icon" href="HK_Logo.png" />
            <link rel="apple-touch-icon" href="https://houtkappers.vercel.app/" />
        </Head>
                    
        <SessionProvider session={session}>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <ToastContainer
                        position='top-right'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='colored'
                    />
                    <Component {...pageProps}/>
                </PersistGate>
            </Provider>
        </SessionProvider>
    </>
  )
}