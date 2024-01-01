export type Image = {
  id: number | null | undefined,
  url: string | null | undefined,
  description: string | null | undefined,
  date: string,
  userId: number,
  liked: boolean | null | undefined
}
