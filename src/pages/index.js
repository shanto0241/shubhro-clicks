import RootLayout from '@/components/layout/RootLayout'
import HomeSlider from '@/shared/HomeSlider'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
    className="h-screen"
    >
      <HomeSlider/>
    </main>
  )
}


Home.getLayout = function getLayout(page) {
  return (
   <RootLayout>
    {page}
   </RootLayout>
  )
}
