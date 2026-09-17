import { motion } from 'motion/react';
import { useState } from 'react';

type LinkButtonProps = {
  text: string;
  clickCallback?: () => void;
};

function LinkButton(props: LinkButtonProps) {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <div
      className="flex flex-row w-full justify-center cursor-pointer"
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={() => {
        if (props.clickCallback) props.clickCallback();
      }}
    >
      <motion.div
        className={`h-15 bg-accent w-full origin-left`}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: mouseOver ? 0 : 1 }}
      />
      <motion.h2
        className="font-bartle mx-8 text-primary whitespace-nowrap"
        initial={{ fontSize: '3.75rem', lineHeight: 1 }}
        animate={{ fontSize: mouseOver ? '5rem' : '3.75rem', lineHeight: 1 }}
      >
        {props.text}
      </motion.h2>
      <motion.div
        className={`h-15 bg-accent w-full origin-right`}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: mouseOver ? 0 : 1 }}
      />
    </div>
  );

  // return (
  //   <motion.div
  //     className="h-15 w-full mt-8 bg-accent"
  //     onMouseEnter={() => setMouseOver(true)}
  //     onMouseLeave={() => setMouseOver(false)}
  //     onClick={() => {
  //       if (props.clickCallback) props.clickCallback();
  //     }}
  //   >
  //     <svg width="1200" height="60">
  //       <motion.line
  //         initial={{ x1: 0 }}
  //         y1="30"
  //         x2="1000"
  //         y2="30"
  //         stroke="#4a22ea"
  //         strokeWidth="8"
  //         animate={{ pathLength: mouseOver ? 1 : 0 }}
  //         transition={{ duration: 0.2, ease: 'easeOut' }}
  //       />
  //     </svg>
  //   </motion.div>
  // );
}

export default LinkButton;
