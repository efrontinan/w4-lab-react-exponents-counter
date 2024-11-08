const Exponent = ({count, number}) => {

  const operator = `${count}*`

  return (
  
    <div className="exponent-counter-container">
     <p className="exponent-label">n<sup>{number}</sup></p>
     <p className="exponent-result">{operator.repeat(number)}  = <span className="total">{count**number}</span></p>
   </div>
    
  )
  
}

 export default Exponent;