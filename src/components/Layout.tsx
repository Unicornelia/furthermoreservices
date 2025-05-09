import Nav from './Nav';

const Layout = ({ children }: any) => {
  const layoutStyle = { display: 'grid', margin: '-8px', fontFamily: 'sans-serif, serif' };

  return (
    <div style={layoutStyle}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
