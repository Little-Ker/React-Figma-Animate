import React, {
  useState 
} from 'react'
import clsx from 'clsx'
import styles from './aboutFigma.module.sass'

import img0 from 'assets/images/aboutFigma/aboutFigma01.png'
import img1 from 'assets/images/aboutFigma/aboutFigma02.webp'
import img2 from 'assets/images/aboutFigma/aboutFigma03.gif'

export default function AboutFigma() {
  const [showIndex, setShowIndex] = useState(0)

  const imgList = [img0, img1]

  const textList = ['線上介面設計工具(雲端檔案)', '允許多人協同合作', '']

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
        <p className={styles.title}>{'什麼是 Figma ?'}</p>
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
