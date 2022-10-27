import Layout from "@/components/Layout";
import { default as NotFoundScreen } from "@/components/screens/NotFound";
import { NextPage } from "next"

const NotFount: NextPage = () => {
  return (
    <Layout>
      <NotFoundScreen />
    </Layout>
  )
}

export default NotFount;