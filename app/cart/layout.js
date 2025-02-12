import localFont from "next/font/local";
// import "./globals.css";
import Link from "next/link";

export default function CartLayout({ children }) {
  return (
   <div>
    <div className="bg-red-300 p-10 text-cyan-600 rounded-full border-x-5 ring-4 mb-11">
        현대카드 할인 이벤트 중입니다.
    </div>
        {children}
   </div>
  );
}
