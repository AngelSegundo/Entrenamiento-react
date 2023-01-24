import { useState } from 'react'
import './Carousel.css'

const Carousel = ({ images }) => {

    const [count, setCount] = useState(0)

    function plus() {
        if (count < images.length - 1) {
            setCount(count + 1)
        } else {
            setCount(0)
        }
    }

    function minus() {
        if (count > 0) {
            setCount(count - 1)
        } else {
            setCount(images.length - 1)
        }
    }

    return (
        <div className='count'>
            <h2>Carousel</h2>

            <button onClick={() => minus()}>Left {count}</button>

            <img src={images[count]} className="carousel" alt="profile" width={100} />

            <button onClick={() => plus()}>Right {count}</button>

        </div>
    )
}

export default Carousel