import React from "react"

import IconTwitter from "../../static/images/twitter.svg"
import IconInstagram from "../../static/images/instagram.svg"
import IconGithub from "../../static/images/github.svg"
import IconYoutube from "../../static/images/youtube.svg"

const Bio = () => (
    <footer>
        <div className={"container row"}>
            <div className={"col-6"}>
                <ul className={"socialfooter"}>
                    <li className={"socialfooteritem"}>
                        <a href="https://twitter.com/rychillie" target="_blank" rel="noopener noreferrer">
                            <img src={IconTwitter} alt="Twitter" srcset="Twitter"/>
                        </a>
                    </li>
                    <li className={"socialfooteritem"}>
                        <a href="https://instagram.com/rychillie" target="_blank" rel="noopener noreferrer">
                            <img src={IconInstagram} alt="Instagram" srcset="Instagram"/>
                        </a>
                    </li>
                    <li className={"socialfooteritem"}>
                        <a href="http://github.com/rychillie" target="_blank" rel="noopener noreferrer">
                            <img src={IconGithub} alt="Github" srcset="Github"/>
                        </a>
                    </li>
                    <li className={"socialfooteritem"}>
                        <a href="https://youtube.com/rychillie" target="_blank" rel="noopener noreferrer">
                            <img src={IconYoutube} alt="Youtube" srcset="Youtube"/>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={"col-6"}>
                <p className={"center"}>Rychillie</p>
            </div>
        </div>
    </footer>
)

export default Bio
