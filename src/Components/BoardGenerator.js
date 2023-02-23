import { useState, useEffect } from "react"

const piecesInitialBoard = [
  {
    piece: "♟",
    class: "piece piece-black peon",
    numbers: [9, 10, 11, 12, 13, 14, 15, 16],
  },
  {
    piece: "♜",
    class: "piece piece-black torre",
    numbers: [1, 8],
  },
  {
    piece: "♞",
    class: "piece piece-black caballo",
    numbers: [2, 7],
  },
  {
    piece: "♝",
    class: "piece piece-black alfiler",
    numbers: [3, 6],
  },
  {
    piece: "♚",
    class: "piece piece-black rey",
    numbers: [4],
  },
  {
    piece: "♛",
    class: "piece piece-black reina",
    numbers: [5],
  },
  {
    piece: "♙",
    class: "piece piece-white peon",
    numbers: [49, 50, 51, 52, 53, 54, 55, 56],
  },
  {
    piece: "♔",
    class: "piece piece-white rey",
    numbers: [61],
  },
  {
    piece: "♕",
    class: "piece piece-white reina",
    numbers: [60],
  },
  {
    piece: "♗",
    class: "piece piece-white alfiler",
    numbers: [59, 62],
  },
  {
    piece: "♘",
    class: "piece piece-white caballo",
    numbers: [58, 63],
  },
  {
    piece: "♖",
    class: "piece piece-white torre",
    numbers: [57, 64],
  },
]

const BoardGenerator = ({ handleClick }) => {
  const [rows, setRows] = useState([])
  const [columns, setColumns] = useState([])
  const [isWhite, setIsWhite] = useState(true)

  const reFillPiece = () => {
    // return objetc lenght=63 con piezas y sus data-nums
    let pieces = []

    piecesInitialBoard.forEach(el => {
      let piece = el.piece || "",
        classs = el.class || "",
        dataNum = el.numbers

      pieces = [...pieces, { piece: el.piece, class: el.class }]
    })
  }

  const generateColums = pieces => {
    // return array lenght=63 con divs ya armados
  }

  const generateRows = () => {
    //return columns while
    //return array con 8 rows

    isWhite ? setIsWhite(false) : setIsWhite(true)
  }

  useEffect(() => {
    reFillPiece()
  }, [])

  return <>{rows.length === 63 || generateRows()}</>
}

export default BoardGenerator
