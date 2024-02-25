import NotFound from '../assets/page-not-found.jpg'
import { useTitle } from '../hooks/useTitle'

export const PageNotFound = () => {
  useTitle("Page Not Found")
  return (
    <section className="pageNotFound">
        <p>404 Page Not Found</p>
        <img src={NotFound} alt="PageNotFound" />
    </section>
  )
}
