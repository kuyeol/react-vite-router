import type { TRouteObject } from '@lomray/vite-ssr-boost/interfaces/route-object';
import Fallback from '@components/fallback';
import AppLayout from '@components/layouts/app';
import NotFound from '@pages/not-found';
import NotLazyPage from '@pages/not-lazy';
import RouteManager from '@services/route-manager.ts';
import DetailsRoutes from './details';

/**
 * Application routes
 */
const routes: TRouteObject[] = [
  {
    ErrorBoundary: NotFound,
    Component: AppLayout,
    children: [
      {
        index: true,
        lazy: () => import('@pages/home'),
      },
      {
        path: RouteManager.path('details'),
        children: DetailsRoutes,
      },
      {
        path: RouteManager.path('errorBoundary'),
        lazy: () => import('@pages/error-boundary'),
      },
      {
        path: RouteManager.path('nestedSuspense'),
        lazy: () => import('@pages/nested-suspense'),
      },
      {
        path: RouteManager.path('redirect'),
        lazy: () => import('@pages/redirect'),
      },
      {
        path: RouteManager.path('notLazy'),
        Component: NotLazyPage,
      },
      {
        path: RouteManager.path('onlyClientPage'),
        lazy: () => import('@pages/only-client-page'),
        onlyClient: Fallback,
      },
    ],
  },
];

export default routes;
