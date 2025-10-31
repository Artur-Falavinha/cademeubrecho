import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Footer = () => {
  // Placeholder images for idealizadoras - replace with actual images
  const idealizadoras = [
    { id: 1, name: 'Idealizadora 1', image: 'https://via.placeholder.com/100x100/E8F5E8/666?text=I1' },
    { id: 2, name: 'Idealizadora 2', image: 'https://via.placeholder.com/100x100/E8F5E8/666?text=I2' },
    { id: 3, name: 'Idealizadora 3', image: 'https://via.placeholder.com/100x100/E8F5E8/666?text=I3' },
    { id: 4, name: 'Idealizadora 4', image: 'https://via.placeholder.com/100x100/E8F5E8/666?text=I4' },
    { id: 5, name: 'Idealizadora 5', image: 'https://via.placeholder.com/100x100/E8F5E8/666?text=I5' },
    { id: 6, name: 'Idealizadora 6', image: 'https://via.placeholder.com/100x100/E8F5E8/666?text=I6' },
  ];

  const handleSocialClick = (platform) => {
    switch (platform) {
      case 'whatsapp':
        window.open('https://wa.me/', '_blank');
        break;
      case 'spotify':
        window.open('https://open.spotify.com/', '_blank');
        break;
      case 'youtube':
        window.open('https://youtube.com/', '_blank');
        break;
      default:
        break;
    }
  };

  return (
    <footer id="footer" className="bg-light-green section-padding">
      <div className="max-w-6xl mx-auto">
        {/* Carrossel de Idealizadoras */}
        <div className="mb-12">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">
            Idealizadoras
          </h3>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1024: {
                slidesPerView: 6,
              },
            }}
            className="idealizadoras-swiper"
          >
            {idealizadoras.map((person) => (
              <SwiperSlide key={person.id}>
                <div className="text-center">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-20 h-20 rounded-full mx-auto mb-2 object-cover"
                  />
                  <p className="text-sm text-gray-600">{person.name}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center space-x-6">
          <button
            onClick={() => handleSocialClick('whatsapp')}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
            aria-label="WhatsApp"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
          </button>

          <button
            onClick={() => handleSocialClick('spotify')}
            className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors duration-300"
            aria-label="Spotify"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </button>

          <button
            onClick={() => handleSocialClick('youtube')}
            className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-300"
            aria-label="YouTube"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </button>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-300">
          <p className="text-gray-600">
            © 2025 Cadê Meu Brechó?. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;