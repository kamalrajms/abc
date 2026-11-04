import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Page() {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;
  const itemperPage = 5;

  // [{id:1},{id:2},{id:3},,,,,,,,,,,]
  const allItem = Array.from({ length: 23 }, (_, ind) => ({ id: ind + 1 }));

  //calculation

  const totoaPage = Math.ceil(allItem.length / itemperPage);
  const startInd = (currentPage - 1) * itemperPage; //0.    5.    10
  const endInd = startInd + itemperPage; //5.    10.    15
  const currentItem = allItem.slice(startInd, endInd);
  console.log(currentItem);

  // currentItem=[{id:1},{id:2},{id:3},{},{}]

  // 4.2 -- 4
  // 4.5 -- 5
  // 4.7 -- 5

  // ceil

  // 4.2 -- 5
  // 4.5 -- 5
  // 4.7 -- 5
  const gotoPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totoaPage) {
      setSearchParams({ page: pageNum });
    }
  };

  const nextPage = () => {
    if (currentPage < totoaPage) {
      gotoPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      gotoPage(currentPage - 1);
    }
  };
  return (
    <div>
      {currentItem.map((name) => (
        <h2 key={name.id}>product :{name.id}</h2>
      ))}
      <nav>
        <button onClick={prevPage}>previous</button>
        <div>
          {/* [1,2,3,4,5] */}
          {Array.from({ length: totoaPage }, (_, i) => i + 1).map((pageNum) => (
            <button key={pageNum} onClick={()=>gotoPage(pageNum)}>{pageNum}</button>
          ))}
        </div>
        <button onClick={nextPage}>next </button>
      </nav>
    </div>
  );
}
