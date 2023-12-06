import Product from './Product';

function Productslist(){
    return (
        <div className='products'>
            <Product name="Pollo Jeans" price="5000" url="https://5.imimg.com/data5/CH/NP/MY-35179604/vistara-pollo-fit-cotton-denim-jeans-500x500.jpg"/>
            <Product name="One Plus 7T" price="40000" url="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1662446146/Croma%20Assets/Communication/Mobiles/Images/250997_hdwsxi.png?tr=w-600"/>
            <Product name="Macbook Air" price="130000" url="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"/>
        </div>
    )
}

export default Productslist;