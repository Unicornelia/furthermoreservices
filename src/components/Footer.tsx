import { CSSProperties } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { OutboundLink } from 'gatsby-plugin-google-gtag';

const Footer = ({ style }: { style: CSSProperties }) => {
  const headerStyle = {
    textShadow: '2px grey',
    fontSize: '1.15rem',
    fontWeight: 'normal',
    justifySelf: 'center',
    fontVariant: 'petite-caps',
  };

  return (
    <div id="contact" style={style}>
      <h1 style={headerStyle}>Get in touch: </h1>
      <span>
        <OutboundLink
          href="https://www.linkedin.com/in/anna-altbacker-02897059/"
          style={{ textDecoration: 'none' }}
          target="_blank"
          title="Open LinkedIn"
        >
          <StaticImage src="../images/linkedin.png" alt="linkedin" width={30} />
        </OutboundLink>
      </span>
      <span>
        <OutboundLink
          href="mailto:furthermoreservices@gmail.com"
          style={{ textDecoration: 'none' }}
          target="_blank"
          title="Send Email"
        >
          <StaticImage src="../images/email.svg" alt="email" width={30} />
        </OutboundLink>
      </span>
    </div>
  );
};

export default Footer;
