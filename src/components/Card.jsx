export default function Card({ title, description }) {
  return (
    <>
      <div className="card-title">{title}</div>
      <div className="card-content">{description}</div>
    </>
  );
}
