import React, {
  useCallback 
} from 'react'
import styles from './thankYou.module.sass'

const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  const { swiperButtonNext } = props

  return (
    <div className={styles.root}>
      <p className={styles.title}>
        {/* <span>{'Figma'}</span> */}
        <span>{'Thank you for listening.'}</span>
        <span className={styles.date}>{'2024-04-10'}</span>
      </p>
      {/* <div onClick={swiperButtonNext} className={styles.enterBtn}>{'Enter'}</div> */}
    </div>
  )
}

export default Home
