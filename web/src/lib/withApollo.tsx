import { ApolloClient, ApolloProvider, createHttpLink, from, InMemoryCache, NormalizedCacheObject } from "@apollo/client"
import { GetServerSidePropsContext, NextPage } from "next"

// HOC - High Order Component  - 1 component que recebe um component como paramento e retorna um component
// High Order Function -> 1 função que recebe uma função como paramento

export type ApolloClientContext = GetServerSidePropsContext

export const withApollo = (Component: NextPage) => {
  return function Provider(props: any) {
    return (
      <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
        <Component {...props} />
      </ApolloProvider>
    )
  }
}

export function getApolloClient(
  ctx?: ApolloClientContext,
  ssrCache?: NormalizedCacheObject
) {
  const httpLink = createHttpLink({
    uri: "http://localhost:3000/api",
    fetch
  })

  

  const cache = new InMemoryCache().restore(ssrCache ?? {})

  return new ApolloClient({
    link: from([httpLink]),
    cache
  })

}