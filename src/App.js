import React, { useState } from "react";
import Draggable from "react-draggable";
import useUndo from "use-undo";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [textFields, { set: setTextFields, undo, redo, canUndo, canRedo }] =
    useUndo([]);
  const [focusedFieldId, setFocusedFieldId] = useState(null);

  const handleAddText = () => {
    const newTextField = {
      id: Date.now(),
      text: "",
      fontSize: 16,
      fontFamily: "sans-serif",
      isBold: false,
      isUnderline: false,
      color: "#000000",
      position: { x: 0, y: 0 },
    };
    setTextFields([...textFields.present, newTextField]);
  };

  const handleTextChange = (id, newText) => {
    setTextFields(
      textFields.present.map((field) =>
        field.id === id ? { ...field, text: newText } : field
      )
    );
  };

  const handleStyleChange = (id, styleKey, value) => {
    setTextFields(
      textFields.present.map((field) =>
        field.id === id
          ? {
              ...field,
              [styleKey]:
                typeof value === "function" ? value(field[styleKey]) : value,
            }
          : field
      )
    );
  };

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      <Header undo={undo} redo={redo} canUndo={canUndo} canRedo={canRedo} />
      <div
        className="flex-1 bg-white relative overflow-hidden"
        id="body-container"
      >
        {textFields.present.map((field) => (
          <Draggable
            key={field.id}
            bounds="#body-container"
            defaultPosition={{
              x: window.innerWidth / 2 - 100,
              y: window.innerHeight / 2 - 100,
            }}
            onStart={() => setFocusedFieldId(field.id)}
          >
            <div
              style={{
                fontSize: `${field.fontSize}px`,
                fontFamily: field.fontFamily,
                fontWeight: field.isBold ? "bold" : "normal",
                fontStyle: field.isItalic ? "italic" : "normal",
                textDecoration: field.isUnderline ? "underline" : "none",
                color: field.color,
              }}
              className="cursor-pointer absolute"
              onClick={() => setFocusedFieldId(field.id)}
            >
              <input
                type="text"
                value={field.text}
                onChange={(e) => handleTextChange(field.id, e.target.value)}
                placeholder="Write Here..."
                className="rounded-sm outline-none bg-transparent"
                style={{
                  fontSize: `${field.fontSize}px`,
                  fontFamily: field.fontFamily,
                  fontWeight: field.isBold ? "bold" : "normal",
                  textDecoration: field.isUnderline ? "underline" : "none",
                  fontStyle: field.isItalic ? "italic" : "normal",
                  color: field.color,
                  width: `${field.text.length || 11}ch`,
                }}
              />
            </div>
          </Draggable>
        ))}
      </div>
      <Footer
        handleAddText={handleAddText}
        handleStyleChange={(styleKey, value) => {
          if (focusedFieldId) {
            handleStyleChange(focusedFieldId, styleKey, value);
          }
        }}
      />
    </div>
  );
};

export default App;
