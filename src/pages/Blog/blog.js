import { memo } from 'react'
import { Outlet } from 'react-router';

function Blog() {
  return (
    <>
      <div style={{ fontSize: '1.6rem' }}>
        Blog testing
      </div>
      <Outlet/>
    </>
  )
}

export default memo(Blog);