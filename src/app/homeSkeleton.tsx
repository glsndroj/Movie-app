export default function homeSkeleton() {
  return (
    <div className="px-[480px] py-3">
        <div className="flex justify-between">
        <div className="h-7 w-30 bg-gray-300 shadow-2xl animate-pulse rounded-2xl mb-6" />
        <div className="h-7 w-23 bg-gray-300 shadow-2xl animate-pulse rounded-2xl mb-6" />
        </div>
      

      <div className="flex flex-wrap gap-8">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="w-[230px] h-[439px] bg-gray-300 shadow-2xl animate-pulse rounded-xl"
          />
        ))}
      </div>
    </div>
  );
}


