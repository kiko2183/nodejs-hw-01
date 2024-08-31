import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  try {
    const fileExists = await fs.access(PATH_DB).then(() => true).catch(() => false);
    
    if (!fileExists) {
      console.error('File does not exist:', PATH_DB);
      return [];
    }
    
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    
    return contacts;
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    return [];
  }
};
