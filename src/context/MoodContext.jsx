import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { Sun, CloudRain, Monitor } from 'lucide-react';

const MoodContext = createContext();

export const moods = [
  {
    id: 'minimal',
    name: 'Default',
    icon: <Monitor size={20} />,
    sound: null // No ambient sound for default theme
  },
  {
    id: 'golden-hour',
    name: 'Sunny',
    icon: <Sun size={20} />,
    sound: '/sounds/sunny-ambience.mp3' // Placeholder - add your audio file
  },
  {
    id: 'rainy-noir',
    name: 'Rainy',
    icon: <CloudRain size={20} />,
    sound: '/sounds/rain-ambience.mp3' // Placeholder - add your audio file
  },
];

export const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState('minimal');
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-mood', currentMood);

    // Handle ambient sound playback
    const currentMoodData = moods.find(m => m.id === currentMood);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    if (currentMoodData?.sound && !isMuted) {
      try {
        if (!audioRef.current) {
          audioRef.current = new Audio(currentMoodData.sound);
          audioRef.current.loop = true;
          audioRef.current.volume = 0.3; // Soft volume (30%)
        } else {
          audioRef.current.src = currentMoodData.sound;
        }

        // Play with error handling
        audioRef.current.play().catch(err => {
          console.log('Audio playback failed:', err);
          // Audio autoplay might be blocked by browser or file doesn't exist
        });
      } catch (error) {
        console.log('Audio initialization failed:', error);
        // Audio file doesn't exist or other error
      }
    }
  }, [currentMood, isMuted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <MoodContext.Provider value={{ currentMood, setCurrentMood, isMuted, setIsMuted }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => useContext(MoodContext);
