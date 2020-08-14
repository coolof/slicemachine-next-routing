import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps, useGetStaticPaths } from 'next-slicezone/hooks'

import resolver from '../sm-resolver.js'

const Page = (props) =>
    <article>
      <SliceZone {...props} resolver={resolver} />
    </article>

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  uid: ({ params }) => params.uid
})

export const getStaticPaths = useGetStaticPaths({
  client: Client(),
  type: 'page',
  fallback: false,// process.env.NODE_ENV === 'development',
  formatPath: ({ uid }) => ({ params: { uid }})
})

export default Page