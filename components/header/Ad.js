import Link from "next/link";
import styles from "./styles.module.scss";

export default function Ad(){
    return (
        <Link href="/browse">
            <div className={styles.ad}>
                <span>Super Deal! Free shipping on Orders Over R500</span>
            </div>
        </Link>
    );
};