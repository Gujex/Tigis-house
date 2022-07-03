import React, {useState} from 'react';
import Carousel from 'react-elastic-carousel';
import Item from "./item";

const ProductCarousel = () => {
    const [products, setProducts] = useState([
        {item: 11},
        {item: 22},
        {item: 33},
        {item: 44},
        {item: 11},
        {item: 22},
        {item: 33},
        {item: 44},
    ])


    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2, itemsToScroll: 2},
        {width: 768, itemsToShow: 3},
        {width: 1200, itemsToShow: 4}
    ];


    return (
        <Carousel className="px-4" breakPoints={breakPoints} itemsToScroll={2} isRTL={false}>
            {products.map(el => <Item>
                <div className="text-center position-absolute bottom-0 p-5">
                    <h6  > some product</h6>
                    <h6 >30$</h6>
                </div>
            </Item>)}
        </Carousel>
    );
};

export default ProductCarousel;