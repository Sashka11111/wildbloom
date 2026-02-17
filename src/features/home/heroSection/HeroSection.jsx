import styles from './HeroSection.module.css'
import heroImg from '../../../assets/images/ui/hero-main.png'
import BannerText from '../../../components/banner/BannerText/BannerText'
import PrimaryImage from '../../../components/PrimaryImage/PrimaryImage'

const HeroSection = () => (
  <section className={styles.hero}>
    <PrimaryImage src={heroImg} alt="Керамічні горнятка на дерев'яному столі" />
    <div className={styles.contentWrapper}>
      <BannerText
        title={
          <>
            Створено природою <br /> Натхненне Землею
          </>
        }
        description="Ознайомтеся з нашою колекцією ручної кераміки, в якій органічні текстури та природні відтінки підкреслюють красу навколишнього світу."
        buttonText="КУПУЙТЕ БЕСТСЕЛЕРИ"
      />
    </div>
  </section>
)

export default HeroSection
