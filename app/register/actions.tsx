'use server'

import { redirect } from 'next/navigation'

export async function redirectToLogin() {
  redirect(`/login`)
}
