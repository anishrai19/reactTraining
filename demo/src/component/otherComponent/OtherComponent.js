import React from 'react'
import ReactDOM from "react-dom"
const OtherComponent = () => {
  return (
    ReactDOM.createPortal(
        <h1>this is another component to add html file using portal</h1>,
        document.getElementById("another-root")
    )
  )
}

export default OtherComponent