import Header from '../../layout/Header/Header'
import HeroSection from '../../features/home/HeroSection/HeroSection'
import QuoteDivider from '../../features/home/QuoteDivider/QuoteDivider'
import ProductGrid from '../../features/home/productSection/ProductGrid/ProductGrid'
import styles from './HomePage.module.css'
import CollectionSection from '../../features/home/CollectionSection/CollectionSection'
import CategorySection from '../../features/home/categorySection/CategorySection/CategorySection'
import InspirationalSection from '../../features/home/InspirationSection/InspirationSection'
import Footer from '../../layout/Footer/Footer'

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main>
        <HeroSection />

        <QuoteDivider />
        <ProductGrid />
        <CollectionSection />
        <CategorySection />
        <InspirationalSection />
        <Footer />
      </main>
    </div>
  )
}

export default HomePage
