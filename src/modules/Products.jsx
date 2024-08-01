import { Product } from "./Product.jsx"

const products = [

  {
    id: 1,
    title: 'Кокосвая матча',
    image: './img/photo1.jpg', 
    price: 390,
  }, 
  {
    id: 2,
    title: 'Кокосвая матча',
    image: './img/photo2.jpg', 
    price: 560,
  }, 
  {
    id: 3,
    title: 'Кокосвая матча',
    image: './img/photo3.jpg', 
    price: 30,
  }, 
  {
    id: 4,
    title: 'Кокосвая матча',
    image: './img/photo4.jpg', 
    price: 300,
  }, 
  {
    id: 5,
    title: 'Кокосвая матча',
    image: './img/photo5.jpg', 
    price: 190,
  }, 
  {
    id: 6,
    title: 'Кокосвая матча',
    image: './img/photo6.jpg', 
    price: 390,
  }, 
]


export const Products = () => {


  return (
        <section className="products">
          <div className="container products__container">
            <h2 className="products__title"> Чай </h2>

            <ul className="products__list">
               { products.map((item) => { // вернет массив <Product />
                  return (
                    <Product data={item}  key={item.id} />      // передаем пропс data 
                  )
                }) 
               }
            </ul>
          </div>
        </section>
  )
}