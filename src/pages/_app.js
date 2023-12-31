import NavBar from "@/components/NavBar";
import  store  from "@/redux/store";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <Provider store={store}>
      <NavBar/>
      <Toaster />
      <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  );
}
