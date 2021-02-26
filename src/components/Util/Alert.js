import PropTypes from 'prop-types'
const Alert = (props) => {
    return(
        <div className="div_alert div_alert_danger  ">
            <p className="text-center"><strong > {props.message}</strong > Hola mundo as second part as third part</p>
        </div>
    );
}
export default Alert;

Alert.propTypes = {
    message : PropTypes.string.isRequired
}  