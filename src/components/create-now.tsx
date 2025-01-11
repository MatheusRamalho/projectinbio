'use client'

import { useState } from 'react'
// import { signIn } from 'next-auth/react'

import Button from '@/components/button'
import FieldInput from '@/components/field-input'

export default function CreateNow() {
  const [link, setLink] = useState('')

  function handleSignIn() {
    // signIn('google', {
    //   redirectTo: `/criar?link=${link}`,
    // })
  }

  return (
    <div className="flex items-center gap-2 w-full mt-[10vh]">
      <span className="text-white text-xl"> projectinbio.com/ </span>

      <FieldInput
        placeholder="Seu link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <Button onClick={handleSignIn}> Criar agora </Button>
    </div>
  )
}
