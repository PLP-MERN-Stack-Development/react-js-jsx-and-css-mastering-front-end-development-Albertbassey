export default function Card({ title, children }) {
  return (
    <div className="bg-white shadow-md rounded p-6 border border-gray-200">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}