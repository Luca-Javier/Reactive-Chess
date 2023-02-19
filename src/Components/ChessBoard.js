import BoardGenerator from "./BoardGenerator"

import "./ChesseBoard.css"

const ChessBoard = ({ handleClick }) => {
  return (
    <div className="chesse-board">
      <BoardGenerator handleClick={handleClick} />
    </div>
  )
}

export default ChessBoard
