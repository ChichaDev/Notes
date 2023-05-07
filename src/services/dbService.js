import Dexie from 'dexie';
import axios from 'axios';

const API_KEY = 'aGr2CWiYfdS4kNWQ3dU8o3	';
const API_BASE_URL = 'https://api.quintadb.com';

const quintadbService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
});

class DBService {
  constructor() {
    const dbType = process.env.DB_TYPE;

    if (dbType === "quintadb") {
      this.service = quintadbService;
    } else {
      this.db = new Dexie("notes");
      this.db.version(1).stores({
        notes: "++id,title,description",
      });
    }
  }

  async getAllNotes() {
    if (this.service) {
      try {
        const response = await this.service.get('/notes');
        return response.data;
      } catch (error) {
        console.error('Error while getting records from QuintaDB:', error);
        throw error;
      }
    } else {
      return await this.db.notes.toArray();
    }
  }

  async addNewNote(note) {
    if (this.service) {
      try {
        const response = await this.service.post('/notes', note);
        return response.data;
      } catch (error) {
        console.error('Error creating record in QuintaDB:', error);
        throw error;
      }
    } else {
      return await this.db.notes.add(note);
    }
  }

  async deleteNoteById(id) {
    if (this.service) {
      try {
        await this.service.delete(`/notes/${id}`);
      } catch (error) {
        console.error('Error while deleting record from QuintaDB:', error);
        throw error;
      }
    } else {
      return await this.db.notes.delete(id);
    }
  }

  async updateNoteById(id, note) {
    if (this.service) {
      try {
        const response = await this.service.put(`/notes/${id}`, note);
        return response.data;
      } catch (error) {
        console.error('Error while updating record in QuintaDB:', error);
        throw error;
      }
    } else {
      return await this.db.notes.update(id, note);
    }
  }
}

const dbService = new DBService();
export default dbService;
