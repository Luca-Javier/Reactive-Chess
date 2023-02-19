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
  //? Ya no necesitaban keys. Porque no son generados

  document.addEventListener("click", e => {
    if (!e.target.matches(".column")) return

    handleClick(e)
  })

  let cantBlocks = 1,
    blocks = []
  while (cantBlocks !== 65) {
    let piece = null

    piecesInitialBoard.forEach(el => {
      if (piece !== null) return

      if (el.numbers.includes(cantBlocks)) {
        piece = el
      }
    })

    if (piece === null) {
      piece = { piece: "", class: "" }
    }

    console.log(cantBlocks / 2 === 0, cantBlocks, cantBlocks % 2)

    let block = (
      <div
        key={cantBlocks}
        data-num={cantBlocks}
        className={`color-${cantBlocks % 2 === 0 ? "black" : "white"} ${
          piece.class
        }`}>
        {piece.piece}
      </div>
    )

    blocks.push(block)
    cantBlocks++
  }

  return <>{blocks.map(el => el)}</>
}

export default BoardGenerator
