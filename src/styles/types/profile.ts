import { SocialMedia } from './social-media'

export type Profile = {
  userId: string
  name: string
  description: string
  imagePath: string
  totalVisits: number
  createdAt: number
  updatedAt?: number
  socialMedias?: SocialMedia
  link1?: Link
  link2?: Link
  link3?: Link
}
