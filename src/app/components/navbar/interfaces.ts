export interface NavItem {
  label: string,
  href: string | undefined,
  subLabel?: string,
  children?: NavItem[]
}
