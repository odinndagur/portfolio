import { Header } from './Header'
import './Home.css'
import { Footer } from './Footer'
import './VideoPage.css'
import { YoutubeLinkItem } from './YoutubeLinkItem'
import { useTranslation } from 'react-i18next'
import { MakeGenerics, useMatch } from '@tanstack/react-location'
import { useEffect, useState } from 'react'
import { ShowCard } from './ShowCard'
import { Carousel } from './Carousel'
import { ShowCardAlternate } from './ShowCardAlternate'
type loaderGenerics = MakeGenerics<{
    LoaderData: {
        shows: {
            name: string
            date: Date
            bands: string[]
            venue: string
            image: string
        }[]
        recentVideos: {
            band: string
            members: { name: string; id: string | number }
            video_id: string | number
            show_id: string | number
            url: string
            band_id: string | number
            venue: string
            date: string | Date
        }[]
    }
}>

export function HomePage() {
    const { t, i18n, ready } = useTranslation()

    return (
        <div>
            <Header></Header>
            <h1>Óðinn Dagur</h1>
            <Footer />
        </div>
    )
}

export default HomePage
