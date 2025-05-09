import { Link } from 'gatsby';

const NavLinks = (props: any) => {
  return (
    <li style={{ display: 'flex', paddingRight: '20px' }}>
      <Link style={{ textDecoration: 'none', color: 'whitesmoke' }} to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};

export default NavLinks;
