import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faCirclePlay,
  faAngleDown,
  faNetworkWired,
  faHeart,
  faWaveSquare,
  faCalendar,
  faGlobe,
  faUsersRectangle,
  faMagnifyingGlassPlus,
  faLink,
  faAngleRight,
  faChevronDown,
  faLocationDot,
  faPhone,
  faEnvelope,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBars,
  faCirclePlay,
  faAngleDown,
  faNetworkWired,
  faHeart,
  faWaveSquare,
  faCalendar,
  faGlobe,
  faUsersRectangle,
  faMagnifyingGlassPlus,
  faLink,
  faAngleRight,
  faChevronDown,
  faLocationDot,
  faPhone,
  faEnvelope,
  faChevronRight
);

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
