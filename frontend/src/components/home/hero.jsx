import { Button } from '../common'
import ButtonLink from '../common/buttonLink'

const Hero = () => {
  return (
    <div className="relative bg-white  pb-[110px] lg:pt-[100px] px-20">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content pt-11">
              <h1 className="mb-3 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">LankaHerbals</h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color">LankaHerbals is an online store that offers a wide range of natural and organic herbal products sourced from Sri Lanka. Their products are made from high-quality ingredients, and are free from harmful chemicals and preservatives. LankaHerbals offers a variety of products, including teas, supplements, skincare, hair care, and more. They are committed to promoting healthy living and sustainable practices, and their products are ethically sourced and produced. With a user-friendly website and a commitment to customer satisfaction, LankaHerbals is a great option for those looking to incorporate natural and organic products into their lifestyle</p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <ButtonLink className="font-bold text-lg ">SHOP NOW!</ButtonLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12" />
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block  lg:pt-0">
                <img src="/assets/images/herbal.jpg" alt="hero" className="w-[31rem] lg:ml-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
;<></>
