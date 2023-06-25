import { Carousel } from './Carousel'
import { Footer } from './Footer'
import { Grid } from './Grid'
import { Header } from './Header'
import { PortfolioItem } from './PortfolioItem'

import './Art.css'

import image1 from '/portfolio/assets/hljomsveitamyndir/þerapia_1.jpeg'
import image2 from '/portfolio/assets/hljomsveitamyndir/laura_secord_1.jpeg'
import image3 from '/portfolio/assets/hljomsveitamyndir/laura_secord_2.jpeg'
import image4 from '/portfolio/assets/hljomsveitamyndir/regn_1.jpeg'
import image5 from '/portfolio/assets/hljomsveitamyndir/grafnar_1.jpeg'
import image6 from '/portfolio/assets/hljomsveitamyndir/grafnar_2.jpeg'
import { YoutubePlayer } from './YoutubePlayer'
import { useIsVisible } from './useIsVisible'
import { useRef } from 'react'
import { YoutubeThumbnail } from './YoutubeThumbnail'

function PhotoItem({ img }: { img: string }) {
    return (
        <>
            <img
                // onClick={() => {
                //     const el = document.getElementById(
                //         `${img}-modal`
                //     ) as HTMLDialogElement
                //     el.showModal()
                // }}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    // cursor: 'pointer',
                }}
                src={img}
            />
            {/* <dialog
                onClick={(ev) => {
                    const dialog = document.getElementById(
                        `${img}-modal`
                    ) as HTMLDialogElement
                    if (ev.target == dialog) {
                        dialog.close()
                    }
                }}
                id={`${img}-modal`}
                style={{
                    border: 0,
                    width: '800px',
                    height: '600px',
                    backgroundColor: 'red',
                }}
            >
                <div>
                    <form method="dialog">
                        <button className="">
                            <span className="material-icons">clear</span>
                        </button>
                    </form>
                </div>

                <div
                    style={{
                        // border: 'none',
                        // padding: 0,
                        width: '100%',
                        height: '100%',
                        // aspectRatio: 'auto',
                    }}
                >
                    <img
                        src={img}
                        alt=""
                        // width={'100%'}
                        style={{
                            width: '300%',
                            height: '300%',
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </dialog> */}
        </>
    )
}

function AlbumItem({
    artist,
    album,
    artwork,
    role,
}: {
    artist: string
    album: string
    artwork: string
    role: string
}) {
    return (
        <PortfolioItem
            className="album-item"
            style={{ width: '300px', height: '300px', padding: '0rem' }}
        >
            <img
                src={artwork}
                style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '100%',
                    borderRadius: '10px',
                    outline: '1px solid gray',
                }}
                alt=""
            />
            <div className="album-item-details">
                <b>{artist}</b>
                <br />
                {album}
                <br />
                <i>{role}</i>
            </div>
        </PortfolioItem>
    )
}

function ShowItem({
    videoId,
    artist,
    venue,
    year,
}: {
    videoId: string
    artist: string
    venue: string
    year: string | number
}) {
    const videoRef = useRef(null)
    const isVisible = useIsVisible(videoRef)
    return (
        <div ref={videoRef} style={{ width: '300px', height: 'auto' }}>
            <div style={{ padding: '0.5rem 0' }}>
                <h3 style={{ margin: '0.5rem 0' }}>
                    {artist} @ {venue}
                </h3>
                <span>{year}</span>
            </div>
            {isVisible ? (
                <YoutubePlayer videoId={videoId} />
            ) : (
                <YoutubeThumbnail youtubeId={videoId} showThumbnail />
            )}
        </div>
    )
}

