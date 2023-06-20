'use client'

import React, { useEffect, useState } from 'react'
import AuthModal from '@/components/AuthModal'

const ModalProvider = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) return null

  return (
    <div>
      <AuthModal />
    </div>
  )
}

export default ModalProvider
