import { Header } from "../components/Header";

export default function Home(props) {
  return (
   <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
   </div>
  )
}

export async function getStaticProps(){
  const response = await fetch('https://localhost:3333/episodes')
  const data = await response.json()

  return{
    props: {
      episodes: data,
    },
    revalidate: 60*60*8,
  }
}
