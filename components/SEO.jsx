import Head from 'next/head'

export default function SEO({ title, description, image, keywords }) {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta charSet="utf-8" />
            <title>{title ? `${title} | E-elektron` : `E-elektron`}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="developer" content="algosdev" />
            <meta property="og:type" content="website" />
            <meta
                property="og:title"
                content={title ? `${title} | E-elektron` : `E-elektron`}
                key="ogtitle"
            />
            <meta
                property="og:description"
                content={description}
                key="ogdesc"
            />
            <meta
                property="og:site_name"
                content="E-elektron"
                key="ogsitename"
            />
            <meta
                property="og:image"
                content={image || '/favicon.svg'}
                key="ogimage"
            />
            <meta name="theme-color" content="#000" />
            <meta name="twitter:card" content="summary" />
            <meta
                name="twitter:title"
                content={title ? `${title} | E-elektron` : `E-elektron`}
            />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:site" content="E-elektron" />
            <meta
                name="twitter:image"
                content={image || 'images/background.jpg'}
            />
            <link rel="icon" href="/favicon.svg" />
        </Head>
    )
}
