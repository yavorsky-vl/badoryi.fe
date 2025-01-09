import React from 'react'
import { CCloseButton, CSidebar, CSidebarBrand, CSidebarFooter, CSidebarHeader, CSidebarToggler } from '@coreui/react'
import { useDispatch, useSelector } from 'react-redux';
import CIcon from '@coreui/icons-react';

import { logo } from 'assets/brand/logo'
import { sygnet } from 'assets/brand/sygnet'
import { initialState } from '@dfw/types/systemVariable.types';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state: initialState) => state.sidebarShow);
  const unfoldable = useSelector((state: initialState) => state.sidebarUnfoldable)

  return (
    <CSidebar
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >

      <CSidebarHeader className="border-bottom">
        <CSidebarBrand to="/">
          <CIcon customClassName="sidebar-brand-full" icon={logo} height={32} />
          <CIcon customClassName="sidebar-brand-narrow" icon={sygnet} height={32} />
        </CSidebarBrand>

        <CCloseButton
          className="d-lg-none"
          dark
          onClick={() => dispatch({ type: 'set', sidebarShow: false })}
        />
      </CSidebarHeader>
      <div>test</div>
      <CSidebarFooter className="border-top d-none d-lg-flex">
        <CSidebarToggler
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebarFooter>

    </CSidebar>
  )
}

export default React.memo(AppSidebar)