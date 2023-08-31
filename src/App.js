import { memo } from 'react';
import AllRoutes from './components/AllRoutes/allRoutes';
import './styles/customBootstrap.scss';
import './styles/normalize.min.css'
import './styles/base.scss';

function App() {
  console.log('APP RENDERED');
  return (
    <AllRoutes/>
  );
}

export default memo(App);