import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const postData = await getPostData(params.id as string)
	return {
		props: {
			postData
		}
	}

}

export async function getStaticPaths() {
	const paths = getAllPostIds()
	return {
		paths,
		fallback: false

	}
}
export default function Post({
	postData
}: {
	postData: {
		title: string
		id: string
		date: string
	}
}) {
	return (
		<Layout>
			{postData.title}
			<br />
			{postData.id}
			<br />
			{postData.date}
		</Layout>

	)
}
