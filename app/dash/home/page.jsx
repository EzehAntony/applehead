"use client";

import styles from "../../../styles/home.module.css";
import { useEffect, useState } from "react";
import Post from "../../../components/Post";

function index() {
    return (
        <>
            <div className={styles.index}>
                <header>
                    <img src="/box-white.svg" alt="" />
                    <input type="text" />
                    <button>Post</button>
                </header>

                <div className={styles.main}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
        </>
    );
}

export default index;
