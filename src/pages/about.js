import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <div className={"container"}>
        <h1>Contact</h1>

        <form name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
                <label htmlFor="Contact Form">Your Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label htmlFor="Contact Form">Message:</label>
                <textarea name="message" />
            </div>
            <button type="submit">Send</button>
        </form>
        </div>
    </Layout>
)

export default AboutPage
