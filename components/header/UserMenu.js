import Link from "next/link";
import styles from "./styles.module.scss";
// import {signIn, signOut } from "next-auth/react";

export default function UserMenu() {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Houtkappers!</h4>
      
        <div className={styles.flex}>
          {/* <img src={session?.user?.image} alt="" className={styles.menu__img} /> */}
          <img src="" alt=""/>
          <div className={styles.col}>
            <span>Welcome Back,</span>
            {/* <h3>{session?.user?.name}</h3> */}
            <h3>name</h3>
            <span>Sign out</span>
          </div>
        </div>

        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined}>
            Login
          </button>
        </div>

      <ul>
        <li>
          <Link href="/profile">Account</Link>
        </li>
        <li>
          <Link href="/profile/orders">My Orders</Link>
        </li>
        <li>
          <Link href="/profile/messages">Message Center</Link>
        </li>
        <li>
          <Link href="/profile/address">Address</Link>
        </li>
        <li>
          <Link href="/profile/whishlist">Whishlist</Link>
        </li>
      </ul>
    </div>
  );
}