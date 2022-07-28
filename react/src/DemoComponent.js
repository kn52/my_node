import styles from './_.module.scss'

const getColor = (property,property_value) => {
  return { 
    [property]: property_value 
  }
}



export default function DemoComponent() {
  return (
    <>
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
        />
        <button >
          Delete
        </button>
        <span className={styles.colorProperty} style={{
          ['--property_value']:(
            color:'#ff0000'
            )
          }}>{"title"}</span>
      </li>
    </>
  )
}