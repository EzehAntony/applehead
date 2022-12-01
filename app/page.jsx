"use client";

import styles from "../styles/splash.module.css";
import { gsap, TimelineMax } from "gsap";
import { useEffect, useRef } from "react";
import Router, { useRouter } from "next/navigation";
function Splash() {
    const router = useRouter();
    const t1 = new TimelineMax({});
    const ref = useRef();
    const g = gsap.utils.selector(ref);

    //gsap
    useEffect(() => {
        t1.to(g("#first"), { y: "-100%", duration: 0.8 })
            .to(g("#second"), { y: "-100%", duration: 0.8 }, 0.2)
            .to(g("#first"), { y: "-100%", duration: 0.8 })
            .to(g("#third"), { y: "-100%", duration: 0.8 }, 0.4)
            .fromTo(
                g("#logo"),
                { rotate: -100, y: -50, opacity: 0 },
                {
                    opacity: 1,
                    y: 20,
                    ease: "bounce",
                    rotate: 0,
                    duration: 1,
                    onComplete: () => {
                        router.push("/auth/register");
                    },
                },
                0.5
            );
    }, []);
    return (
        <div ref={ref} className={styles.container}>
            <div className={styles.overlay}>
                <div id="first"></div>
                <div id="second"></div>
                <div id="third"></div>
            </div>
            <img id="logo" src="/logo4.png" alt="" />
            <h3>droplike</h3>
        </div>
    );
}

export default Splash;
