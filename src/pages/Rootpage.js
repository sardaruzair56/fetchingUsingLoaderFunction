import React from 'react';
import MainNavigation from '../components/MainNavigation';
import { Outlet } from 'react-router-dom';

const Rootpage = () => {
  return (<>
    <MainNavigation/>
    <main>
        <Outlet/>
    </main>
</>
  )
}

export default Rootpage
