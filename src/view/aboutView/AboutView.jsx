import React from 'react'
import styles from './aboutView.module.sass'
import aboutImg from 'assets/images/all/about.png'

const AboutView = (props) => {
  // eslint-disable-next-line react/prop-types
  const { title } = props
  return (
    <div className={styles.root}>
      <div className={styles.aboutImg}>
        <img src={aboutImg} alt="" />
      </div>
      <div className={styles.aboutTitle}>
        <p className={styles.title}>{title}</p>
      </div>
    </div>
  )
}

export default AboutView
