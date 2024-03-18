import { ReactNode } from 'react';

declare global {
  interface ReactDOM {
    createRoot(container: Element | DocumentFragment | null, options?: { hydrate?: boolean }): ReactRoot;
  }
}

interface ReactRoot {
  render(children: ReactNode): void;
}
