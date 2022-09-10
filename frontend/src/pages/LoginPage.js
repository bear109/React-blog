import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

function LoginPage() {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
}

export default LoginPage;
