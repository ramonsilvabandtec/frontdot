import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-graph" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Execuções',
    to: '/execucoes',
    icon: <CIcon name="cil-warning" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Projetos',
    to: '/theme/typography',
    icon: <CIcon name="cil-monitor" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Relatórios',
    to: '/theme/typography',
    icon: <CIcon name="cil-graph" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Monitor',
    to: '/theme/typography',
    icon: <CIcon name="cil-graph" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Clusters',
    to: '/theme/typography',
    icon: <CIcon name="cil-graph" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Ajustes',
    to: '/theme/typography',
    icon: <CIcon name="cil-graph" customClasses="c-sidebar-nav-icon"/>,
  }
]

export default _nav
