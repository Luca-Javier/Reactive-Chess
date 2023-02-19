import React, { useState, useEffect } from "react"
import "./ChessApp.css"
import ChessBoard from "./ChessBoard"

const ChessApp = () => {
  const handleClick = e => {
    const $targ = e.target

    if ($targ.textContent === "") return
  }

  return (
    <section className="chess-container">
      <h1>CHESS</h1>
      <ChessBoard handleClick={handleClick} />
    </section>
  )
}

export default ChessApp
