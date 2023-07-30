import NavBar from "@/components/NavBar";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
    <SessionProvider session={pageProps.session}>
      <NavBar/>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
