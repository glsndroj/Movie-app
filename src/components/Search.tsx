// "use client";

// import { axiosInstance } from "@/lib/utils";
// import { useState } from "react";

// export async function Search() {
//   const [query, setQuery] = useState("");
//   const [result, setResult] = useState([]);

//   const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value;
//     setQuery(value);

//     if (value.length < 2) return;
//     const res = await axiosInstance.get(
//       `/search/movie?query=${searchValue}&language=en-US&page=${page}`
//     );
//     setResult(res.data.result);
//   };
//   return <div></div>;
// }
