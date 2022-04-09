import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from '../lib/posts'
import Link from "next/link";
import { GetStaticProps } from "next";
import { useLayoutEffect } from "react";
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Date from "../components/date";

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
				<p>
				test application

				</p>
			</section>
			<section>
				<h2>Apps</h2>
				<Button variant="contained">Hello world</Button>



			</section>

			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Card>
								<CardContent>
									<Link href={`/posts/${id}`}>
										<a>{title}</a>
									</Link>
									<br />
									<small className={utilStyles.lightText}>
										<Date dateString={date} />
									</small>

								</CardContent>
							</Card>
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
