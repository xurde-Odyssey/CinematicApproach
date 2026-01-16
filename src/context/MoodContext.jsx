import React, { createContext, useContext, useState, useEffect } from 'react';

const MoodContext = createContext();

export const moods = [
  { id: 'minimal', name: 'Minimal Monochrome', icon: '🖤' },
  { id: 'cyberpunk', name: 'Cyberpunk Night', icon: '🌌' },
  { id: 'golden-hour', name: 'Golden Hour', icon: '🌅' },
  { id: 'rainy-noir', name: 'Rainy Noir', icon: '🌧' },
];

export const MoodProvider = ({ children }) => {
  const [currentMood, setCurrentMood] = useState('minimal');
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-mood', currentMood);
  }, [currentMood]);

  return (
    <MoodContext.Provider value={{ currentMood, setCurrentMood, isMuted, setIsMuted }}>
      {children}
    </MoodContext.Provider>
  );
};

export const useMood = () => useContext(MoodContext);
