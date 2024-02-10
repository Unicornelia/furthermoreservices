import React from "react"
import Nav from "./Nav"

export default ({ children }: any) => (
  <div style={{margin: '-8px'}}>
    <Nav />
    {children}
  </div>
)
