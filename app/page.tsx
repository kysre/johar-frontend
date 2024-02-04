'use client'

import Image from 'next/image'
import axios from 'axios'
import styles from './styles.module.css'
import { useCookies } from 'react-cookie'
import { Subscriptions } from '@/components/Subscriptions/Subsctiptions'
import { Suggestions } from '@/components/Suggestions/Suggestions'
import { Categories } from '@/components/Category/Categories'
import { TrendingNews } from '@/components/TrendingNews/TrendingNews'
import { Flex, Title } from '@mantine/core'
import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer/Footer'
import GlobalConfig from '@/app/app.config.js'

export default function Landing() {
  const [cookies] = useCookies(['token'])

  let subscriptions: any[] = []
  const fetchData = async () => {
    subscriptions = await fetchSubscriptions(cookies)
  }
  fetchData()

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Subscriptions agencies={subscriptions} />
      <Categories />
      <TrendingNews />
      <Suggestions />
      <Footer />
    </div>
  )
}

const fetchSubscriptions = async (cookies: any) => {
  try {
    const response = await axios.get(GlobalConfig.SubscriptionsApi, {
      headers: {
        Authorization: `Token ${cookies.token}`,
      },
    })
    let subscriptions = await response.data.subscriptions
    if (response.data.status != 'ok') {
      subscriptions = []
    }
    console.log(response.data)
    return subscriptions
  } catch (error) {
    console.error('Error during API call', error)
  }
}
