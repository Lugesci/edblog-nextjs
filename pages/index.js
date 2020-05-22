import { NextSeo } from 'next-seo/lib'
import fetch from 'node-fetch'
import Post from '../components/Blog/Post'

const Home = ({posts}) => (
  <div className="container">
    <NextSeo
      title='Bienvenido a EDblog'
      description='EDblog es una creación de...'
      openGraph={{
        url: 'https://ed.team',
        title: 'Bienvenido a EDblog',
        description: '',
        images: [
          {
            url: 'https://ed.team/images/algo.jpg',
            width: 1200,
            height: 700,
            alt: 'Foto de perfil de EDteam'
          }
        ],
        site_name: 'EDblog'
      }}
    />
    <main>
      <h1>EDblog</h1>
      <div className='ed-grid m-grid-3 row-gap'>
        {
          posts.map(p => <Post key={p.id} post={p} />)
        }
      </div>
    </main>
  </div>
)

export async function getStaticProps() {

  const resp = await fetch(`${process.env.API_BLOG}posts`)
  const posts = await resp.json()
  return {
    props: {
      posts
    }
  }
}

export default Home
