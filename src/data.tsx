// import icons
import { FaYoutube, FaInstagram, FaGithub } from 'react-icons/fa';
import { BsChatDotsFill } from 'react-icons/bs';

// import images
import Feature1Img from './assets/feature_1.png';
import Feature2Img from './assets/feature_2.png';
import Feature3Img from './assets/feature_3.png';
import Feature4Img from './assets/feature_4.png';
import Feature1BgImg from './assets/feature1_bg.png';
import Feature2BgImg from './assets/feature2_bg.png';
import Feature3BgImg from './assets/feature3_bg.png';
import Feature4BgImg from './assets/feature4_bg.png';
import Background from './assets/download.png';
import Download from './assets/presentation.png';
import Logo from './assets/logo.png';

export const navigationData = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Features',
    href: '#',
  },
  {
    name: 'Contact',
    href: 'mailto:yskim80512@naver.com',
  },
];

export const infoData = {
  title: ` 주문과 결제의 완전 자동화`,
  subtitle:
    '띵동을 통해 여러분은 QR코드 메뉴판과 자동화된 주문 시스템으로 비용을 절감하고 업무 효율성을 높일 수 있습니다.',
  btnText: 'get started',
  image: Background,
};

export const aboutData = {
  image: Download,
  title: 'QR코드 기반 주문 자동화 솔루션',
  subtitle:
    '띵동 솔루션은 기존 메뉴판과 태블릿 오더의 높은 비용 문제를 해결하기 위해 설계되었습니다. 주문과 결제 과정이 완전히 자동화되며, 추가적인 비용을 절감할 수 있습니다.',
};

export const featuresData = {
  title: '우리가 제공하는 기능들',
  subtitle:
    '주문과 결제를 이제 한눈에 관리하세요. 쉽고 편리한 주문 결제 자동화 서비스, 띵동이 고민을 해결해줄 거에요.',
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: '주문부터 요청까지 한번에.',
      description:
        'QR코드 한번에 간편하게 주문까지, 요청사항이 있다면 걱정 없이 추가하세요.',
      linkText: 'Learn more',
      delay: '400',
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: '원하는 시스템으로 결제할 수 있어요',
      description:
        '대면 결제부터 다양한 결제수단까지, 원하는 결제 시스템을 선택하세요.',
      linkText: 'Learn more',
      delay: '700',
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: '편리한 POS, 따로 관리할 필요 없어요',
      description:
        'POS와 연동하여 주문과 결제를 한번에 관리하세요. 띵동이 모든 것을 해결해드릴게요.',
      linkText: 'Learn more',
      delay: '1000',
    },
    {
      image: Feature4Img,
      bgImage: Feature4BgImg,
      title: '대시보드로 매출을 한눈에',
      description:
        '매출을 한눈에 확인하세요. 매출이 얼마나 증가했는지 확인해보세요!',
      linkText: 'Learn more',
      delay: '1300',
    }
  ],
};

export const ctaData = {
  title: '주문/결제도 띵동과 함께',
  subtitle: '매출이 얼마나 증가했는지 확인해보세요!',
  btnText1: '더 알아보기',
  btnText2: '문의하기',
};

export const footerData = {
  logo: Logo,
  address: '경기도 안산시 상록구 한양대학로 55',
  email: 'yskim80512@naver.com',
  phone: '1-232-7788 (Main)',
  list: [
    {
      name: 'Support',
      href: '#',
    },
    {
      name: 'Guide',
      href: '#',
    },
    {
      name: 'Q & A',
      href: '#',
    },
  ],
  socialList: [
    {
      icon: <FaYoutube />,
      href: '#',
    },
    {
      icon: <FaInstagram />,
      href: '#',
    },
    {
      icon: <FaGithub />,
      href: 'https://github.com/TableService-DD',
    },
  ],
};

export const copyrightData = {
  text: '© Project Ddingdong, 2023. All rights reserved.',
  icon: <BsChatDotsFill />,
};
