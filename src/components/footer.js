import {Link} from "gatsby"
import React from "react"

import IconTwitter from "../images/icons/twitter.svg"
import IconInstagram from "../images/icons/instagram.svg"
import IconGithub from "../images/icons/github.svg"
import IconYoutube from "../images/icons/youtube.svg"

const Bio = () => (
    <footer>
        <div className={"container row"}>
            <div className={"col-6 col-6-sm"}>
                <ul className={"socialfooter"}>
                    <li className={"socialfooteritem"}>
                        <Link to={"https://twitter.com/rychillie"} title={"Twitter"}>
                            <img src={IconTwitter} alt="Twitter" srcset="Twitter"/>
                        </Link>
                    </li>
                    <li className={"socialfooteritem"}>
                        <Link to={"https://twitter.com/rychillie"} title={"Instagram"}>
                            <img src={IconInstagram} alt="Instagram" srcset="Instagram"/>
                        </Link>
                    </li>
                    <li className={"socialfooteritem"}>
                        <Link to={"https://twitter.com/rychillie"} title={"Github"}>
                            <img src={IconGithub} alt="Github" srcset="Github"/>
                        </Link>
                    </li>
                    <li className={"socialfooteritem"}>
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
