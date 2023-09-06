import React from "react";
import styles from "../../Styles/Home.module.css";
import img from "../../Assets/img.jpg";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.scrollContainer}>
                <h4>Only Quality Food</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus itaque iste nisi, et voluptas, aut, veritatis
                    labore corrupti nulla a dicta totam laudantium. Suscipit
                    amet consequuntur ullam sed libero voluptatum!
                </p>
                <div className={styles.action}>
                    <button>VIEW MENU</button>
                    <button>RESERVATIOM</button>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.contentPara}>
                    <span>OUR STORY</span>
                    <h2>Welcome To Royal</h2>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nam ab odit commodi laboriosam qui. Soluta illum,
                        doloremque voluptas alias vel quisquam facere, eius,
                        amet quibusdam reprehenderit minus earum nisi illo?
                        Excepturi quisquam, sit modi consectetur dolores
                        dolorem! Adipisci praesentium cum voluptatum quidem
                        soluta quos incidunt? Recusandae commodi dignissimos,
                        atque reprehenderit at repellendus accusantium unde
                        aliquid sunt nam odit ea dolor.
                    </p>
                </div>
                <div className={styles.img}>
                    <img src={img} alt="img" />
                </div>
            </div>
        </div>
    );
};
export default Home;
