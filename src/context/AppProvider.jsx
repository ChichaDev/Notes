import React, { createContext, useState, useEffect } from "react";

import dbService from "../services/dbService";

import { v4 as uuidv4 } from "uuid";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedNoteId, setSelectedNoteId] = useState(null);
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [isNoteSelected, setIsNoteSelected] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [hasFilteredNotes, setHasFilteredNotes] = useState(true);

  const getAllNotes = async () => {
    try {
      const allNotes = await dbService.getAllNotes();
      setNotes(allNotes);
    } catch (error) {
      console.error("Error getting notes from indexedDB:", error);
    }
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  const handleNoteAdd = async () => {
    const newNote = {
      id: uuidv4(),
      title: "",
      description: "",
    };

    await dbService.addNewNote(newNote);

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  const handleNoteDelete = async () => {
    if (selectedNoteId) {
      await dbService.deleteNoteById(selectedNoteId);
    }
    const updatedNotes = await dbService.getAllNotes();

    setNotes(updatedNotes);
  };

  const handleNoteUpdate = async (updatedNote) => {
    if (selectedNoteId) {
      await dbService.updateNoteById(selectedNoteId, updatedNote);
      await getAllNotes();
    }
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(value.toLowerCase())
    );
    setNotes(filteredNotes);
    setHasFilteredNotes(filteredNotes.length > 0);
  };

  return (
    <AppContext.Provider
      value={{
        hasFilteredNotes,
        searchValue,
        isNoteSelected,
        isEditing,
        selectedNoteId,
        notes,
        setHasFilteredNotes,
        setSearchValue,
        handleSearchChange,
        setIsNoteSelected,
        setIsEditing,
        setSelectedNoteId,
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
