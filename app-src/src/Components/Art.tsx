import { Carousel } from './Carousel'
import { Footer } from './Footer'
import { Grid } from './Grid'
import { Header } from './Header'
import { PortfolioItem } from './PortfolioItem'

import image1 from '/assets/hljomsveitamyndir/þerapia_1.jpeg'
import image2 from '/assets/hljomsveitamyndir/laura_secord_1.jpeg'
import image3 from '/assets/hljomsveitamyndir/laura_secord_2.jpeg'
import image4 from '/assets/hljomsveitamyndir/regn_1.jpeg'
import image5 from '/assets/hljomsveitamyndir/grafnar_1.jpeg'
import image6 from '/assets/hljomsveitamyndir/grafnar_2.jpeg'
import { YoutubePlayer } from './YoutubePlayer'

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

export function Art() {
    return (
        <>
            <Header>
                <h1>listashit yo</h1>
            </Header>
            <h2>Tónlist</h2>
            <Carousel>
                <PortfolioItem
                    style={{ width: '300px', height: '300px', padding: '0rem' }}
                >
                    <h2>Logn</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Animi commodi vero magni asperiores itaque
                        accusantium eligendi quas sequi. Minus maxime quisquam a
                    </p>
                </PortfolioItem>
                <PortfolioItem
                    style={{ width: '300px', height: '300px', padding: '0rem' }}
                >
                    <h2>Stormy Daniels</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Animi commodi vero magni asperiores itaque
                        accusantium eligendi quas sequi. Minus maxime quisquam a
                    </p>
                </PortfolioItem>
                <PortfolioItem
                    style={{ width: '300px', height: '300px', padding: '0rem' }}
                >
                    <h2>Klikk</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Animi commodi vero magni asperiores itaque
                        accusantium eligendi quas sequi. Minus maxime quisquam a
                    </p>
                </PortfolioItem>
                <PortfolioItem
                    style={{ width: '300px', height: '300px', padding: '0rem' }}
                >
                    <h2>World Narcosis</h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Animi commodi vero magni asperiores itaque
                        accusantium eligendi quas sequi. Minus maxime quisquam a
                    </p>
                </PortfolioItem>
            </Carousel>
            <hr />
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
            <Footer></Footer>
        </>
    )
}
