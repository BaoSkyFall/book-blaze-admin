'use client';

import { Button } from '@/components/ui/button';
import { login } from '@/lib/features/session-slice';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onClickLogin = async () => {
    await dispatch(
      login({
        username: 'kminchelle',
        password: '0lelplR',
      }),
    );
    router;
  };

  return (
    <Button variant="default" onClick={onClickLogin}>
      Login Admin
    </Button>
  );
};

export default LoginPage;
