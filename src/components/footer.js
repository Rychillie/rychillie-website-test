import {Link} from "gatsby"
import React from "react"

import IconTwitter from "../static/images/icons/twitter.svg"
import IconInstagram from "../static/images/icons/instagram.svg"
import IconGithub from "../static/images/icons/github.svg"
import IconYoutube from "../static/images/icons/github.svg"

const Bio = () => (
    <footer>
        <div className={"container"}>
            <div className={"col-6 col-6-sm"}>
                <ul>
                    <li>
                        <Link to={"https://twitter.com/rychillie"} title={"Twitter"}>
                            <img src={IconTwitter} alt="Twitter" srcset="Twitter"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://twitter.com/rychillie"} title={"Instagram"}>
                            <img src={IconInstagram} alt="Instagram" srcset="Instagram"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://twitter.com/rychillie"} title={"Github"}>
                            <img src={IconGithub} alt="Github" srcset="Github"/>
                        </Link>
                    </li>
                    <li>
                        <Link to={"https://twitter.com/rychillie"} title={"Youtube"}>
                            <img src={IconYoutube} alt="Youtube" srcset="Youtube"/>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={"col-6 col-6-sm"}>
                <p className={"center"}>Rychillie</p>
            </div>
        </div>
    </footer>
)

export default Bio
