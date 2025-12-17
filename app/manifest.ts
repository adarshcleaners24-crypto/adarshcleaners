import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Adarsh Cleaners - Premium Laundry & Dry Cleaning',
    short_name: 'Adarsh Cleaners',
    description: 'Premium laundry and dry cleaning services in Mumbai with free doorstep pickup and delivery',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4169E1',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/logo/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
    ],
    categories: ['business', 'lifestyle', 'utilities'],
    lang: 'en',
    dir: 'ltr',
  }
}
