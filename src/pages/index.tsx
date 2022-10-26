import Layout from "@/components/Layout";
import { default as HomeScreen } from "@/components/screens/Home";
import { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeScreen />
    </Layout>
  )
}

export default Home;
  