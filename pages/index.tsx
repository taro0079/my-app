import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts'
import Link from "next/link";
import { GetStaticProps } from "next";

export default function Home({
	allPostsData
}: {
	allPostsData: {
		date: string
		title: string
		id: string
	}[]
}) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>My name is Taro Morita</p>
				<p>
					Engineer of superconducting Nb3Sn wire{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title}) => (
						<li className={utilStyles.listItem} key={id}>
							{title}
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const allPostsData = getSortedPostsData() 
	return {
		props: {
			allPostsData
		}
	}
}
