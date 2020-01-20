import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <h1>Sobre</h1>

        <p>Sou um jovem estudante interessado em tecnologia, games e códigos. Sempre fui de aprimorar meu conhecimento e buscar o que é de mais atual, não importando se é conhecido ou não, procurei sempre estar em meio a algo novo e diferente.</p>

        <p>Meu maior desejo e fazer parte das coisas, é estar envolvido, poder deixar meu nome na história é meu objetivo, ser conhecido!</p>

        <hr/>
        <h2>Contato:</h2>

        <form className="formcontato" name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div className="details">
                <input className="name" type="text" name="name" placeholder="Name"/>
                <input className="email" type="email" name="email" placeholder="Email"/>
            </div>
            <div className="textarea">
                <textarea className="text" name="message" placeholder="Mensagem"/>
            </div>
            <button className="enviar" type="submit">Enviar</button>
        </form>
    </Layout>
)

export default AboutPage
