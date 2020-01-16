import {Link} from "gatsby"
import React from "react"

import ProfileImg from "../../static/images/rychillie.webp"

const Bio = () => (
    <div className={"bio"}>
        <div className={"container"}>
            <div className={"apresentation row"}>
                <div className={"col-3 profile"}>
                    <img loading="lazy" alt="Rychillie" src={ProfileImg}/>
                </div>
                <div className={"col-9 hometext"}>
                    <h2>
                        Olá, Eu sou <span>Rychillie</span>
                    </h2>
                    <p>Um jovem Programador Front-End querendo compartilhar seu conhecimento. Sempre buscando evoluir e melhorar em todos os aspectos. Venha <Link to="/about" title={"About"}>me Conhecer</Link> um pouco mais e o <Link to="/portfolio" title={"Portfolio"}>meu trabalho</Link>.</p>
                </div>
            </div>
        </div>
    </div>
)

export default Bio
