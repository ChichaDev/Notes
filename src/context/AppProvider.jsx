import React, { createContext, useState, useEffect } from "react";

import dbService from "../services/dbService";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isNoteSelected, setIsNoteSelected] = useState(true);

  const getAllNotes = async () => {
    try {
      const allNotes = await dbService.getAllNotes();
      setNotes(allNotes);
    } catch (error) {
      console.error("Ошибка при получении заметок из indexedDB:", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleNoteAdd = async () => {
    const newNote = {
      id: Math.random().toString(36).substr(2, 9),
      title: "",
      description: "",
    };

    await dbService.addNewNote(newNote);

    const updatedNotes = await dbService.getAllNotes();

    setNotes(updatedNotes);
  };

  const handleNoteDelete = async () => {
    if (selectedNoteId) {
      await dbService.deleteNoteById(selectedNoteId);
    }
    const updatedNotes = await dbService.getAllNotes();

    setNotes(updatedNotes);
    console.log("Удалено из Базы");
  };

  const handleNoteUpdate = async (updatedNote) => {
    if (selectedNoteId) {
      await dbService.updateNoteById(selectedNoteId, updatedNote);
      await getAllNotes();
    }
  };

  return (
    <AppContext.Provider
      value={{
        isNoteSelected,
        setIsNoteSelected,
        isEditing,
        setIsEditing,
        selectedNoteId,
        setSelectedNoteId,
        notes,
        handleNoteDelete,
        handleNoteUpdate,
        handleNoteAdd,
        getAllNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
