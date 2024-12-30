import React, { useEffect, useRef } from 'react';

interface StretchProps {
  text: string;
}

const Stretch: React.FC<StretchProps> = ({ text }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const adjustFontSize = (): void => {
    const container = containerRef.current;
    const textElement = textRef.current;
    if (!container || !textElement) return;

    const containerWidth = container.offsetWidth;
    let fontSize = 1;
    textElement.style.fontSize = `${fontSize}px`;

    console.log('Container width:', containerWidth);
    console.log('Initial text width:', textElement.offsetWidth);

    // Increase font size until text width matches container width
    while (textElement.offsetWidth < containerWidth && fontSize < 1000) {
      fontSize++;
      textElement.style.fontSize = `${fontSize}px`;
      console.log(`Font size: ${fontSize}, Text width: ${textElement.offsetWidth}`);
    }

    console.log('Final font size:', fontSize);
    console.log('Final text width:', textElement.offsetWidth);
  };

  useEffect(() => {
    // Initial adjustment
    setTimeout(adjustFontSize, 0);

    // Setup resize observer
    const resizeObserver = new ResizeObserver(() => {
      setTimeout(adjustFontSize, 0);
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [text]);

  return (
    <div 
      ref={containerRef} 
      style={{ 
        width: '99%',
        display: 'block',
      }}
    >
      <div
        ref={textRef}
        style={{
          whiteSpace: 'nowrap',
          display: 'inline-block',
          width: 'auto'
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default Stretch;
