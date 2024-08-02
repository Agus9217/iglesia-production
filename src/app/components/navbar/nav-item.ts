import { NavItem } from "./interfaces";

export const navItem: NavItem[] = [
  { label: 'Quienes somos', href: '/nosotros' },
  {
    label: 'Ministerios', href: '/ministerios', children: [
      { label: 'Estimulos Espirituales', href: '/estimulos-espirituales' },
      { label: 'Mayordomia', href: '/mayordomia' },
      { label: 'Intercesion', href: '/intercesión' },
      { label: 'Piedra angular', href: '/piedra-angular' },
      { label: 'Extremados', href: '/extremados' },
      { label: 'Culto', href: '/culto' },
      { label: 'La red grupos', href: '/la-red-grupos' },
      { label: 'Escuela EDI', href: '/escuela-edi' }
    ]
  }
]
