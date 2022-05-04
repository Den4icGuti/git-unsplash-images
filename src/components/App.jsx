import { Routes, Route } from 'react-router-dom';

import Container from './Container';
import Navigation from './Navigation';
import HomePage from './TodoEditor/HomePage';
import Clock from './TodoEditor/Clock';
import Counter from './TodoEditor/Counter';
import Form from './TodoEditor/Form';
import ColorPeacker from './TodoEditor/ColorPeacker';
import Gallery from './TodoEditor/GadgetNews/Gallery';
import UserMenu from './TodoEditor/context/UserMenu';

const colorPeackerOptions = [
  { label: 'red', color: '#F44336' },
  { label: 'green', color: '#4CAF50' },
  { label: 'blue', color: '#2196F3' },
  { label: 'grey', color: '#607D8B' },
];

export const App = () => {
  return (
    <Container>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="clock" element={<Clock />} />
        <Route path="counter" element={<Counter />} />
        <Route path="form" element={<Form />} />
        <Route
          path="colorpeacker"
          element={<ColorPeacker options={colorPeackerOptions} />}
        />
        <Route path="gallery" element={<Gallery />} />
        <Route path="context" element={<UserMenu />} />
      </Routes>
    </Container>
  );
};
