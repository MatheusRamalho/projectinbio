'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { sanitizeLink } from '@/utils/format'
import Button from '@/components/button'
import FieldInput from '@/components/field-input'

// import { createLink } from '@/app/actions/create-link'
// import { verifyLink } from '@/app/actions/verify-link'

export default function CreateLinkForm() {
  const router = useRouter()

  const searchParams = useSearchParams()

  const [link, setLink] = useState(sanitizeLink(searchParams.get('link') || ''))
  const [error, setError] = useState('')

  function handleLinkChange(e: ChangeEvent<HTMLInputElement>) {
    setLink(sanitizeLink(e.target.value))
    setError('')
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    // Quando o usuario nao escreve um link
    if (link.length === 0) {
      return setError('Escolha um link primeiro :)')
    }

    // Quando o usuario escolhe um link ja existente
    const isLinkTaken = await verifyLink(link)

    if (isLinkTaken) {
      return setError('Desculpe, esse link já está em uso.')
    }

    // Criar o perfil
    const isLinkCreated = await createLink(link)

    if (!isLinkCreated) {
      return setError('Erro ao criar o perfil. Tente novamente.')
    }

    router.push(`/${link}`)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
        <span>projectinbio.com/</span>

        <FieldInput value={link} onChange={handleLinkChange} />

        <Button className="w-[126px]"> Criar </Button>
      </form>

      <div>
        <span className="text-accent-pink"> {error} </span>
      </div>
    </>
  )
}
