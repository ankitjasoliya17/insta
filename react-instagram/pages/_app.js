import App from 'next/app';
import Head from 'next/head';
import { AppProvider,Link } from '@shopify/polaris';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import '../css/style.css'

class MyApp extends App {
    render() {
        const { Component, pageProps } = this.props;
        return (
            <React.Fragment>
                <Head>
                    <title>Sample App</title>
                    <meta charSet="utf-8" />
                </Head>
                <AppProvider i18n={translations}>
                    <Component {...pageProps} />
                </AppProvider>
            </React.Fragment>
        );
    }
}

export default MyApp;