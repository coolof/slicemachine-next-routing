import { Client } from '../prismic'
import SliceZone from 'next-slicezone'
import { useGetStaticProps } from 'next-slicezone/hooks'

import resolver from '../sm-resolver.js'
import { RichText } from 'prismic-reactjs'

const section = {
  maxWidth: '600px',
  margin: '4em auto',
  textAlign: 'left',
};

const Page = (props) =>
    <article>
      <header style={ section }>
        <h1>{props.data.title[0].text}</h1>
        {RichText.render(props.data.intro)}
        <h3>These links are separate fields in Pricmic</h3>
        <a href={props.data.link_one.url}>Link field 1</a><br/>
        <a href={props.data.link_two.url}>Link field 2</a>
      </header>

      <SliceZone {...props} resolver={resolver} />
    </article>

// Fetch content from prismic
export const getStaticProps = useGetStaticProps({
  client: Client(),
  queryType: 'single',
  type: 'home'
})

export default Page