import NavLinks from './Links';

const Nav = () => {
  const isPublicationsPage =
    typeof window !== 'undefined' && window.location.pathname.includes('publications');

  const navStyle = {
    padding: '1rem',
    backgroundColor: '#07455f',
    display: 'grid',
    gridAutoFlow: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '1.15rem',
  };

  return (
    <div style={navStyle}>
      <div className="left-nav">
        <ul style={{ listStyle: 'none', display: 'flex' }}>
          <NavLinks to="/">Furthermore Scientific Services</NavLinks>
        </ul>
      </div>
      <div className="right-nav">
        <ul style={{ listStyle: 'none', display: 'flex', alignContent: 'flex-end' }}>
          <NavLinks to="/#about">About</NavLinks>
          <NavLinks to="/#services">Services</NavLinks>
          {!isPublicationsPage && <NavLinks to="/publications">Publications</NavLinks>}
          <NavLinks to="/#contact">Contact</NavLinks>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
