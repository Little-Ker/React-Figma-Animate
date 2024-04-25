import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './aboutFrame.module.sass'

import frameIcon from 'assets/images/aboutFigma/frameIcon.png'
import img0 from 'assets/images/aboutFigma/aboutFrame01.png'
import img1 from 'assets/images/aboutFigma/aboutFrame02.png'
import img2 from 'assets/images/aboutFigma/aboutFrame03.png'

export default function AboutFrame() {
  const [showIndex, setShowIndex] = useState(0)

  const imgList = [img0, img1, img2]

  const textList = ['群組功能，提供佈局網格、自動佈局功能', '頁面轉換以 Frame 為一個單位', 'Frame 内的元件都能觸發轉換事件']

  return (
    <div className={styles.root}>
      <div className={styles.img}>
        {imgList.map((cur, index) => (
          <img
            key={`${index.toString()}`}
            className={clsx(styles.imgDecorate, index === showIndex && styles.showImg)}
            src={cur} alt="" />
        ))} 
      </div>
      <div className={styles.textBox}>
        <div className={styles.title}>
          <p>{'Figma工具'}</p>
          <img src={frameIcon} alt="" />
          <p>{'Frame'}</p>
        </div>
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
