import {
  Box,
  ColorModeProvider,
  CSSReset,
  Link,
  Text,
  ThemeProvider,
} from '@chakra-ui/core';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import React from 'react';
import DocsHeader from '../components/DocsHeader';
import MDXComponents from '../components/MDXComponents';
import SideNav from '../components/SideNav';
import seo from '../seo.config';

const Main = props => <Box as="main" mx="auto" mb="3rem" {...props} />;

const Footer = props => (
  <Box textAlign="center" pt="12" pb="4" fontSize="sm" opacity="0.6" {...props}>
    <Text>
      Copyright &copy; {new Date().getFullYear()}{' '}
      <Link
        color="teal.500"
        href="https://github.com/openshiporg/openship"
        target="__blank"
      >
        Openship
      </Link>
    </Text>
    <Text>
      Documentation theme by{' '}
      <Link
        color="teal.500"
        href="https://twitter.com/thesegunadebayo"
        target="__blank"
      >
        Segun Adebayo
      </Link>
    </Text>
  </Box>
);

const DocsLayout = ({ children }) => (
  <Box>
    <DocsHeader />
    <SideNav display={['none', null, 'block']} maxWidth="18rem" width="full" />
    <Box pl={[0, null, '18rem']} mt="4rem">
      <Main maxWidth="46rem" pt={8} px={5}>
        {children}
        <Footer />
      </Main>
    </Box>
  </Box>
);

const HomeLayout = ({ children }) => <Box>{children}</Box>;

export default ({ Component, pageProps }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  let Layout;

  // if (router.pathname === "/") {
  //   Layout = HomeLayout;
  // } else {
  //   Layout = DocsLayout;
  // }
  Layout = DocsLayout;

  return (
    <ThemeProvider>
      <ColorModeProvider value="light">
        <CSSReset />
        <MDXProvider components={MDXComponents}>
          <Layout>
            <DefaultSeo {...seo} />
            <Component {...pageProps} />
          </Layout>
        </MDXProvider>
      </ColorModeProvider>
    </ThemeProvider>
  );
};
