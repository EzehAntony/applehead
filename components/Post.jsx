import { useEffect } from "react";
import styles from "../styles/posts.module.css";

function Post() {
    const colors = ["#C1FFE3", "##F3F5F7", "#E7F5FB", "#FFE9F4", "#FFF4E0"];

    const randomColor = Math.floor(Math.random() * colors.length);

    return (
        <div className={styles.event}>
            <div className={styles.header} style={{ "background-color": colors[randomColor] }}>
                <img src="/henessy.jpg" alt="" />
                <h3>crayonne</h3>
            </div>

            <section>
                <div className={styles.bio}>
                    <span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat velit dolorum quod
                    neque nihil! Doloremque tempora enim dolore nam error odio itaque molestiae? Nam nisi deserunt
                    mollitia dolore, ipsa odio.
                </div>
                <span>"</span>

                <div className={styles.action}>
                    <img src="/arrow.svg" alt="" />
                    <img src="/comment.png" alt="" />
                    <img src="/delete.png" alt="" />
                </div>
            </section>
        </div>
    );
}

export default Post;
