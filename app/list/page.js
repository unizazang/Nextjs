'use client'
// import { useState } from "react";

export default function List() {

  let 상품 = ['Tomatoes', 'Onion', "Potatoes"]
  // let [cnt, setCnt] = useState(0);

    return (
      <div  className="bg-slate-700 p-10">
        <h1 className="font-extrabold">리스트 페이지입니다.</h1>
        <h2>상품 목록 </h2>

        {
          상품.map((_, i)=>{
          return (
          <div className="food" key={i}>
            <img src={"/food"+i+".png"}></img>
            <h4>{상품[i]}  $40</h4>
          </div>)
          })
        }
        
      </div>
    );
  }
  