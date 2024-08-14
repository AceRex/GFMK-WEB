import { usePathname } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";

function PageTitle({ search }: { search: boolean }) {
  const location = usePathname().split("/")[1];
  return (
    <div className="w-full flex justify-between items-center place-content-center mt-10 mb-4">
      <h2 className="font-bold text-3xl w-[60%] tracking-tight capitalize">
        {location}
      </h2>
        {search && (
          <div className="w-[40%] bg-white flex items-center place-content-center rounded-lg">
            <CiSearch size={20} className="w-[20%]" />
            <input
              name="search"
              type="search"
              className="p-3 w-[80%] outline-none placeholder:text-xs"
              placeholder="Search for a video here..."
            />
          </div>
        )}
    </div>
  );
}

export default PageTitle;
