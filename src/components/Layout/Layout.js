import React from 'react';
import Aux from '../../hoc/Auxi';
import LoginFormUser from '../../containers/LoginUser/LoginUser';
import AdminLogin from '../../containers/AdminLogin/AdminLogin';
import UserRegistration from '../../containers/UserRegistration/UserRegistration';
import Footer from '../Footer/Footer';

const layout = (props) => (
  <Aux>
    <main style={{ marginBottom: '30px' }}>
      {/* <LoginFormUser />
      <AdminLogin /> */}
      <UserRegistration />
    </main>
    <Footer></Footer>
  </Aux>
);

export default layout;
