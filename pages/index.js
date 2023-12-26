import React from "react";
import styles from "../styles/Home.module.scss";
import Header from "../components/header";
import Main from "../components/home/main";
import {useMediaQuery} from "react-responsive";
import { useSession, signIn, signOut } from "next-auth/react";
import Footer from "../components/footer";
import axios from "axios";

export default function home({country}){
    const {data: session} = useSession();
    const isMedium = useMediaQuery({query: '(max-width: 850px)'});
    const isMobile = useMediaQuery({query: '(max-width: 550px)'});

    return (
        <>
            <Header country={country}/>
            <div className={styles.home}>
                <div className={styles.container}>
                    <Main/>
                </div>
            </div>
            <Footer country={country}/>
        </>
    )
}

export async function getServerSideProps(){
    //db.connectDb();
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
                // country: {name: data.name, flag: data.flag.emojitwo}
            
                country:{
                    name:"South Africa",
                    flag:"../south-africa.png"
                }
            }
        }
}