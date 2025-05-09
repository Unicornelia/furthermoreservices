import { HeadFC, PageProps } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';
import Introduction from './about';
import Services from './services';
import Footer from '../components/Footer';

const pageStyles = {
  display: 'grid',
  color: '#232129',
  justifyContent: 'center',
  justifyItems: 'center',
};

const introStyle = {
  display: 'grid',
  marginTop: '-6rem',
  marginBottom: '3rem',
  width: '70%',
  justifySelf: 'center',
  padding: '1.5rem',
  backgroundColor: 'whitesmoke',
  boxShadow: 'rosybrown 10px 10px 10px',
  borderRadius: 4,
};

const footerStyle = {
  display: 'flex',
  columnGap: '1rem',
  alignItems: 'center',
  justifySelf: 'center',
  textAlign: 'justify' as AlignSetting,
  padding: '0.5rem',
  margin: '1rem',
  borderRadius: '0.5rem',
  backgroundColor: 'whitesmoke',
  borderStyle: 'outset',
};

const servicesStyle = {
  display: 'grid',
  justifyItems: 'center',
  width: '80%',
  padding: '2rem 3rem',
  backgroundColor: 'whitesmoke',
  boxShadow: 'rosybrown 10px 10px 10px',
  marginBottom: '3rem',
  borderRadius: 4,
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Header
        headerText="Furthermore Scientific Services"
        subText="Where Knowledge Meets Precision"
        headerPadding="10rem"
      ></Header>
      <main style={pageStyles}>
        <Introduction style={introStyle} />
        <Services style={servicesStyle} />
      </main>
      <Footer style={footerStyle} />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Furthermore Scientific Services</title>;
