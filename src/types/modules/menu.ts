export interface Menu {
  path: string
  meta: { title: string; icon?: string }
  children?: Menu[]
}
