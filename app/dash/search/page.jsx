import styles from "../../../styles/search.module.css";
import User from "../../../components/User";

function page() {
    return (
        <div className={styles.search}>
            <div className={styles.header}>
                <h2>Find a user!</h2>
                <input type="text" placeholder="Search" name="" id="" />
            </div>

            <section>
                <header>
                    <h3>users</h3>
                </header>

                <div className={styles.container}>
                    <User />
                    <User />
                    <User />
                    <User />
                </div>
            </section>
        </div>
    );
}

export default page;
