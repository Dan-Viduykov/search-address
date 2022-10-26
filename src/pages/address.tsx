import Layout from "@/components/Layout";
import SearchAddress from "@/components/screens/SearchAddress";
import { NextPage } from "next"

const Address: NextPage = () => {
  return (
    <Layout>
      <SearchAddress />
    </Layout>
  )
}

export default Address;