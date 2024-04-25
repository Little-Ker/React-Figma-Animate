import React, {
  useCallback 
} from 'react'
import styles from './home.module.sass'

const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  const { swiperButtonNext } = props

  return (
    <div className={styles.root}>
      <p className={styles.title}>
        <span>{'Figma'}</span>
        <span>{'動畫入門指南'}</span>
      </p>
      <div onClick={swiperButtonNext} className={styles.enterBtn}>{'Enter'}</div>
    </div>
  )
}

export default Home
