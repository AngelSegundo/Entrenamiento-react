import './CreditCard.css'

const CreditCard = (props) => {

    return (
        
        
                <div className='creditCard-box' style={{ color: `${props.color}`, backgroundColor: `${props.bgColor}` }}>
                    <p className="type">{props.type}</p>
                    <p className="number">{props.number}</p>
                    <p className="expirationMonth">{props.expirationMonth}</p>
                    <p className="expirationYear">{props.expirationYear}</p>
                    <p className="bank">{props.bank}</p>
                    <p className="owner">{props.owner}</p>
                </div>
        
        
    )



}


export default CreditCard