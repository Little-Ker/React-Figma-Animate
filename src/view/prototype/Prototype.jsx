import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './prototype.module.sass'

import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
import img1 from 'assets/images/aboutFigma/aboutFigma02.png'
// import img2 from 'assets/images/aboutFigma/aboutFigma03.png'

import img2 from 'assets/images/aboutFigma/aboutFigma03.gif'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

export default function Prototype() {
  const [showIndex, setShowIndex] = useState(0)

  const imgList = [img0, img1, img2]

  const textList = ['模擬裝置', '動態轉場功能', ' ']

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        {/* <video controls width="70%">
          <source src={'https://cdn.sanity.io/files/599r6htc/localized/c2a5af12f58df8a976b489cb2b77e27f59bb87ae.mp4'} type="video/mp4" />
        </video> */}

        {/* <div className={styles.video}>
          <span className={styles.videoImg}>
            <span className={styles.playBtn}></span>
          </span>
          
        </div> */}
        <img
          className={clsx(styles.imgDecorate)}
          src={img2} alt="" />


        {/* {imgList.map((cur, index) => (
          <img
            key={`${index.toString()}`}
            className={clsx(styles.imgDecorate, index === showIndex && styles.showImg)}
            src={cur} alt="" />
        ))}  */}
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'Prototype'}</p>
        <div className={styles.texts}>
          {textList.map((cur, index) => (
            <p
              key={`${index.toString()}`}
              className={clsx(styles.text, index === showIndex && styles.showTextDecorate)}
              onClick={() => setShowIndex(index)}
            >
              {cur}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}
