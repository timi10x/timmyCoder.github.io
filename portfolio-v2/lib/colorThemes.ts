export type ColorTheme = {
  id: string
  name: string
  description: string
  icon: string
  primary: string
  secondary: string
  accent: string
}

export const colorThemes: ColorTheme[] = [
  // HealthAxon-inspired palettes (soft & organic)
  {
    id: 'lavender',
    name: 'Soft Lavender',
    description: 'Calm & innovative',
    icon: '🌸',
    primary: '#030001',
    secondary: '#f6f5f1',
    accent: '#E6E2F8',
  },
  {
    id: 'sage',
    name: 'Sage Green',
    description: 'Natural & balanced',
    icon: '🍃',
    primary: '#2F4538',
    secondary: '#F5F3ED',
    accent: '#8BA888',
  },
  {
    id: 'terracotta',
    name: 'Terracotta',
    description: 'Warm & earthy',
    icon: '🏺',
    primary: '#8B4513',
    secondary: '#FAF7F2',
    accent: '#C19A6B',
  },
  // Original bold palettes
  {
    id: 'forest',
    name: 'Deep Forest',
    description: 'Natural & trustworthy',
    icon: '🌲',
    primary: '#1A4D2E',
    secondary: '#FAF5E9',
    accent: '#2C7A51',
  },
  {
    id: 'navy',
    name: 'Midnight Navy',
    description: 'Professional & calm',
    icon: '🌙',
    primary: '#0F1B2B',
    secondary: '#F5EBE0',
    accent: '#2A4563',
  },
  {
    id: 'burgundy',
    name: 'Deep Burgundy',
    description: 'Luxurious & bold',
    icon: '🍷',
    primary: '#5C1A33',
    secondary: '#F7F0E8',
    accent: '#8B2F54',
  },
  {
    id: 'charcoal',
    name: 'Charcoal',
    description: 'Modern & minimal',
    icon: '⚫',
    primary: '#2D3142',
    secondary: '#F8F7F4',
    accent: '#4F5D75',
  },
  {
    id: 'teal',
    name: 'Deep Teal',
    description: 'Tech-forward & fresh',
    icon: '🌊',
    primary: '#0D7377',
    secondary: '#F7F3EC',
    accent: '#14FFEC',
  },
  {
    id: 'orange',
    name: 'Burnt Orange',
    description: 'Warm & creative',
    icon: '🔥',
    primary: '#C6511D',
    secondary: '#FBF8F3',
    accent: '#E67635',
  },
]
