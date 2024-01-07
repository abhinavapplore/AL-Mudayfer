import React from 'react'
import styles from './Trusted.module.css';
import company1 from '../../images/investment/company1.svg'
import company2 from '../../images/investment/company2.svg'
import company3 from '../../images/investment/company3.svg'
import company4 from '../../images/investment/company4.svg'
import company5 from '../../images/investment/company5.svg'
import company6 from '../../images/investment/company6.svg'
import company7 from '../../images/investment/company7.svg'
import company8 from '../../images/investment/company8.svg'

import Marquee from "react-fast-marquee";

const Trusted = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.heading} style={{animationDelay:'0s'}}>Trusted by 45M+ users</div>
                <div className={styles.images}>
                    <Marquee>
                        <div className={styles.image}>
                            <img src={company1} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={company2} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={company3} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={company4} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={company5} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={company6} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={company7} alt="" />
                        </div>
                        <div className={styles.image}>
                            <img src={company8} alt="" />
                        </div>
                    </Marquee>
                </div>
            </div>
        </>
    )
}

export default Trusted