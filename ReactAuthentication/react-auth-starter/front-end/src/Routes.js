import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import { UserInfoPage } from './pages/UserInfoPage';
import { PrivateRoute } from './auth/PrivateRoute';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <PrivateRoute path="/" exact>
                    <UserInfoPage />
                </PrivateRoute>
                <Route path="/login" exact>
                    <LogInPage/>
                </Route>
                <Route path="/signup" exact>
                    <SignUpPage/>
                </Route>
            </Switch>
        </Router>
    );
}