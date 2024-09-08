export default function Button({ children, onClickBtn }) {
   return (
      <button className="button" onClick={onClickBtn}>{children}</button>
   )
}