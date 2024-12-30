import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrush,faTrash, faUndo, faFont, faImage, faArrowLeft,faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const DrawablePage = () => {
  const [lines, setLines] = useState([]);
  const [textElements, setTextElements] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedColor, setSelectedColor] = useState('#000');
  const [canDraw, setCanDraw] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState('#fff');
  const [draggingTextIndex, setDraggingTextIndex] = useState(null);

  const navigate = useNavigate();

  const handleMouseDown = (e) => {
    if (!canDraw) return;
    setIsDrawing(true); // Set drawing state
    const rect = e.target.getBoundingClientRect();
    const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    setCurrentLine([point]); // Start a new line with the initial point
  };

 
const handleMouseMove = (e) => {
  if (!isDrawing || !canDraw) return; // Only proceed if currently drawing
  const rect = e.target.getBoundingClientRect();
  const point = { x: e.clientX - rect.left, y: e.clientY - rect.top };
  setCurrentLine((prev) => [...prev, point]); // Append points to the current line
};

const startDraggingText = (e, index) => {
  setDraggingTextIndex(index); // Track which text element is being dragged
};

const handleDraggingText = (e, index) => {
  if (draggingTextIndex !== null && draggingTextIndex === index) {
    const updatedTextElements = [...textElements];
    const rect = e.target.parentElement.getBoundingClientRect();

    updatedTextElements[index].x = e.clientX - rect.left;
    updatedTextElements[index].y = e.clientY - rect.top;

    setTextElements(updatedTextElements);
  }
};

const stopDraggingText = () => {
  setDraggingTextIndex(null); // Stop tracking dragging
};


const handleMouseUp = () => {
  if (!canDraw) return; 
  setIsDrawing(false); 
  if (currentLine.length > 0) {
    setLines((prevLines) => [...prevLines, { points: currentLine, color: selectedColor }]);
    setCurrentLine([]); 
  }
};

  const clearCanvas = () => {
    setLines([]);
    setTextElements([]);
    setImages([]);
  };

  const undoLastAction = () => {
    setLines((prev) => prev.slice(0, -1));
  };

  const addText = () => {
    const newTextElement = { text: 'New Text', x: 50, y: 50, editable: true };
    setTextElements([...textElements, newTextElement]);
  };
  const updateText = (index, newText) => {
    const updatedTextElements = [...textElements];
    updatedTextElements[index].text = newText;
    updatedTextElements[index].editable = false; // Disable editing after the update
    setTextElements(updatedTextElements);
  };

  const pickImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImages([...images, { src: reader.result, x: 100, y: 100, width: 200, height: 200 }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const pickColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <Container>
      <TopBar>
        <FontAwesomeIcon icon={faArrowLeft} size="xl" onClick={() => navigate(-1)} />
        <FontAwesomeIcon icon={faTrashAlt} size="xl" onClick={clearCanvas} />
      </TopBar>
      <CanvasContainer
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        style={{ backgroundColor }}
      >
        <svg style={{ width: '100%', height: '100%' }}>
          {lines.map((line, index) => (
            <polyline
              key={index}
              points={line.points.map((p) => `${p.x},${p.y}`).join(' ')}
              stroke={line.color}
              strokeWidth="2"
              fill="none"
            />
          ))}
          {currentLine.length > 0 && (
            <polyline
              points={currentLine.map((p) => `${p.x},${p.y}`).join(' ')}
              stroke={selectedColor}
              strokeWidth="2"
              fill="none"
            />
          )}
        </svg>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="Uploaded"
            style={{ position: 'absolute', top: image.y, left: image.x, width: image.width, height: image.height }}
          />
        ))}
        {textElements.map((element, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: element.y,
              left: element.x,
              color: selectedColor,
              cursor: 'move',
            }}
            onMouseDown={(e) => startDraggingText(e, index)}
            onMouseMove={(e) => handleDraggingText(e, index)}
            onMouseUp={stopDraggingText}
            onDoubleClick={() => {
              const updatedTextElements = [...textElements];
              updatedTextElements[index].editable = true; // Enable editing on double-click
              setTextElements(updatedTextElements);
            }}
          >
            {element.editable ? (
              <input
                type="text"
                value={element.text}
                onChange={(e) => updateText(index, e.target.value)}
                onBlur={() => {
                  const updatedTextElements = [...textElements];
                  updatedTextElements[index].editable = false; // Disable editing on blur
                  setTextElements(updatedTextElements);
                }}
                autoFocus
                style={{
                  fontSize: '18px',
                  color: selectedColor,
                  border: 'none',
                  background: 'transparent',
                  outline: 'none',
                }}
              />
            ) : (
              element.text
            )}
          </div>
        ))}
      </CanvasContainer>
      <BottomToolbar>
        <button onClick={() => setCanDraw(!canDraw)}>
          <FontAwesomeIcon icon={faBrush} color={canDraw ? selectedColor : '#000'} />
        </button>
        <button onClick={addText}>
          <FontAwesomeIcon icon={faFont} />
        </button>
        <button onClick={undoLastAction}>
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button onClick={clearCanvas}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <input type="file" accept="image/*" onChange={pickImage} style={{ display: 'none' }} id="upload-image" />
        
        <label htmlFor="upload-image">
          <FontAwesomeIcon icon={faImage} size="2x" />
        </label>
        {canDraw && (
          <ColorsContainer>
            <ColorCircle color="red" onClick={() => pickColor('red')} />
            <ColorCircle color="blue" onClick={() => pickColor('blue')} />
            <ColorCircle color="pink" onClick={() => pickColor('pink')} />
            <ColorCircle color="black" onClick={() => pickColor('black')} />
          </ColorsContainer>
        )}
      </BottomToolbar>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background-color: #ddd;
`;

const CanvasContainer = styled.div`
  flex: 1;
  position: relative;
  border: 1px solid #ddd;
  cursor: crosshair;
`;

const BottomToolbar = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #ddd;

  button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
  }
`;

const ColorsContainer = styled.div`
  display: flex;
  justify-content: center;
  position:absolute;
  flex-direction:column;
  margin-top:-150px;
  right:0;
  `

const ColorCircle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
`;

export default DrawablePage;