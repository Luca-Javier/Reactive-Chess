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

  return (
    <>
      <article key="r-1" className="row row-white">
        <div key="c1-1" className="column"></div>
        <div key="c1-2" className="column"></div>
        <div key="c1-3" className="column"></div>
        <div key="c1-4" className="column"></div>
        <div key="c1-5" className="column"></div>
        <div key="c1-6" className="column"></div>
        <div key="c1-7" className="column"></div>
        <div key="c1-8" className="column"></div>
      </article>
      <article key="r-2" className="row row-black">
        <div key="c2-1" className="column"></div>
        <div key="c2-2" className="column"></div>
        <div key="c2-3" className="column"></div>
        <div key="c2-4" className="column"></div>
        <div key="c2-5" className="column"></div>
        <div key="c2-6" className="column"></div>
        <div key="c2-7" className="column"></div>
        <div key="c2-8" className="column"></div>
      </article>
      <article key="r-3" className="row row-white">
        <div key="c3-1" className="column"></div>
        <div key="c3-2" className="column"></div>
        <div key="c3-3" className="column"></div>
        <div key="c3-4" className="column"></div>
        <div key="c3-5" className="column"></div>
        <div key="c3-6" className="column"></div>
        <div key="c3-7" className="column"></div>
        <div key="c3-8" className="column"></div>
      </article>
      <article key="r-4" className="row row-black">
        <div key="c4-1" className="column"></div>
        <div key="c4-2" className="column"></div>
        <div key="c4-3" className="column"></div>
        <div key="c4-4" className="column"></div>
        <div key="c4-5" className="column"></div>
        <div key="c4-6" className="column"></div>
        <div key="c4-7" className="column"></div>
        <div key="c4-8" className="column"></div>
      </article>
      <article key="r-5" className="row row-white">
        <div key="c5-1" className="column"></div>
        <div key="c5-2" className="column"></div>
        <div key="c5-3" className="column"></div>
        <div key="c5-4" className="column"></div>
        <div key="c5-5" className="column"></div>
        <div key="c5-6" className="column"></div>
        <div key="c5-7" className="column"></div>
        <div key="c5-8" className="column"></div>
      </article>
      <article key="r-6" className="row row-black">
        <div key="c6-1" className="column"></div>
        <div key="c6-2" className="column"></div>
        <div key="c6-3" className="column"></div>
        <div key="c6-4" className="column"></div>
        <div key="c6-5" className="column"></div>
        <div key="c6-6" className="column"></div>
        <div key="c6-7" className="column"></div>
        <div key="c6-8" className="column"></div>
      </article>
      <article key="r-7" className="row row-white">
        <div key="c7-1" className="column"></div>
        <div key="c7-2" className="column"></div>
        <div key="c7-3" className="column"></div>
        <div key="c7-4" className="column"></div>
        <div key="c7-5" className="column"></div>
        <div key="c7-6" className="column"></div>
        <div key="c7-7" className="column"></div>
        <div key="c7-8" className="column"></div>
      </article>
      <article key="r-8" className="row  row-black">
        <div key="c8-1" className="column"></div>
        <div key="c8-2" className="column"></div>
        <div key="c8-3" className="column"></div>
        <div key="c8-4" className="column"></div>
        <div key="c8-5" className="column"></div>
        <div key="c8-6" className="column"></div>
        <div key="c8-7" className="column"></div>
        <div key="c8-8" className="column"></div>
      </article>
    </>
  )
}

export default BoardGenerator
