import styles from "../styles/browse.module.scss";
import db from "../utils/db";
// import Product from "../models/Product";
// import Category from "../models/Category";
import Header from "../components/header";
// import SubCategory from "../models/SubCategory";
// import {
//     filterArray,
//     randomize,
//     removeDuplicates,
// } from "../utils/arrays_utils";
// import Link from "next/link";
// import ProductCard from "../components/ProductCard";
// import CategoryFilter from "../components/browse/categoryFilter";
// import S
import { useRouter } from "next/router";
// import {Pagination} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import axios from "axios";

export default function Browse({
    country
}){
    const router = useRouter();
    const filter = ({
        search,
    }) =>{
        const path = router.pathname;
        const {query} = router;
        if(search) query.search = search;
        router.push({
            pathname: path,
            query: query,
        });
    };

    const searchHandler = (search) =>{
        if(search == ""){
            filter({search: {}})
        }else{
            filter({search});
        }
    };

    return (
        <div className={styles.browse}>
            <Header country={country}/>
        </div>
    )
}

