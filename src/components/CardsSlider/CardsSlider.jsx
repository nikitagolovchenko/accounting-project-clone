import Slider from 'react-slick';
import { SliderWrapper } from './styles';

const CardsSlider = ({children}) => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderWrapper component={Slider} {...settings}>
      {children}
    </SliderWrapper>
  );
};

export default CardsSlider;
