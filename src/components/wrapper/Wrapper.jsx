import css from './Wrapper.module.css'

export const Wrapper = ({ children }) => {
	return (
		<div className={css.Wrapper}>
			{children}
		</div>)
}