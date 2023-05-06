// import QuintaDB from "quintadb-js";
import Dexie from 'dexie';

class DBService {
  constructor() {
    const dbType = process.env.DB_TYPE; // тип базы данных, указанный в параметре командной строки

    if (dbType === "quintadb") {
      // this.db = new QuintaDB({
      //   // параметры конфигурации для QuintaDB
      //   apiKey: "YOUR_API_KEY",
      //   dbId: "YOUR_DATABASE_ID",
      //   collectionName: "notes",
      // });
    } else {
      // используем indexedDB, как в предыдущем примере
      this.db = new Dexie("notes");
      this.db.version(1).stores({
        notes: "++id,title,description",
      });
    }
  }

  async getAllNotes() {
    // if (this.db instanceof QuintaDB) {
    //   const result = await this.db.find({});
    //   return result.records;
    //  } 
    // else {
    return await this.db.notes.toArray();
    // }
  }

  async addNewNote(note) {
    // if (this.db instanceof QuintaDB) {
    //   return await this.db.createRecord(note);
    // } else {
    return await this.db.notes.add(note);
    // }
  }

  async deleteNoteById(id) {
    // if (this.db instanceof QuintaDB) {
    //   return await this.db.deleteRecord(id);
    // } else {
    return await this.db.notes.delete(id);
    // }
  }

  async updateNoteById(id, note) {
    // if (this.db instanceof QuintaDB) {
    //   return await this.db.updateRecord(id, note);
    // } else {
    return await this.db.notes.update(id, note);
    //   }
  }
}

const dbService = new DBService();
export default dbService;
