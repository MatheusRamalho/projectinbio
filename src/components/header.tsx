import Link from 'next/link'

import Logo from '@/components/logo'
import Button from '@/components/button'

export default async function Header() {
  //   const session = await auth()
  //   const profileId = await getProfileId(session?.user?.id as string)

  return (
    <div className="absolute top-0 left-0 right-0 max-w-7xl mx-auto flex items-center justify-between py-10">
      <div className="flex items-center gap-4">
        <Logo aria-label="ProjectInBio Logo" />

        <h3 className="text-white text-2xl font-bold"> ProjectInBio </h3>
      </div>

      <div className="flex items-center gap-4">
        <Link href="/">
          <Button> Minha Página </Button>
        </Link>

        <Button> Login </Button>

        {/* {session && (
          <Link href={`/${profileId}`}>
            <Button> Minha Página </Button>
          </Link>
        )}

        <form action={manageAuth}>
          <Button> {session ? 'Sair' : 'Login'} </Button>
        </form> */}
      </div>
    </div>
  )
}
