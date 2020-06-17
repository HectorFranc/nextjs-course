import Link from 'next/link'
import Head from 'next/head'

export default class Layout extends React.Component {
    
    render() {
        const { children, title } = this.props

        return <>
        <Head>
            <title>{ title }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        </Head>

        <header>
            <Link href="/"><a>Podcast</a></Link>
        </header>

        {children}

        <style jsx>{`
            header {
                color: #fff;
                background: #8756ca;
                padding: 15px;
                text-align: center;
            }
            header a {
                color: #fff;
                text-decoration: none;
            }
        `}</style>

        <style global jsx>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
        `}</style>
        </>
    }
}