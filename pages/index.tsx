import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import { GetStaticProps } from "next";
import { useLayoutEffect } from "react";
import Date from "../components/date";
import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Box, VStack} from "@chakra-ui/react";
import Menubar from "../components/header";
import About from "./about";

// test comment
export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <ChakraProvider>
	<Menubar />

	
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>test application</p>
        </section>
        <section>
          <Text fontSize="6xl">Apps</Text>
          <Button colorScheme="blue">Hello world</Button>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
			<VStack spacing='24px'>
            {allPostsData.map(({ id, date, title }) => (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
              >
			  <Container>
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>

			  </Container>
              </Box>

            ))}
			</VStack>

          </ul>
        </section>
      </Layout>
    </ChakraProvider>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
