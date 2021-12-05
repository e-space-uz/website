import { useRef } from 'react'
import { useRouter } from 'next/router'
import DialogBox from 'components/dialog/Dialog'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Layout({ children }) {
    const router = useRouter()
    const container = useRef()
    const pureRoutes = ['/open-map', '/login', '/open-map-display']
    return (
        <div ref={container} className="main_container">
            <DialogBox />
            {pureRoutes.includes(router.pathname) ? (
                children
            ) : (
                <>
                    <Header />
                    {children}
                    <Footer />
                </>
            )}
        </div>
    )
}
