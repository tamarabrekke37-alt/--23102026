/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';

export default function App() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // If an API key is available in Vite environment, auto-populate in localStorage if not set
    try {
      const existing = localStorage.getItem('gemini_api_keys');
      const envKey = (import.meta as unknown as { env: Record<string, string> }).env?.VITE_GEMINI_API_KEY;
      if (envKey && (!existing || existing === '[]')) {
        localStorage.setItem('gemini_api_keys', JSON.stringify([envKey]));
      }
    } catch {
      // Storage access could be restricted in some browser settings
    }
  }, []);

  return (
    <main className="w-screen h-screen overflow-hidden bg-[#0b0f19] m-0 p-0 flex flex-col">
      <iframe
        ref={iframeRef}
        src="/app.html"
        title="سامانه تولید محتوا ایکس"
        className="w-full h-full border-0 flex-1 block"
        style={{ width: '100vw', height: '100vh', border: 'none', margin: 0, padding: 0 }}
        allow="clipboard-read; clipboard-write; camera; microphone; fullscreen"
      />
    </main>
  );
}

