import Link from "next/link";
import styles from "./styles.module.scss";
import {IoLoactionSharp} from "react-icons/io5";

export default function Copyright({country}){
    return(
        <div className={styles.footer__copyright}>
            <section>@2023 HOUTKAPPERS. All Rights Reserved.</section>
            <section>
                <ul>
                    {data.map((link) => (
                        <li>
                            <Link href="/">{link.name}</Link>
                        </li>
                    ))}
                    {/* <li className="">
                        <a><IoLoactionSharp/> {country.name}</a>
                    </li> */}
                </ul>
            </section>
        </div>
    )
}

const data = [
    {
        name: "Privacy Center",
        link: "",
    },
    {
        name: "Privacy & Cookie Policy",
        link:""
    },
    {
        name: "Terms & Conditions",
        link: "",
    },
    {
        name: "Copyright Notice",
        link: "",
    },
    {
        name: "Developed by Jonathan",
        link: ""
    }
];
