import { Locale } from '@/i18n.config'
import React from 'react'
import TempCatalog from './TempCatalog'


type Props = {
    params: { lang: Locale }
}
const page = ({params}: Props) => {
  return (
    <div><TempCatalog params={params}/></div>
  )
}

export default page