import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './smartAnimate.module.sass'

import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
import img1 from 'assets/images/aboutFigma/aboutFigma02.png'
import img from 'assets/images/aboutFigma/smartAnim.png'

import video2 from 'assets/images/aboutFigma/phototype02.mp4'

export default function SmartAnimate() {
  const [showIndex, setShowIndex] = useState(0)

  // const imgList = [img0, img1, img2]

  const textList = ['模擬裝置', '動態轉場功能', ' ']

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <img
          className={styles.imgDecorate}
          src={img} alt=""
        />



        {/* {imgList.map((cur, index) => (
          <img
            key={`${index.toString()}`}
            className={clsx(styles.imgDecorate, index === showIndex && styles.showImg)}
            src={cur} alt="" />
        ))}  */}
      </div>
      <div className={styles.textBox}>
        <p className={styles.title}>{'Smart Animate'}</p>
        <p className={styles.text}>
          {'前後兩個 Frame 裡擁有一樣名字的元件，顏色、大小、透明度...等等數值，都會補足中間形變的效果。有相對應的動畫方式處理。'}
        </p>
        {/* <div className={styles.texts}> */}
        {/* {textList.map((cur, index) => (
            <p
              key={`${index.toString()}`}
              className={clsx(styles.text, index === showIndex && styles.showTextDecorate)}
              onClick={() => setShowIndex(index)}
            >
              {cur}
            </p>
          ))} */}
        {/* </div> */}
      </div>
    </div>
  )
}
