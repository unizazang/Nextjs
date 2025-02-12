export default function Cart() {
  let myCart = ['tomatoes', 'onion', 'carrot','tomatoes', 'onion', 'carrot'];
  return (
    <div>
      <h4 className="title">Cart</h4>
          { 
          myCart.map((item, i)=>{
               return (<CartItem item={item}/>)
          })
      }
      <Button color="red" bgColor="#000" />
      <Button color="black" bgColor="#fff" />
    </div>
  )
} 

function Banner({company}){
  return (
    <h1>{company}카드 결제 행사중</h1>
  )
}

function CartItem(props){
  return (
    <div className="flex justify-between items-center p-4 mb-2 border rounded-lg shadow-sm hover:bg-sky-700">
      <p className="text-lg font-medium">{props.item}</p>
      <p className="text-gray-600">$40</p>
      <p className="text-sm text-gray-500">1개</p>
    </div>
  )
}

function Button(props){
  return(
    <button className="p-10 rounded-3xl hover:bg-red" style={{ backgroundColor : props.bgColor , color : props.color }}>버튼</button>
  )
}