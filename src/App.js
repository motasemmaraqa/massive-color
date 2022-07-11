import React, { useState, useEffect } from 'react';
import { Route, Routes, useParams, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import NewPaletteForm from './Component/NewPaletteForm';
import Palette from './Component/Palette';
import PalettesList from './Component/PalettesList';
import SingleColor from './Component/SingleColor';
import paletteSeeder from './seeder/paletteSeeder';

import './App.css';

const WarperComponent = (props) => {
  const prams = useParams();
  const childrenWithProps = React.Children.map(props.children, (child) => {
    // Checking isValidElement is the safe way and avoids a typescript
    // error too.
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { prams });
    }
    return child;
  });
  return <div>{childrenWithProps}</div>;
};
const App = (props) => {
  const palettesList = JSON.parse(localStorage.getItem('palettes'));
  console.log(palettesList);
  const [palettes, setPalettes] = useState(palettesList ?? paletteSeeder);

  const location = useLocation();

  const deletePalette = (id) => {
    const newPalette = palettes.filter((pal) => {
      return pal.id !== id;
    });
    setPalettes(newPalette);
  };
  const addPalettes = (palette) => {
    setPalettes((st) => {
      return [...st, palette];
    });
  };

  useEffect(() => {
    localStorage.setItem('palettes', JSON.stringify(palettes));
  }, [palettes]);

  return (
    <TransitionGroup component={null}>
      <CSSTransition key={location.key} classNames="fade" timeout={500}>
        <Routes location={location}>
          <Route
            exact
            path="/"
            element={
              <div className="page">
                <PalettesList
                  palettes={palettes}
                  deletePalette={deletePalette}
                />
              </div>
            }
          />
          <Route
            exact
            path="/palettes/new"
            element={
              <div className="page">
                {' '}
                <NewPaletteForm
                  addPalettes={addPalettes}
                  Palette={palettes}
                ></NewPaletteForm>
              </div>
            }
          />
          <Route
            path="/palettes/:id"
            element={
              <div className="page">
                <WarperComponent>
                  <Palette Palette={palettes}></Palette>
                </WarperComponent>
              </div>
            }
          ></Route>
          <Route
            path="/palettes/:paletteId/:colorId"
            element={
              <div className="page">
                <WarperComponent>
                  <SingleColor Palette={palettes}></SingleColor>
                </WarperComponent>
              </div>
            }
          ></Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
