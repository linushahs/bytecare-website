"use client";

import { ArrowRightSmallIcon } from "@/assets";
import ReactPaginate from "react-paginate";
import Button from "./button";

export default function Pagination() {
  return (
    <ReactPaginate
      previousLabel={
        <Button color="surface">
          <ArrowRightSmallIcon className="size-7 rotate-180" />
          Previous
        </Button>
      }
      nextLabel={
        <Button color="surface" className="">
          Next
          <ArrowRightSmallIcon className="size-7" />
        </Button>
      }
      renderOnZeroPageCount={null}
      pageClassName="md:block hidden text-md"
      breakLinkClassName="md:block hidden "
      pageLinkClassName="w-[38px] aspect-square rounded-full mx-2 inline-flex items-center justify-center hover:bg-surface"
      activeLinkClassName="bg-surface"
      containerClassName="flex items-center  text-white justify-center md:justify-normal gap-x-2"
      pageCount={12}
      previousClassName="mr-auto"
      nextClassName="ml-auto"
    />
  );
}
