import Rating from '../Rating/Rating'
import './DriverCard.css'


const DriverCard = ({ name, rating, img, car }) => {


    return (
        <div className='driverCardBox'>
            <img src={img} className="profile" alt="profile" width={100}/>

            <div>
                <p>{name}</p>
                <Rating>{rating}</Rating>
                <p> <span>{car.model}</span> - <span>{car.licensePlate}</span></p>
            </div>

        </div>
    )

}

export default DriverCard