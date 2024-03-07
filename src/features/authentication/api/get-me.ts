import { TAuthUser } from '@/features/authentication'

const user: TAuthUser = {
  id: '123',
  firstName: 'Nguyen',
  lastName: 'Trong',
  email: 'nguyen@gmail.com',
  bio: 'Hello my name ',
  role: 'administrator',
}

export async function getMe(token?: string): Promise<TAuthUser> {
  console.log(token)
  return user
}
