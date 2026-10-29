export function Hashtag({ title, color }) {
  return (
    <div
      style={{ backgroundColor: color }}
      className="bg-gray-200 inline-block text-gray-800 px-3 py-1 rounded-full text-sm"
    >
      #{title}
    </div>
  );
}
