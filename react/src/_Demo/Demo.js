import css_styles from '../_module/scss/_.module.scss'
import var_styles from '../_module/scss/_var.module.scss'

export default function Demo() {
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
          ['--property_value']: (var_styles.color_red)
        }}>{"title"}</span>
        <span style={{ color: var_styles.color_red }}>{"tit3le"}</span>
      </li>
      <br />
      
    </>
  )
}