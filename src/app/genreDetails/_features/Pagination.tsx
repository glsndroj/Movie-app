"use client";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { axiosInstance } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function PaginationDemo() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const genreId = searchParams.get("genreId");
  const genreName = searchParams.get("genreName");
  const page = searchParams.get("page") || "1";

  const [totalPages, setTotalPages] = useState<number>(1);
  const currentPage = parseInt(page);
  const maxPage = Math.min(totalPages, 500);

  const getData = async () => {
    try {
      if (!genreId) return;
      const safePage = Math.max(1, Math.min(500, parseInt(page)));
      const response = await axiosInstance.get(
        `/discover/movie?language=en&with_genres=${genreId}&page=${safePage}`
      );
      setTotalPages(response.data.total_pages || 1);
    } catch (error) {
      console.log("Error fetching data", error);
    }
  };

  useEffect(() => {
    getData();
  }, [page, genreId]);

  const handlePageChange = (newPage: number) => {
    const safePage = Math.max(1, Math.min(500, newPage));
    const params = new URLSearchParams(window.location.search);
    params.set("page", safePage.toString());
    if (genreId) params.set("genreId", genreId);
    if (genreName) params.set("genreName", genreName);
    router.push(`?${params.toString()}`);
    router.refresh();
  };

  const visibleRange = 3;
  const start = Math.max(1, currentPage - visibleRange);
  const end = Math.min(maxPage, currentPage + visibleRange);

  const showStartEllipsis = start > 1;
  const showEndEllipsis = end < maxPage;

  const pagesToShow = [];
  for (let i = start; i <= end; i++) {
    pagesToShow.push(i);
  }

  return (
    <Pagination className="mt-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          />
        </PaginationItem>

        {showStartEllipsis && (
          <>
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(1)}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationEllipsis />
          </>
        )}

        {pagesToShow.map((p) => (
          <PaginationItem key={p}>
            <PaginationLink
              href="#"
              isActive={p === currentPage}
              onClick={() => handlePageChange(p)}
            >
              {p}
            </PaginationLink>
          </PaginationItem>
        ))}

        {showEndEllipsis && (
          <>
            <PaginationEllipsis />
            <PaginationItem>
              <PaginationLink onClick={() => handlePageChange(maxPage)}>
                {maxPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, maxPage))
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
