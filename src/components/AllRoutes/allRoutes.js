import { memo } from 'react'
import { routes } from '../../routes/routes'
import { useRoutes } from 'react-router'

function AllRoutes() {
  const elements = useRoutes(routes);
  return elements;
}

export default memo(AllRoutes);