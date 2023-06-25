import { useState, useEffect, Suspense } from 'react'
import { ThemeContext } from './Components/ThemeContext'
import HomePage from './Components/Home'
import {
    ReactLocation,
    Router,
    Outlet,
    Navigate,
} from '@tanstack/react-location'

import PlaceholderScreen from './Components/PlaceholderScreen'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotFound } from './Components/NotFound'
import { RawSql } from './Components/RawSql'
import { useTranslation } from 'react-i18next'
import { Test } from './Components/Test'
import { Misc } from './Components/Misc'
import { Code } from './Components/Code'
import { Art } from './Components/Art'

const reactLocation = new ReactLocation()

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // staleTime: 1000 * 60 * 5,
            networkMode: 'offlineFirst',
        },
    },
})

function App() {
    const { t, i18n, ready } = useTranslation()
    const [standalone, setStandalone] = useState(false)
    useEffect(() => {
        if (window.matchMedia('(display-mode: standalone)').matches) {
            setStandalone(true)
        }
    })
    const [promiseWorkerLoaded, setPromiseWorkerLoaded] = useState(false)
    const [currentTheme, setCurrentTheme] = useState(
        window.localStorage.getItem('theme_mode') ?? 'light'
    )
    // useEffect(() => {
    //     const intervalID = setInterval(() => {
    //         console.log('callback yo')
    //         try {
    //             query('select * from band_member limit 5').then((res: any) => {
    //                 if (res[0]) {
    //                     clearInterval(intervalID)
    //                     setPromiseWorkerLoaded(true)
    //                     console.log('promise worker loaded')
    //                 }
    //             })
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }, 500)
    // }, [])

    // if (!promiseWorkerLoaded) {
    //     return
    // }
    return (
        <Suspense>
            <QueryClientProvider client={queryClient}>
                <ThemeContext.Provider
                    value={{ currentTheme, setCurrentTheme }}
                >
                    <Router
                        location={reactLocation}
                        basepath="/portfolio/"
                        // defaultLinkPreloadMaxAge={Infinity}
                        // defaultPendingElement={<PlaceholderScreen />}
                        // defaultLoaderMaxAge={Infinity}
                        routes={[
                            {
                                path: '/',
                                element: <HomePage />,
                            },
                            {
                                path: 'home',
                                element: <HomePage />,
                            },
                            {
                                path: 'code',
                                element: <Code />,
                            },
                            {
                                path: 'art',
                                element: <Art />,
                            },

                            {
                                path: 'sql',
                                element: <RawSql />,
                            },
                            {
                                path: 'test',
                                element: <Test />,
                            },
                            {
                                path: 'misc',
                                element: <Misc />,
                            },
                            {
                                // Passing no route is equivalent to passing `path: '*'`
                                element: <NotFound />,
                            },
                        ]}
                    >
                        <Outlet />
                    </Router>
                </ThemeContext.Provider>
            </QueryClientProvider>
        </Suspense>
    )
}

export default App
