import React from 'react'
import styles from './Timeline.module.css';
import Heading from '../Heading/Heading';
import timeline from '../../images/home/timeline.svg'


const Timeline = () => {
    return (
        <>
            <Heading
                heading1="Partner with AL-MUDAYFER"
                heading2="Timeline"
                description1="Al-Mudafir is an award-winning company that understands what it means to provide solutions on time and within budget to bring your vision to fruition. With our team of experts all under one roof, Premier handles the project from Design to Completion. As owner operators ourselves, we think and act just like you, from concept to completion. So, it’s no wonder that Premier has been a leading full-service company for design, architecture, procurement, project management and capital management for more than 25 years. "
                description2="Trust our project management experts at Al-Mudafir Holdings from Design to Completion!"
                page="timeline"
            />

            <div className={styles.image}>
                <img src={timeline} alt="" />
            </div>
        </>
    )
}

export default Timeline