import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';

const ImageGroup = ({ images, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Set triggerOnce to false to repeat the animation
    rootMargin: '-100px', // Adjust the rootMargin as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Adjust the duration as needed
        ease: 'easeInOut', // Adjust the easing as needed
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="flex flex-col items-start mb-8"
    >
      <div className="flex mb-4">
      {images.map((image, index) => (
        <div key={index} className="w-1/2 rounded-md mx-2 overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-auto rounded-md"
            style={{ aspectRatio: '1/1', width: '100%', height: '100%' }}
          />
        </div>
      ))}
      </div>
      <p className="text-black text-xl mx-auto mt-4">{text}</p>
    </motion.div>
  );
};

const HomePage = () => {
  const imageGroups = [
    {
      images: [
        { src: '/arianabday.jpg', alt: 'happy' },
        { src: '/arianaslay.jpg', alt: 'birthday' },
      ],
      text: '',
    },
    {
      images: [
        { src: '/grocery.jpg', alt: 'grocery' },
        { src: '/arianalab.JPG', alt: 'lab' },
      ],
      text: 'Today, we hope you think about all the things that bring you joy ✨',
    },
    {
      images: [
        { src: '/oweek1.jpg', alt: 'oweek1' },
        { src: '/oweek2.JPG', alt: 'oweek2' },
      ],
      text: 'Since day 1 of this crazy chapter of life called college',
    },
    {
      images: [
        { src: '/gals3.jpg', alt: 'gals1' },
        { src: '/gals1.jpg', alt: 'gals2' },
        { src: '/gals2.jpg', alt: 'gals3' },
      ],
      text: 'Fated 4 gals have stuck together through thick and thin. We love you very much 😘',
    },
    {
      images: [
        { src: '/gals4.jpg', alt: 'gals4' },
        { src: '/party2.jpg', alt: 'bdaycakce' },
   
      ],
      text: "In <year, we've already done so much of life together 🌻",
    },
    {
      images: [
        { src: '/study1.jpg', alt: 'study1' },
        { src: '/study2.jpg', alt: 'study2' },
        { src: '/party.jpg', alt: 'party' },
      ],
      text: 'Whether we study or party',
    },
    {
      images: [
        { src: '/arianadoctor.jpg', alt: 'doctor' },
        { src: '/advocate.png', alt: 'advocate' },
      ],
      text: 'Our physician scientist, advocate, girlboss who pours her heart into what matters, lighting up the world ✨',
    },
    
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8 mt-36">Happy Birthday, Ariana Vaida 🎂</h1>
      <div className="w-3/4">
        {imageGroups.map((group, index) => (
          <div key={index} style={{ minHeight: '100vh' }}>
            <ImageGroup images={group.images} text={group.text} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
