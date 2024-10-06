import { ENDPOINT } from '@/constants'
import Article from '../../../components/article'

export default async function Detail({ params }) {
  const article = await fetch(`${ENDPOINT}/${params.id}`).then((res) =>
    res.json()
  )
  return (
    <>
      <Article data={article} />
    </>
  )
}

export async function generateStaticParams() {
  const articles = await fetch(ENDPOINT).then((res) => res.json())
  return articles.map((article) => ({ id: article.id }))
}
