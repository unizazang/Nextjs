'use client'
import { useEffect, useState } from "react";

export default function List() {

  let 상품 = ['Tomatoes', 'Onion', "Potatoes"]
  let [cnt, setCnt] = useState([0,0,0]);
  

  useEffect(()=>{

  },[cnt]);
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
            <span> {cnt[i]} </span>
            {/* 얘를 클릭하면 해당 아이디 번째의 cnt 를 1 증가시킨다. */}
            <button className="bg-black p-2 rounded-full text-white font-bold " onClick={()=>{
              let copy = [...cnt];
              copy[i] = copy[i] + 1;
              setCnt(copy);
            }}> + </button>
            <button className="bg-black p-2 ml-3 rounded-full text-white font-bold " onClick={()=>{
              if(cnt[i] > 1 ){
                // i번째를 조건으로 해야함 ㅡㅡ
                let copy = [...cnt];
                copy[i] = copy[i] - 1;
                setCnt(copy);
              } else { 
                alert('1 이상의 수량만 가능합니다.');
              }
            }}> - </button>
          </div>)
          })
        }
        
      </div>
    );
  }
  