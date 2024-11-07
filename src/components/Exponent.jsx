const Exponent = ({count, number}) => (
    <div className="exponent-counter-container">
     <p className="exponent-label">n<sup>{number}</sup></p>
     <p className="exponent-result">{count} * {count} *  = <span className="total">{count**number}</span></p>
   </div>
 );
 
 export default Exponent;