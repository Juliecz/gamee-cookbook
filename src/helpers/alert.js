import Alert from 'react-s-alert';

export default (type, message) => {
	switch (type) {
		case 'error':
			return Alert.error(message);
		case 'warning':
			return Alert.warning(message);
		case 'success':
			return Alert.success(message);
		case 'info':
			return Alert.info(message);
		case 'closeAll':
			return Alert.closeAll();
		default:
			return;
	}
};