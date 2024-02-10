import React from "react";
import {StaticImage} from "gatsby-plugin-image";

export default () => (
    <div
        id='about'
        style={{
            display: `grid`,
            marginTop: '-6rem',
            marginBottom: '3rem',
            width: '60%',
            justifySelf: 'center',
            textAlign: 'center',
            padding: '1.5rem',
            backgroundColor: 'whitesmoke',
            boxShadow: 'rosybrown 10px 10px 10px'
        }}>
        <h4 style={{textShadow: `2px grey`, fontSize: `2rem`, fontWeight: 'lighter'}}>Welcome
            fellow scientist!</h4>
        <div style={{display: 'flex', margin: '40px'}}>
            <StaticImage src='../images/profile.jpg' alt='Profile' style={{marginRight: '2rem'}} width={3200}
                         height={3800}/>
            <aside style={{
                display: 'grid', alignItems: 'center', textAlign: 'justify', lineHeight: '1.5rem',
                fontWeight: 'lighter', justifyItems: 'center', fontSize: '1.15rem', padding: '1rem 1.5rem'
            }}>
                My name is Anna Altbäcker, I am a researcher with an MA in Psychology and Ph.D in Neuroscience. I
                have authored numerous scientific papers, and I am an invited reviewer of multiple scientific papers in
                leading peer-reviewed journals with over ten years of experience in writing and editing scientific
                content for manuscripts. I am also an experienced proofreader with a passion and proven track record
                for making error-free MA theses, PhD dissertations, scientific papers, and reports. As the founder of
                Furthermore Scientific Services, I provide top-notch scientific services, including proofreading,
                editing, data analysis, and tutoring.
            </aside>
        </div>
    </div>
)
