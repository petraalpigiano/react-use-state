export default function Card({ id, title, description }) {
  return (
    <>
      <div className="card" id={id}>
        <div className="card-title">{title}</div>
        <div className="card-content">{description}</div>
      </div>
    </>
  );
}
