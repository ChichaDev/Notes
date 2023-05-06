import React, { createContext, useState, useEffect } from "react";

import dbService from "../services/dbService";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [notes, setNotes] = useState([]);

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
      title: "",
      description: "",
    };
    await dbService.addNewNote(newNote);
  };

  const handleNoteDelete = async () => {
    if (selectedNoteId) {
      await dbService.deleteNoteById(selectedNoteId);
    }
    console.log("Удалено из Базы");
  };

  const handleNoteEdit = async () => {
    if (selectedNoteId) {
      const noteToUpdate = await dbService.getNoteById(selectedNoteId);

      // Выполните редактирование заметки из WORKSPACE передать контекст

      // Сохраните отредактированную заметку в базу данных
      await dbService.updateNoteById(selectedNoteId, noteToUpdate);
    }
  };

  return (
    <AppContext.Provider
      value={{
        selectedNoteId,
        setSelectedNoteId,
        notes,
        handleNoteDelete,
        handleNoteEdit,
        handleNoteAdd,
        getAllNotes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
