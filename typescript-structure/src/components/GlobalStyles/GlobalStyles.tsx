import { Fragment } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import './GlobalStyles.scss';

const GlobalStyles = ({ children }: RouteProps): JSX.Element => {
    return <Fragment>{children}</Fragment>;
};
export default GlobalStyles;
