import css from '../Wrapper/Wrapper.module.css'
import PropTypes from 'prop-types'

export const Wrapper = ({ children }) => <div className={css.Wrapper}>{children}</div>

Wrapper.propTypes = {
	children: PropTypes.node,
}