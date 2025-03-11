import React from "react";
import { Button } from "@/components/ui/button";

interface PaginationControlsProps {
  page: number;
  setPage: (page: number) => void;
  hasNextPage: boolean;
}

const PaginationControls: React.FC<PaginationControlsProps> = ({
  page,
  setPage,
  hasNextPage,
}) => {
  return (
    <div className="flex justify-between mt-4">
      <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
        Previous
      </Button>
      <span>Page {page}</span>
      <Button disabled={!hasNextPage} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </div>
  );
};

export default PaginationControls;
