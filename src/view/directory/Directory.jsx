import React, {
  useMemo 
} from 'react'
import styles from './directory.module.sass'

const Directory = () => {
  const list = useMemo(() =>{
    return [{
      title: 'Figma 簡介',
      subTitle: ['什麼是 Figma', 'Figma 工具', 'Prototype'],
    }, {
      title: 'Figma 動畫',
      subTitle: ['Smart Animate', '範例', '匯出動畫檔'],
    }, {
      title: 'Lottie',
      subTitle: ['什麼是 Lottie', 'Lottie 套件', 'Lottie 使用'],
    }]
  }, [])

  return (
    <div className={styles.root}>
      {list.map((cur, index) => (
        <div className={styles.item} key={`${index.toString()}`}>
          <p className={styles.title}>{cur.title}</p>
          <div className={styles.subItem}>
            {cur.subTitle.map((cur2, index2) =>(
              <p className={styles.subTitle} key={`${index2.toString()}`}>{cur2}</p>
            ))}
          </div>
        </div>
      ))}
      {/* <p className={styles.title}>
        <span>{'Figma'}</span>
        <span>{'動畫入門指南'}</span>
      </p>
      <div className={styles.enterBtn}>{'Enter'}</div> */}
    </div>
  )
}

export default Directory