export function Art() {
    return (
        <>
            <Header>
                <h1>listashit yo</h1>
            </Header>
            <div
                style={{
                    width: '100%',
                    borderBottom: '1px solid black',
                    padding: '0.5rem',
                }}
            ></div>
            <h1 style={{ textAlign: 'center' }}>Tónlist</h1>

            <h2>Plötur</h2>
            <Grid>
                <AlbumItem
                    artist="Stormy Daniels"
                    album="AGI STYRKUR EINBEITING HARKA ÚTHALD HAFA GAMAN"
                    artwork="https://f4.bcbits.com/img/a1865162624_10.jpg"
                    role="Gítar og söngur"
                />
                <AlbumItem
                    artist="Logn"
                    album="Í sporum annarra"
                    artwork="https://f4.bcbits.com/img/a3834685973_10.jpg"
                    role="Bassi og söngur"
                />
                <AlbumItem
                    album="Í fráhvarfi ljóss, myrkrið lifnar við"
                    artist="Logn"
                    artwork="https://f4.bcbits.com/img/a0440464357_10.jpg"
                    role="Bassi og söngur"
                />
                <AlbumItem
                    album="Haust 2009"
                    artist="Logn"
                    artwork="https://f4.bcbits.com/img/a1689014166_10.jpg"
                    role="Bassi og söngur"
                />
                <AlbumItem
                    album="Klikk EP"
                    artist="Klikk"
                    artwork="https://f4.bcbits.com/img/a1321020626_10.jpg"
                    role="Bassi og söngur"
                />
                <AlbumItem
                    album="
                    Klikkby, still young! D​é​jà vu: live @ H​ú​rra!"
                    artist="Klikk"
                    artwork="https://f4.bcbits.com/img/a4100410713_10.jpg"
                    role="Bassi og söngur"
                />
            </Grid>
            <h2>Myndbönd</h2>
            <p>Lalala grilljón hljómsveitamyndbönd á youtube/r6013 síðunni</p>
            <Carousel>
                <div style={{ width: '300px', height: 'auto' }}>
                    <h3>Vil - Vinduet</h3>
                    <p>Tók upp og klippti</p>
                    <YoutubePlayer videoId={'-xqv4XUBHRo'} />
                </div>
                <div style={{ width: '300px', height: 'auto' }}>
                    <h3>Vil - Violet</h3>
                    <p>Tók upp og klippti</p>
                    <YoutubePlayer videoId="VbSb5w1VCiA" />
                </div>
                <div style={{ width: '300px', height: 'auto' }}>
                    <h3>BSÍ - Ekki á leið</h3>
                    <p>Tók upp og klippti</p>
                    <YoutubePlayer videoId="RHHsuXFDOmY" />
                </div>
                <div style={{ width: '300px', height: 'auto' }}>
                    <h3>Ægir - Look at pretty things</h3>
                    <p>Alls konar</p>
                    <YoutubePlayer videoId="9dXht2Ewf_A" />
                </div>
            </Carousel>

            <h2>Ljósmyndir</h2>
            <Grid>
                {[image1, image2, image3, image4, image5, image6].map((img) => {
                    return (
                        <div style={{ width: '300px', height: '300px' }}>
                            <PhotoItem img={img} />
                            {/* <img
                                style={{
                                    objectFit: 'cover',
                                    width: '100%',
                                    height: '100%',
                                }}
                                src={img}
                            /> */}
                        </div>
                    )
                })}
            </Grid>

            <h2>Tónleikar</h2>
            <Grid>
                <ShowItem
                    artist="MSEA"
                    venue="Norðanpaunk"
                    year={2019}
                    videoId="s16aTEuDzjQ"
                />
                <ShowItem
                    artist="Logn"
                    venue="Bar 11"
                    year={2013}
                    videoId="dIAlmum8jkQ"
                />
                <ShowItem
                    artist="Logn"
                    venue="Norðanpaunk"
                    year={2018}
                    videoId="S9H9weSj_9I"
                />
                <ShowItem
                    artist="Skátar"
                    venue="Norðanpaunk"
                    year={2018}
                    videoId="MQQeC9E9Yyo"
                />
                <ShowItem
                    artist="World Narcosis"
                    venue="Húrra"
                    year={2015}
                    videoId="3rHBA7oycD0"
                />
                <ShowItem
                    artist="World Narcosis"
                    venue="Norðanpaunk"
                    year={2017}
                    videoId="uAwT7dJLLkk"
                />
                <ShowItem
                    artist="Logn"
                    venue="Eistnaflug"
                    year={2013}
                    videoId="GpNa8-KR9_g"
                />
                <ShowItem
                    artist="Stormy Daniels"
                    venue="Húrra"
                    year={2019}
                    videoId="ItGWOJMLgqw"
                />
                <ShowItem
                    artist="Stormy Daniels"
                    venue="R6013"
                    year={2018}
                    videoId="o7DCQj2wKGE"
                />
                <ShowItem
                    artist="Klikk"
                    venue="Dillon"
                    year={2013}
                    videoId="fQmwW_RLYpo"
                />
                <ShowItem
                    artist="Stormy Daniels"
                    venue="Norðanpaunk"
                    year={2019}
                    videoId="ygRVgFajr_U"
                />
            </Grid>
            <div
                style={{
                    width: '100%',
                    borderBottom: '1px solid black',
                    padding: '0.5rem',
                }}
            ></div>
            <Footer></Footer>
        </>
    )
}
