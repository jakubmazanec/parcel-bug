import type { NextWebVitalsMetric } from 'next/app';

declare module 'next/app' {
  export interface AppInitialProps {
    pageProps: unknown;
  }
}

export async function reportWebVitals({ value, name }: NextWebVitalsMetric) {}
