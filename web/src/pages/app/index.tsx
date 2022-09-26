import { withPageAuthRequired } from "@auth0/nextjs-auth0"
import { GetServerSideProps } from "next"
import { useMeQuery } from "../../graphql/generated/graphql"
import { ssrGetProducts } from "../../graphql/generated/page"
import { withApollo } from "../../lib/withApollo"


function Home({data}) {
  const { data: me } = useMeQuery()



  return (
    <div>
      <h1>Pagina Home</h1>


      <pre>
        ok :{JSON.stringify(me, null, 2)}
      </pre>
      
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
     
      
      {/* <a href="/api/auth/logout">Logout</a> */}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    //  await getServerPageGetProducts(null, ctx)
    return {
      props: {}
    }
  }

})

// High Order Component
// - compose -
export default withApollo(
  ssrGetProducts.withPage()(Home)
)