'use client';

import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import ReactLoading from 'react-loading';

export default function Home() {
  const { theme } = useTheme();
  const router = useRouter();

  router.push('/dashboard');
  return (
    <main className="flex items-center justify-center">
      <ReactLoading
        type={'spinningBubbles'}
        color={theme === 'dark' ? '#fff' : '#000'}
      />
    </main>
  );
}
