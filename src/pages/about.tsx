import { CSSProperties } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

const AboutPage = ({ style }: { style: CSSProperties }) => {
  const buttonStyle = {
    width: 'fit-content',
    fontSize: '1.15rem',
    borderRadius: '1.15rem',
    padding: '0.5rem 0.75rem',
    backgroundColor: 'palevioletred',
    border: '2px outset',
    fontWeight: 'lighter',
    color: 'whitesmoke',
    justifySelf: 'center',
  };

  const contentStyle = {
    display: 'grid',
    alignItems: 'center',
    textAlign: 'justify' as AlignSetting,
    lineHeight: '1.5rem',
    fontWeight: 'lighter',
    justifyItems: 'center',
    fontSize: '1.15rem',
    padding: '1rem 1.5rem',
  };

  const headerStyle = {
    textShadow: '2px grey',
    fontSize: '2rem',
    fontWeight: 'lighter',
    justifySelf: 'center',
  };

  return (
    <div id="about" style={style}>
      <h4 style={headerStyle}>Welcome fellow scientist!</h4>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1.25fr))',
          gridGap: '1rem',
          margin: '1rem 2rem',
        }}
      >
        <StaticImage src="../images/profile.jpg" alt="Profile" style={{ margin: '2rem' }} />
        <aside style={contentStyle}>
          My name is Anna Altbäcker, I am a researcher with an MA in Psychology and Ph.D in
          Neuroscience. I have authored numerous scientific papers, and I am an invited reviewer of
          multiple scientific papers in leading peer-reviewed journals with over ten years of
          experience in writing and editing scientific content for manuscripts. I am also an
          experienced proofreader with a passion and proven track record for making error-free MA
          theses, PhD dissertations, scientific papers, and reports. As the founder of Furthermore
          Scientific Services, I provide top-notch scientific services, including proofreading,
          editing, data analysis, and tutoring.
        </aside>
      </div>
      <button style={buttonStyle}>
        <Link to="/publications" style={{ textDecoration: 'none', color: 'whitesmoke' }}>
          Publications
        </Link>
      </button>
    </div>
  );
};

export default AboutPage;
