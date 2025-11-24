export default function GenreSkeleton() {
  return (
    <div className="grid grid-cols-5 gap-5 mt-5">
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i}>
          <div className="w-[230px] h-[439px] animate-pulse bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </div>
  );
}
