import React from 'react';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {
    ProfilePage,
    LoginPage,
    ErrorPage,
    RegistrationPage,
    TestPage,
    EnterNewPasswordPage,
    ResetPasswordPage
} from './ui-index';

export const App = () => {
    return (
        <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column', marginRight: '10px'}}>
                <NavLink to={'/profile'}>profile</NavLink>
                <NavLink to={'/login'}>login</NavLink>
                <NavLink to={'/error'}>error</NavLink>
                <NavLink to={'/registration'}>registration</NavLink>
                <NavLink to={'/enter-new-password'}>enter-new-password</NavLink>
                <NavLink to={'/reset-password'}>reset-password</NavLink>
                <NavLink to={'/test'}>test</NavLink>
            </div>
            <Routes>
                <Route path={'/profile'} element={<ProfilePage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'/error'} element={<ErrorPage/>}/>
                <Route path={'/registration'} element={<RegistrationPage/>}/>
                <Route path={'/enter-new-password'} element={<EnterNewPasswordPage/>}/>
                <Route path={'/reset-password'} element={<ResetPasswordPage/>}/>
                <Route path={'/test'} element={<TestPage/>}/>
                <Route path={'*'} element={<Navigate to={'/login'}/>}></Route>
            </Routes>
        </div>
    );
}

