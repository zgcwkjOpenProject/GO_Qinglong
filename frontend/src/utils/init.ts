import * as Sentry from '@sentry/react';
import { loader } from '@monaco-editor/react';
import * as monaco from 'monaco-editor';

export function init(version: string) {
  // sentry监控 init
  // Sentry.init({
  //   dsn: 'https://3406424fb1dc4813a62d39e844a9d0ac@o1098464.ingest.sentry.io/6122818',
  //   integrations: [
  //     new Integrations.BrowserTracing({
  //       shouldCreateSpanForRequest(url) {
  //         return !url.includes('/api/ws') && !url.includes('/api/static');
  //       },
  //     }),
  //   ],
  //   release: version,
  //   tracesSampleRate: 0.1,
  //   beforeBreadcrumb(breadcrumb, hint?) {
  //     if (breadcrumb.data && breadcrumb.data.url) {
  //       const url = breadcrumb.data.url.replace(/token=.*/, '');
  //       breadcrumb.data.url = url;
  //     }
  //     return breadcrumb;
  //   },
  // });

  // monaco 编辑器配置cdn和locale
  loader.config({
    monaco,
    'vs/nls': {
      availableLanguages: {
        '*': 'zh-cn',
      },
    },
  });
}
