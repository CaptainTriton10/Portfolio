import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

type LinkButtonProps = {
  text: string;
  clickCallback?: () => void;
};

function BackButton() {
  const [mouseOver, setMouseOver] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`h-15 bg-secondary w-full origin-left`}
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={() => {
        () => navigate(-1);
      }}
    >
      <svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="300" y2="200" />
      </svg>
    </div>
  );
}

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
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
      <motion.h2
        className="font-bartle mx-8 text-primary whitespace-nowrap text-center"
        initial={{ fontSize: '3.75rem', lineHeight: 1, color: 'var(--color-secondary)' }}
        animate={{
          fontSize: mouseOver ? '5rem' : '3.75rem',
          color: mouseOver ? 'var(--color-primary)' : 'var(--color-secondary)',
          lineHeight: 1,
        }}
        transition={{ duration: 0.1 }}
      >
        {props.text}
      </motion.h2>
      <motion.div
        className={`h-15 bg-accent w-full origin-right`}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: mouseOver ? 0 : 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
      />
    </div>
  );
}

export default LinkButton;
export { BackButton };
