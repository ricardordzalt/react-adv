import { lazy, LazyExoticComponent } from "react";

type JSXComponent = () => JSX.Element;

interface Routes {
  path: string;
  component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
  children?: Routes[];
};

const Lazyload1 = () => import(/* webpackChunkName: "Lazyload1" */'../lazy-load/Lazyload1');
const Lazyload2 = () => import(/* webpackChunkName: "Lazyload2" */'../lazy-load/Lazyload2')
const Lazyload3 = () => import(/* webpackChunkName: "Lazyload3" */'../lazy-load/Lazyload3')
;
const LazyPage1 = lazy(Lazyload1);
const LazyPage2 = lazy(Lazyload2);
const LazyPage3 = lazy(Lazyload3);

export const routes: Routes[] = [
  {
    path: '/lazy1',
    component: LazyPage1,
    name: 'Lazy Page 1',
  },
  {
    path: '/lazy2',
    component: LazyPage2,
    name: 'Lazy Page 2',
  },
  {
    path: '/lazy3',
    component: LazyPage3,
    name: 'Lazy Page 3',
  },
];