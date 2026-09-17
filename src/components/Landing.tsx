import { anticipate, motion, useScroll, useTransform } from 'motion/react';

function Landing() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0, 0]);

  return (
    <div className="h-dvh flex flex-col justify-between">
      <div className="flex flex-col gap-8">
        <motion.h1
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: anticipate }}
          className="text-primary text-9xl font-bartle"
        >
          James Mather
        </motion.h1>
        <p className="text-4xl">
          lorem ipsum dolor sit amet consectetur adipiscing elit tempor deleniti in minim aute
          dolore magna voluptatum
        </p>
      </div>
      <div className="flex mb-24 flex-row justify-between">
        <p>Contact me</p>
        <motion.p style={{ opacity: opacity }} className="font-semibold text-xl">
          Scroll for more
        </motion.p>
        <div>
          <p>Brighton</p>
          <p>United Kingdom</p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
