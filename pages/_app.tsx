import "../styles/globals.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import fr from "dayjs/locale/fr";
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);
dayjs.locale(fr);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
