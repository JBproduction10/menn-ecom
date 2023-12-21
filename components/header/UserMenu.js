import Link from "next/link";
import styles from "./styles.module.scss";
import {signIn, signOut } from "next-auth/react";

export default function UserMenu({session}) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to Houtkappers!</h4>
      {session ? (
        <div className={styles.flex}>
          <img src={session?.user?.image} alt="" className={styles.menu__img} />
          <div className={styles.col}>
            <span> Welcome Back,</span>
            <h3>{session?.user?.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : null /* If session exists, show user details; otherwise, show nothing */}

      {!session && ( // Render only if there's no session (user is not logged in)
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}

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
          <Link href="/profile/whishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
}
