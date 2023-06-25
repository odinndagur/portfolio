import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from './ThemeContext'

function PlaceholderScreen() {
    const currentTheme = useContext(ThemeContext)
    const [img, setImg] = useState(
        '/portfolio/assets/images/manifest-icon-512.maskable.png'
    )
    useEffect(() => {
        setImg(
            currentTheme == 'light'
                ? '/portfolio/assets/images/manifest-icon-512.maskable.png'
                : '/portfolio/assets/images/manifest-icon-dark-512.maskable.png'
        )
    }, [currentTheme])
    return (
        <div className="placeholder-image-container">
            <img className="placeholder-image" src={img} />
        </div>
    )
}

export default PlaceholderScreen
