import { Footer } from './Footer'
import { Grid } from './Grid'
import { Header } from './Header'
import { PortfolioItem } from './PortfolioItem'

export function Code() {
    return (
        <>
            <Header>
                <h1>lalalal</h1>
            </Header>

            <Grid>
                <PortfolioItem>
                    <h2>Íslenskt táknmál</h2>
                    <p>Mímímí app orðabók fyrir íslenskt táknmál</p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>R6013</h2>
                    <p>
                        Síða til að halda utan um tónleikamyndbönd og fleira
                        tengt blablabla
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>A Minor Unknown</h2>
                    <p>
                        Mímímí hljóðverk eftir Julius Rothlaender.
                        <br />
                        <br />
                        Skynjuðum hvar fólk var á sýningunni og feiduðum inn
                        hljóð eftir því hvar fólk var..
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>IslandsDEM adventures</h2>
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
                    <h2>Visualizer fyrir Ægi</h2>
                    <p>
                        Lalala visualizer gerður með Processing - myndvarpashow
                        og tengdur við ljós og eikka nett dmx sjitt
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>Meiri visualizer pælingar</h2>
                    <p>
                        Visualizerinn sem morphar landslagið milli staða með
                        eikk aglitch shit
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>Apple watch app fyrir hlaupapróf SHS</h2>
                    <p>
                        App til að fylgjast með stöðu á hlaupi innandyra (target
                        pace geta séð myndrænt þó sé ekki með gps)
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>Vaktaplansapp</h2>
                    <p>
                        App sem tekur pdf vaktaplan frá Reykjavíkurborg, vinnur
                        það og græjar lista fyrir hvern sem er um sínar vaktir
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>Sundlaugar á Íslandi</h2>
                    <p>
                        Vinna kortagögn til að gera nett dót með kort af íslandi
                        og hvar eru sundlaugar og eikka
                    </p>
                </PortfolioItem>
                <PortfolioItem>
                    <h2>Rigningavél fyrir Una</h2>
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
