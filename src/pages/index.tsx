import * as React from "react"
import type {HeadFC, PageProps} from "gatsby"
import Header from "../components/Header";
import Layout from "../components/Layout";
import Introduction from "./about";
import Services from "./services";
import Publications from "./publications";

const pageStyles = {
    color: "#232129",
    fontFamily: "sans-serif, serif",
    display: 'grid',
    justifyContent: 'center',
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <Header headerText="Furthermore Scientific Services"
                    subText="Where Knowledge Meets Precision"
                    headerPadding="10rem"></Header>
            <main style={pageStyles}>
                <Introduction/>
                <Services/>
                <Publications/>
            </main>
        </Layout>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Furthermore Scientific Services</title>
