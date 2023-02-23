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
  const [isWhite, setIsWhite] = useState(false)

  const reFillPiece = () => {
    // return objetc lenght=63 con piezas y sus data-nums
    let pieces = []

    for (let dataNum = 1; dataNum < 65; dataNum++) {
      let piece = {}
      piecesInitialBoard.forEach(el => {
        if (piece.class) return

        if (el.numbers.includes(dataNum))
          piece = { piece: el.piece, class: el.class }
        else piece = { piece: "", class: "" }
      })

      piece.dataNum = dataNum
      pieces = [...pieces, piece]
    }
    generateColums(pieces)
  }

  const generateColums = pieces => {
    // return array lenght=63 con divs ya armados

    setColumns([
      ...columns,
      pieces.map(el => (
        <div key={el.dataNum} data-num={el.dataNum} className={el.class}>
          {el.piece}
        </div>
      )),
    ])
  }

  const generateRows = () => {
    let index = rows.length * 8
    isWhite ? setIsWhite(false) : setIsWhite(true)
    setRows(rows + 1)
    //return columns while
    //return array con 8 rows

    let rowColumns = []
    while (rowColumns.length !== 7) {
      rowColumns.push(columns[index])
      index++
    }

    return (
      <article
        key={`row-${rows.length}`}
        className={`row row-${isWhite ? "white" : "black"}`}>
        {rowColumns.map(el => el)}
      </article>
    )
  }

  useEffect(() => {
    reFillPiece()
  }, [])

  return <>{rows === 8 || generateRows()}</>
}

export default BoardGenerator
