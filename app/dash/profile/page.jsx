"use client";

import { useEffect, useState } from "react";
import Post from "../../../components/Post";
import styles from "../../../styles/profile.module.css";
import axios from "axios";
import { getCookie } from "cookies-next";
import { promises } from "form-data";

const getData = async (id) => {
    const res = await axios({
        url: "http://localhost:3000/api/user/getOne",
        method: "POST",
        withCredentials: true,
        data: {
            userId: "637783dfdca884704c6e01f8",
        },
    });
    return res.data;
};

const getPost = async (id) => {
    const res = await axios({
        url: "http://localhost:3000/api/post/getAll",
        method: "POST",
        withCredentials: true,
        data: {
            userId: "637783dfdca884704c6e01f8",
        },
    });
    return res.data;
};

export default function Page() {
    /*     const id = getCookie("userId");
    useEffect(() => {
        console.log(id);
    }, []); */
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            const profileData = await getData();
            const postData = await getPost();

            setData(await Promise.all([profileData, postData]));
        }

        fetchData();
        console.log(data);
    }, []);

    return (
        <div className={styles.profile}>
            <header>
                <div className={styles.profileRing}>
                    <div className={styles.profileImg}>
                        <img src={data?.profile} alt="" />
                    </div>
                </div>

                <div className={styles.profileName}>
                    {data?.firstname} {data?.lastname}
                </div>
                <div className={styles.profileUsername}>{data?.username}</div>
                <div className={styles.profileNumbers}>
                    <div className={styles.following}>
                        <p>{data && data.followings.length > 0 ? data.followings.length : 0} </p>
                        <span>Followings</span>
                    </div>
                    <div className={styles.followers}>
                        <p>{data && data.followers.length > 0 ? data.followers.length : 0} </p>
                        <span>Followers</span>
                    </div>
                    <div className={styles.posts}>
                        <p>5</p>
                        <span>Posts</span>
                    </div>
                </div>
            </header>

            <div className={styles.buttonContainer}>
                <button className={styles.follow}>Follow</button>
                <button className={styles.message}>Message</button>
                <img src="/add.svg" className={styles.suggested} alt="" />
            </div>

            <div className={styles.postSection}>
                <Post />
                <Post />
            </div>
        </div>
    );
}
