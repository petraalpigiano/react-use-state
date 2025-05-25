export default function Button({ id, title }) {
  return (
    <button className="button" id={id}>
      {title}
    </button>
  );
}
