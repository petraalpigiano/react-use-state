export default function Button({ id, title, handleClick }) {
  return (
    <button className="button " id={id} onClick={handleClick}>
      {title}
    </button>
  );
}
