'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

// import { increaseProjectVisits } from '@/app/actions/increase-project-visits'
import { formatUrl } from '@/utils/format'
import { Project } from '@/styles/types/project'

interface ProjectCardProps {
  img: string
  isOwner?: boolean
  project?: Project
  name?: string
  description?: string
}

export default function ProjectCard({
  project,
  isOwner,
  img,
  name,
  description,
}: ProjectCardProps) {
  const { profileId } = useParams()
  const formattedUrl = formatUrl({ url: project?.projectUrl || '' })

  async function handleClick() {
    if (!profileId || !project?.id || isOwner) {
        return
    }

    // await increaseProjectVisits(profileId as string, project?.id)
  }

  return (
    <Link href={formattedUrl} target="_blank" onClick={handleClick}>
      <article className="w-[340px] h-[132px] flex gap-5 bg-background-secondary p-3 rounded-[20px] border border-transparent hover:border-border-secondary">
        <div className="size-24 rounded-md overflow-hidden flex-shrink-0">
          <Image
            src={img}
            alt="Projeto"
            className="size-full object-cover"
            width={96}
            height={96}
          />
        </div>

        <div className="flex flex-col gap-2">
          {isOwner && (
            <span className="uppercase text-xs font-bold text-accent-green">
              {project?.totalVisits || 0} cliques
            </span>
          )}

          <div className="flex flex-col">
            <span className="text-white font-bold">
              {name || project?.projectName}
            </span>

            <span className="text-content-body text-sm">
              {description || project?.projectDescription}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}
