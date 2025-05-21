import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

const AuthPage = () => {
  const [login, setLogin] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6 small-screen-padding">
      <div className="bg-white p-2 rounded-xl shadow-lg w-full max-w-md small-screen-padding small-screen-width-full">
        {login ? <LoginForm state={setLogin} /> : <RegisterForm state={setLogin} />}
      </div>
    </div>
  );
};

export default AuthPage;
