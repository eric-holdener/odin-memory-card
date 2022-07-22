export default function HeaderFooter(props) {
  return(
    <>
      <h1>Memory Game</h1>
      <div>{props.children}</div>
      <h2>Copyright Eric Holdener, 2022</h2>
    </>
  )
}