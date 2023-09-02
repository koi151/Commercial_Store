import { memo } from 'react';
import { Outlet } from 'react-router-dom';


function Home() {
  return (
    <main className='main-wrapper'>
      <div className='product-wrapper'>
        <Outlet />
      </div>
    </main>
  );
}

export default memo(Home);
