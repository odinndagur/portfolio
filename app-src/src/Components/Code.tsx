import { Carousel } from './Carousel'
import { Footer } from './Footer'
import { Grid } from './Grid'
import { Header } from './Header'
import { PortfolioItem } from './PortfolioItem'

import itm1 from '/assets/screenshots/itm1.png'
import itm2 from '/assets/screenshots/itm2.png'
import itm3 from '/assets/screenshots/itm3.png'
import itm4 from '/assets/screenshots/itm4.png'
import itm5 from '/assets/screenshots/itm5.png'
import itm6 from '/assets/screenshots/itm6.png'
import itm7 from '/assets/screenshots/itm7.png'

export function Code() {
    return (
        <>
            <Header>
                <h1>lalalal</h1>
            </Header>

            <Grid width={'400px'}>
                <PortfolioItem>
                    <a href={'https://taknmal.com'}>
                        <h2>Íslenskt táknmál</h2>
                    </a>
                    <p>Mímímí app orðabók fyrir íslenskt táknmál</p>
                    <Carousel width={'200px'}>
                        {[itm1, itm2, itm3, itm4, itm5, itm6, itm7].map(
                            (img) => (
                                <img
                                    src={img}
                                    alt=""
                                    style={{
                                        width: '400px',
                                        height: 'auto',
                                    }}
                                />
                            )
                        )}
                    </Carousel>
                </PortfolioItem>
                <PortfolioItem>
                    <a href="https://r6013.github.io">
                        <h2>R6013</h2>
                    </a>
                    <p>
                        Síða til að halda utan um tónleikamyndbönd og fleira
                        tengt blablabla
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>A Minor Unknown</h2>
                    </a>
                    <p>
                        Mímímí hljóðverk eftir Julius Rothlaender.
                        <br />
                        <br />
                        Skynjuðum hvar fólk var á sýningunni og feiduðum inn
                        hljóð eftir því hvar fólk var..
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>IslandsDEM adventures</h2>
                    </a>
                    <img
                        src="https://odinndagur.github.io/portfolio/D2FA980D-589B-492E-BDE6-01B5E3C24FFA.gif"
                        style={{
                            // objectFit: 'cover',
                            width: '200px',
                            margin: 'auto',
                        }}
                    />
                    <p>
                        Nett dót í Unity. Compute shaders og eikka rugl og nota
                        gögn frá Landmælingum Íslands til að gera íslenskt
                        umhverfi í Unity. Unity fóru að vinna með BNA hernum og
                        sökka.
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>Visualizer fyrir Ægi</h2>
                    </a>
                    <p>
                        Lalala visualizer gerður með Processing - myndvarpashow
                        og tengdur við ljós og eikka nett dmx sjitt
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>Meiri visualizer pælingar</h2>
                    </a>
                    <p>
                        Visualizerinn sem morphar landslagið milli staða með
                        eikk aglitch shit
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>Apple watch app fyrir hlaupapróf SHS</h2>
                    </a>
                    <p>
                        App til að fylgjast með stöðu á hlaupi innandyra (target
                        pace geta séð myndrænt þó sé ekki með gps)
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>Vaktaplansapp</h2>
                    </a>
                    <p>
                        App sem tekur pdf vaktaplan frá Reykjavíkurborg, vinnur
                        það og græjar lista fyrir hvern sem er um sínar vaktir
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>Sundlaugar á Íslandi</h2>
                    </a>
                    <p>
                        Vinna kortagögn til að gera nett dót með kort af íslandi
                        og hvar eru sundlaugar og eikka
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <a>
                        <h2>Rigningavél fyrir Una</h2>
                    </a>
                    <p>
                        White noise græja með fínu rigningarhljóði fyrir Una til
                        að sofa við
                    </p>
                </PortfolioItem>
            </Grid>
            <Footer></Footer>
        </>
    )
}
