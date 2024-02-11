import React from "react";
import Layout from "../components/Layout";
import {OutboundLink} from "gatsby-plugin-google-gtag";
import {Link} from "gatsby";

export default () => {
    let pubStyle = {
        display: `grid`,
        justifyItems: 'center',
        marginTop: '1rem',
        width: '80%',
        justifySelf: 'center',
        padding: '2rem 5rem',
        backgroundColor: 'whitesmoke',
        boxShadow: 'rosybrown 10px 10px 10px',
        marginBottom: '3rem',
        borderRadius: 4
    };

    return (
        <Layout>
            <div
                id='publications'
                style={pubStyle}>
                <h4 style={{textShadow: `2px grey`, fontSize: `1.75rem`, fontWeight: 'lighter'}}>My Academic Work</h4>

                <p>Barkaszi, I., Ehmann, B., Tölgyesi, B., Balázs, L., & Altbäcker, A. (2022). <OutboundLink
                    href='https://doi.org/10.3389/fphys.2022.1008508' target='_blank'>Are head-down tilt bedrest studies
                    capturing the true nature of spaceflight-induced cognitive changes? A
                    review.</OutboundLink> Frontiers in
                    Physiology, 13, 2368.</p>

                <p>Takács, E., Barkaszi, I., Czigler, I., Pató, L. G., Altbäcker, A., McIntyre, J., ... & Balázs, L.
                    (2021). <OutboundLink href='https://doi.org/10.1038/s41598-021-88938-6' target='_blank'>Persistent
                        deterioration of visuospatial performance in spaceflight.</OutboundLink> Scientific Reports,
                    11(1), 9590.</p>

                <p>Altbäcker, A., Takács, E., Barkaszi, I., Kormos, T., Czigler, I., & Balázs, L. (2019). <OutboundLink
                    href='https://doi.org/10.1016/j.physbeh.2019.03.022'
                    target='_blank'>
                    Differential impact of acute hypoxia on event related potentials: Impaired task-irrelevant, but
                    preserved task-relevant processing and response inhibition.</OutboundLink> Physiology & Behavior,
                    206, 28-36.
                </p>

                <p>Takács, E., Barkaszi, I., Altbäcker, A., Czigler, I., & Balázs, L. (2019). <OutboundLink
                    href='https://doi.org/10.1007/s00221-018-5427-8' target='_blank'>Cognitive
                    resilience after prolonged task performance: An ERP investigation.</OutboundLink> Experimental Brain
                    Research,
                    237, 377-388.
                </p>

                <p>Ehmann, B., Altbäcker, A., & Balázs, L. (2018). <OutboundLink
                    href='https://doi.org/10.1016/j.jenvp.2018.09.003'
                    target='_blank'>
                    Emotionality in isolated, confined and extreme (ICE) environments: Content analysis of diaries of
                    Antarctic Winteroverers.</OutboundLink> Journal of Environmental Psychology, 60, 112-115.</p>

                <p>Darnai, G., Nagy, S. A., Horváth, R., Ács, P., Perlaki, G., Orsi, G., Kovács, N., Altbäcker, A., ...
                    & Janszky, J. (2017). <OutboundLink href='https://doi.org/10.3233/JAD-170118' target='_blank'>Iron
                        concentration in deep gray matter structures is associated with worse visual memory performance
                        in healthy young adults.</OutboundLink> Journal of Alzheimer's Disease, 59(2), 675-681.</p>

                <p>Altbäcker, A., Plózer, E., Darnai, G., Perlaki, G., Horváth, R., Orsi, G., ... & Janszky, J.
                    (2016). <OutboundLink
                        href='https://doi.org/10.1007/s11682-015-9454-9' target='_blank'>Problematic internet use is
                        associated with structural alterations in the brain reward system in
                        females.</OutboundLink> Brain imaging and Behavior, 10, 953-959.</p>

                <p>Darnai, G., Plozer, E., Altbacker, A., Perlaki, G., Orsi, G., Kőszegi, T., ... & Clemens, Z.
                    (2016). <OutboundLink
                        href='https://doi.org/10.18071/isz.69.0177' target='_blank'>The relationship between serum
                        cholesterol and verbal memory may be influenced by body mass index (BMI) in young healthy
                        women.</OutboundLink> Ideggyógyászati Szemle, 69(5-6), 177-182.</p>

                <p>Darnai, G., Plózer, E., Perlaki, G., Orsi, G., Nagy, S. A., Horváth, R., Schwarcz, A., Kovács, N.,
                    Altbäcker, A., ... & Clemens, Z. (2016). <OutboundLink
                        href='https://doi.org/10.1016/j.neulet.2015.12.056'
                        target='_blank'>2D: 4D finger ratio positively correlates with total cerebral cortex in
                        males.</OutboundLink> Neuroscience
                    Letters, 615, 33-36.</p>

                <p>Darnai, G., Plózer, E., Perlaki, G., Orsi, G., Nagy, S. A., Horvath, R., Schwarcz, A., Kovacs, N.,
                    Altbäcker, A., Janszky, J., & Clemens, Z. (2015). <OutboundLink
                        href='https://doi.org/10.3109/09637486.2015.1093609'
                        target='_blank'>Milk and dairy consumption correlates with cerebral cortical as well as cerebral
                        white matter volume in healthy young adults.</OutboundLink> International journal of food
                    sciences and nutrition, 66(7), 826-829.</p>

                <p>Plózer, E., Altbäcker, A., Darnai, G., Perlaki, G., Orsi, G., Nagy, S. A., ... & Janszky, J.
                    (2015). <OutboundLink
                        href='https://doi.org/10.1179/1476830514Y.0000000109' target='_blank'>Intracranial volume
                        inversely correlates with serum 25 (OH) D level in healthy young
                        women.</OutboundLink> Nutritional neuroscience, 18(1), 37-40.
                </p>

                <p>Kuperczkó, D., Perlaki, G., Faludi, B., Orsi, G., Altbacker, A., Kovács, N., ... & Janszky, J.
                    (2015). <OutboundLink
                        href='https://doi.org/10.1111/sbr.12077' target='_blank'>Late bedtime is associated with
                        decreased
                        hippocampal volume in young healthy subjects.</OutboundLink> Sleep and Biological Rhythms, 13,
                    68-75.</p>

                <p>Altbäcker, A., Plózer, E., Darnai, G., Perlaki, G., Orsi, G., Nagy, S. A., ... & Clemens, Z.
                    (2014). <OutboundLink
                        href='https://doi.org/10.1179/1476830514Y.0000000114' target='_blank'>Alexithymia is associated
                        with low level of vitamin D in young healthy adults.</OutboundLink> Nutritional neuroscience,
                    17(6), 284-288.
                </p>

                <p>Perlaki, G., Orsi, G., Plozer, E., Altbacker, A., Darnai, G., Nagy, S. A., ... & Janszky, J.
                    (2014). <OutboundLink
                        href='https://doi.org/10.1016/j.neulet.2014.04.013' target='_blank'>Are there any gender
                        differences in the hippocampus volume after head-size correction? A volumetric and voxel-based
                        morphometric study.</OutboundLink> Neuroscience letters, 570, 119-123.
                </p>

                <p>Perlaki, G., Horvath, R., Orsi, G., Aradi, M., Auer, T., Varga, E., Kantor, G., Altbäcker, A., ... &
                    Janszky,
                    J. (2013). <OutboundLink href='https://doi.org/10.1016/j.bandc.2013.05.005' target='_blank'>White-matter
                        microstructure and language lateralization in left-handers: a whole-brain MRI
                        analysis.</OutboundLink> Brain and Cognition, 82(3), 319-328. </p>

                <Link style={{textDecoration: 'none', paddingTop: '2rem'}} to='/'>Back Home</Link>
            </div>
        </Layout>
    );
}
