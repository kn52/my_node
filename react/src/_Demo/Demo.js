import css_styles from '../_module/scss/_.module.scss'
import var_styles from '../_module/scss/_var.module.scss'

export default function Demo() {
  console.log(typeof var_styles?.color_red)
  return (
    <>
      <li className={css_styles.item}>
        <input
          type="checkbox"
          className={css_styles.checkbox}
        />
        <button >
          Delete
        </button>
        <span className={css_styles.colorProperty} style={{
          ['--property_value']: ("#ff0000")
        }}>{"title"}</span>
      </li>
      <br />
      
    </>
  )
}