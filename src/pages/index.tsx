import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Home" />
    <div className={sharedStyles.layout}>
      <div className={sharedStyles.videoContainer}>
        <video className={sharedStyles.video} autoPlay loop muted playsInline>
          <source src="/benmoji-newglasses.mp4" type="video/mp4" />
        </video>
      </div>
      <h1>Benjamin Stanfield's</h1>
      <h2>
        Notion Blog with Next.js'{' '}
        <ExtLink
          href="https://github.com/zeit/next.js/issues/9524"
          className="dotted"
          style={{ color: 'inherit' }}
        >
          SSG
        </ExtLink>
      </h2>

      <div className="explanation">
        <p>
          This is a statically generated{' '}
          <ExtLink href="https://nextjs.org">Next.js</ExtLink> site with a{' '}
          <ExtLink href="https://notion.so">Notion</ExtLink> powered blog that
          is deployed with <ExtLink href="https://zeit.co">ZEIT</ExtLink>. It's
          connected to my personal Notion, and it's never been easier to write
          blog posts!
        </p>
      </div>
    </div>
  </>
)
