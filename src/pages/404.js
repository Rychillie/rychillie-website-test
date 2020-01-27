import React from "react"

import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"

const NotFoundPage = ({siteTitle}) => (
    <Layout>
        <SEO title="404: Not found"/>
        <div className={"container"}>
            <h1>Ops... Erro 404 não encontrado!</h1>
            <p>Está Página não foi encontrada, <Link to={"/"} title={siteTitle}>volte para o inicio</Link> ou <Link to={"/about"} title={"Sobre"}>entre em contato comigo</Link>.</p>
        </div>
    </Layout>
)

NotFoundPage.propTypes = {
    siteTitle: PropTypes.string,
}

export default NotFoundPage
