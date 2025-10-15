// _features/Pagination.tsx
import Link from "next/link";

type PaginationProps = {
  page: number;
  totalPages: number;
  basePath: string;
};

export function Pagination({ page, totalPages, basePath }: PaginationProps) {
  return (
    <div className="flex gap-2 mt-4">
      {page > 1 && (
        <Link href={`${basePath}&page=${page - 1}`} className="px-3 py-1 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          Prev
        </Link>
      )}
      <span className="px-3 py-1 border rounded-md bg-gray-200 dark:bg-gray-700">{page}</span>
      {page < totalPages && (
        <Link href={`${basePath}&page=${page + 1}`} className="px-3 py-1 border rounded-md hover:bg-gray-200 dark:hover:bg-gray-700">
          Next
        </Link>
      )}
    </div>
  );
}
