import '@/styles/globals.css'
import Layout from "../components/Layouts/Layout"
import MCQ from "../components/utils/mcq"
import SCQ from "../components/utils/scq"
import TextArea from "../components/utils/textarea"
import Elements from "../components/Elements"
import AttendanceConfig from "../components/attendanceconfig"

const components = {
  elements: Elements,
  mcq: MCQ,
  scq: SCQ,
  textarea: TextArea,
  attendance_page: AttendanceConfig,
}

import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: process.env.STORYBLOK_ACCESS_KEY,
  use: [apiPlugin],
  components
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}
