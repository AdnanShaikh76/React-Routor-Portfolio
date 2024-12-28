import React, { useEffect, useState } from "react";
// import { data } from "react-router-dom";

const Github = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/AdnanShaikh76")
      .then((response) => response.json())
      .then((data) => {console.log(data); setdata(data)});
    ;
  }, []);

  console.log(data)
  return (
    <div className="w-full h-96 bg-slate-300">
      <h1 className="text-slate-800 text-3xl text-center">
        Github Followers : {
            data? data?.followers : "Loading"
        }
      </h1>
      <img src={data.avatar_url} alt="Github profile image" width={"300px"} />
    </div>
  );
};

export default Github;
