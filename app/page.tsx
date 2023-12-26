import Image from 'next/image'
import styles from './page.module.css'

import Banner from '@/components/banner'
import Sectiona from '@/components/Homesection/sectiona'
import LatestPost from '@/components/Homesection/latestpost'


export default function Home() {


  
  return (
   <>

   <Banner/>
   <Sectiona/>
   <LatestPost/>
  
   </>
  )
}
