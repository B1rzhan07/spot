'use client'

import React from 'react'
import Modal from './Modal'
import {
  useSessionContext,
  useSupabaseClient,
} from '@supabase/auth-helpers-react'
import { useRouter } from 'next/navigation'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import useAuthModal from '@/hooks/useAuthModal'

const AuthModal = () => {
  const supaBaseClient = useSupabaseClient()
  const router = useRouter()
  const { session } = useSessionContext()
  const { onClose, isOpen } = useAuthModal()
  const onChange = (open: boolean) => {
    if (!open) {
      onClose()
    }
  }
  return (
    <Modal
      title="Welcome Back"
      description="Sign in to your account"
      isOpen={isOpen}
      onChange={onChange}
    >
      <Auth
        theme="dark"
        providers={['github']}
        magicLink
        supabaseClient={supaBaseClient}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: '#404040',
                brandAccent: '#22c55e',
              },
            },
          },
        }}
      />
    </Modal>
  )
}

export default AuthModal
