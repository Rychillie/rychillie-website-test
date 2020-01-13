import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import informationImage from "../../static/images/Information-document.svg";
//import eventImage from "../../static/images/Event-managment.svg";
//import ProductivityImage from "../../static/images/Increase-Productivity.svg";
//import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>
        <div className={"container"}>
        <h1>Contact</h1>

        <form name="Contact Form" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="Contact Form" />
            <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" />
            </div>
            <button type="submit">Send</button>
        </form>
        </div>
    </Layout>
)

export default AboutPage
