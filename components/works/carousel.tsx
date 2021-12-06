import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Image from 'next/image'
import { Carousel as RRCarousel } from 'react-responsive-carousel'
import type { ImageContent } from 'types/cms/work'

type Props = {
  images: ImageContent[]
}

const Carousel = ({ images }: Props): JSX.Element => {
  const carouselImages = images.map(({ image, alt }) => {
    const { url, width, height } = image

    return (
      <Image
        key={url}
        src={url}
        alt={alt}
        width={width}
        height={height}
        loading="eager"
      />
    )
  })

  return (
    <RRCarousel
      className="mx-auto border border-gray-200"
      autoPlay
      interval={6000}
      transitionTime={600}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
    >
      {carouselImages}
    </RRCarousel>
  )
}

export default Carousel