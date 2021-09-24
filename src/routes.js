import React from 'react';

const Execucoes = React.lazy(() => import('./views/pages/execucoes/Execucoes'));
const CriarTestes = React.lazy(() => import('./views/pages/testes/CriarTestes'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/execucoes', name: 'Execucoes', component: Execucoes },
  { path: '/criartestes', name: 'CriarTestes', component: CriarTestes },
];

export default routes;
