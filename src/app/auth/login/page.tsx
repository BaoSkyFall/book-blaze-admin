'use client';

import { Button } from '@/components/ui/button';
import { NAVIGATION_LINK } from '@/enums/navigation.enum';
import { login } from '@/lib/features/session-slice';
import { useAppDispatch } from '@/lib/hooks/useAppDispatch';
import { useAppSelector } from '@/lib/hooks/useAppSelector';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.sessionReducer);
  const router = useRouter();
  const onClickLogin = async () => {
    await dispatch(
      login({
        username: 'kminchelle',
        password: '0lelplR',
      }),
    );
    if (
      localStorage.getItem(process.env.NEXT_PUBLIC_NAME_TOKEN ?? 'access_token')
    ) {
      router.push(NAVIGATION_LINK.HOME);
    }
  };

  return (
    <Button variant="default" onClick={onClickLogin} disabled={isLoading.logIn}>
      Login Admin
    </Button>
  );
};

export default LoginPage;
