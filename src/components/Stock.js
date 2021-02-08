import React from 'react'
// const onClick = () => {
//   // console.log(props)
// }
const Stock = (props) => {
  const onClick = (event) => {
    // console.log(props.stockIndex)

    props.sellAStock ? props.handleSellingAStock(props.stockIndex) : props.handleBuyingAStock(props.stockIndex)
  }
  return (
    <div onClick={(event) => onClick(event)} >
  
      <div  className="card">
        <div className="card-body">
          <h5 className="card-title">{
              props.stock.name
            }</h5>
          <p className="card-text">{
              props.stock.ticker 
            } : {
              props.stock.price 
            }</p>
        </div>
      </div>
    </div>
  )
}
  
  
export default Stock
