import styles from "../../../styles/newpost.module.css";

function page() {
    return (
        <div className={styles.newpost}>
            <div className={styles.header}>
                <img src="/henessy.jpg" alt="" />
                <h3>Crayonne</h3>
            </div>

            <section>
                <textarea>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis fugit voluptatem, quam sequi
                    exercitationem, obcaecati laborum ad modi, tempora expedita ut ipsam. Recusandae dicta nesciunt
                    soluta eveniet vero eaque dolore.
                </textarea>
            </section>

            <button>
                <img src="/send.svg" alt="" />
                <h3>Upload</h3>
            </button>
        </div>
    );
}

export default page;
