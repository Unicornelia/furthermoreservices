import React, {CSSProperties} from "react";
import Block from "../components/Block";
import {StaticImage} from "gatsby-plugin-image";

export default ({style}: { style: CSSProperties }) => (
    <div
        id='services'
        style={style}>
        <h2 style={{textShadow: `2px grey`, fontSize: `2rem`, fontWeight: 'lighter', justifySelf: 'center'}}>What can I
            offer You?</h2>
        <h4 style={{width: '60%', fontWeight: 'lighter', textAlign: 'center', paddingBottom: '30px'}}>I am well
            aware that each scientific project is unique, and that's why I offer tailored services to meet your
            specific needs.</h4>
        <div style={{
            display: 'grid',
            gridTemplateColumns: "1fr 1fr 1fr",
            columnGap: "50px",
            rowGap: "40px",
            marginBottom: '3rem',
        }}>
            <span style={{padding: '1rem', borderStyle: 'outset'}}>
                <StaticImage src="../images/proofreading.png" alt='proofreading' width={40}/>
            <Block title='Proofreading and Editing' content='My expertise in proofreading and editing will ensure that your scientific work is free of errors and
                    meets the highest standards of quality.'/>
            </span>

            <span style={{padding: '1rem', borderStyle: 'outset'}}>
            <StaticImage src="../images/statistics.png" alt='statistics' width={40}/>
            <Block title="Data Analysis"
                   content="I also offer comprehensive data analysis services to help you interpret and present your scientific data in a clear and meaningful way."/>
            </span>

            <span style={{padding: '1rem', borderStyle: 'outset'}}>
                <StaticImage src="../images/essay.png" alt='essay' width={40}/>
            <Block title="Scientific Writing" content="I can help you with all aspects of scientific writing, from drafting manuscripts to preparing grant
                    proposals."/>
            </span>

            <span style={{padding: '1rem', borderStyle: 'outset'}}>
            <StaticImage src="../images/elearning.png" alt='elearning' width={40}/>
            <Block title="Research Assistance" content="I can assist you with all aspects of scientific research, from conducting literature reviews to
                    designing experiments."/>
            </span>

            <span style={{padding: '1rem', borderStyle: 'outset'}}>
            <StaticImage src="../images/design.png" alt='design' width={40}/>
            <Block title="Scientific Consulting" content="Scientific consulting services are also available to help you with any scientific questions or
                    challenges you may face."/>
            </span>

            <span style={{padding: '1rem', borderStyle: 'outset'}}>
            <StaticImage src="../images/language.png" alt='language' width={40}/>
            <Block title="Translation Services" content="I also offer professional translation services from Hungarian to English to help you communicate
                    your scientific work to a global audience."/>
            </span>
        </div>
    </div>
)

