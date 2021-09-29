import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectAlerts } from '../../features/alert/alertSlice';
import * as A from './Alert.styled';

const Alert = () => {
  const alerts = useSelector(selectAlerts);
  return (
    <Fragment>
      {alerts !== null &&
        alerts.length > 0 &&
        alerts.map((alert) => (
          <A.Alert key={alert.id} theme={alert.alertType}>
            {alert.msg}
          </A.Alert>
        ))}
    </Fragment>
  );
};

export default Alert;
