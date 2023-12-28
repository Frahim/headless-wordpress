import Image from 'next/image'
import styles from './page.module.css'

import Banner from '@/components/banner'
import Sectiona from '@/components/Homesection/sectiona'
import LatestPost from '@/components/Homesection/latestpost'
import Mttp from '@/components/Homesection/mttp'
import Mds from '@/components/Homesection/mdp'


export default function Home() {


  
  return (
   <>

   <Banner/>
   <Sectiona/>
   <LatestPost/>
   <Mttp/>
   <Mds/>
  
   </>
  )
}
