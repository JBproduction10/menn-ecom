import React from "react";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Main from "../components/home/main";
import Category from "../components/home/category";
import {useMediaQuery} from "react-responsive";
import { useSession, signIn, signOut } from "next-auth/react";
import Footer from "../components/footer";
import axios from "axios";
import db from '../utils/db';
import {
    gamingSwiper,
    homeImprovSwiper,
    women_accessories,
    women_dresses,
    women_shoes,
    women_swiper,
  } from "../data/home";
import ProductsSwiper from "../components/productsSwiper";
import Product from "../models/Product";
import ProductCard from "../components/productCard";

export default function home({country, products}){
    console.log('products', products);
    const {data: session} = useSession();
    const isMedium = useMediaQuery({query: '(max-width: 850px)'});
    const isMobile = useMediaQuery({query: '(max-width: 550px)'});

    return (
        <>
            <Header country={country}/>
            <div className={styles.home}>
                <div className={styles.container}>
                    <Main/>
                    {/* <FlashDeals/> */}
                    <div className={styles.home__category}>
                        <Category
                            header='Dresses'
                            products={women_dresses}
                            background="#5a31f4"
                        />
                        {!isMedium && (
                            <Category
                                header='Shoes'
                                products={women_shoes}
                                background="#3c811f"
                            />
                        )}
                        {isMobile && (
                            <Category
                                header='Shoes'
                                products={women_shoes}
                                background='#3c811f'
                            />
                        )}
                        <Category
                            header='Accessories'
                            products={women_accessories}
                            background='#000'
                        />
                    </div>
                    <ProductsSwiper products={women_swiper}/>
                    <div className={styles.products}>
                        {products.map((product) => (
                            <ProductCard product={product} key={product.id}/>
                        ))}
                    </div>
                </div>
            </div>
            <Footer country={country}/>
        </>
    )
}

export async function getServerSideProps(){
    db.connectDb();
    let products = await Product.find().sort({ createAt: -1}).lean()
    let data = await axios
        .get("https://api.ipregistry.co/?key=ahxb25ftt99tilu4")
        .then((res) => {
            return res.data.location.country;
        })
        .catch((err) =>{
            console.log(err);
        });

        return{
            props:{
                products: JSON.parse(JSON.stringify(products)),
                // country: {name: data.name, flag: data.flag.emojitwo}
                country:{
                    name:"South Africa",
                    flag:"../south-africa.png"
                }
            }
        }
}