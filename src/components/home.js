import React from "react"

import Bio from "./bio"
import "../../static/styles/main.scss"

const Home = ({children}) => (
    <>
    <Bio/>
    <main className={"homecontainer"}>{children}</main>
    </>
)

export default Home
