import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";

import Info from './components/Info';
import About from './components/About';
import Features from './components/Features';
import Section from './components/Section';
import Footer from './components/Footer';

import FingerprintJS from '@fingerprintjs/fingerprintjs';

const App: React.FC = () => {
  
  useEffect(() => {
    // 핑거프린트 생성 및 백엔드로 전송
    const getFingerprint = async () => {
      const fp = await FingerprintJS.load();
      const result = await fp.get();
      const fingerprint = result.visitorId;
      // 핑거프린트 정보를 콘솔에 출력
      console.log("Generated fingerprint:", fingerprint);
      
      // 서버에 방문자 정보 업데이트 요청
      fetch(`http://localhost:8000/update_visitor/?fingerprint=${fingerprint}`)
        .then(response => response.json())
        .then(data => {
          console.log("Server response:", data);
        });
    };
    getFingerprint();
  }, []);

  Aos.init({
    duration: 1800,
    offset: 0,
  });

  return (
    <div className='overflow-hidden'>
      <Info />
      <About />
      <Features />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
