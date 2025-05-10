import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const SoundControl: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  
  const toggleSound = () => {
    setIsMuted(!isMuted);
    
    // This would control actual audio if implemented
    const bgMusic = document.getElementById('bg-music') as HTMLAudioElement;
    if (bgMusic) {
      if (isMuted) {
        bgMusic.play();
      } else {
        bgMusic.pause();
      }
    }
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-30">
      <button 
        onClick={toggleSound}
        className="w-12 h-12 bg-black border-2 border-[#fbd000] flex items-center justify-center text-white hover:bg-[#4166f5] transition-colors"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
      
      {/* Audio element would be implemented here */}
      {/* <audio id="bg-music" loop src="/audio/background-music.mp3"></audio> */}
    </div>
  );
};

export default SoundControl;