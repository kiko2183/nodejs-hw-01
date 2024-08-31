import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = JSON.parse(await fs.readFile(PATH_DB, 'utf-8'));

    if (contacts.length > 0) {
      contacts.pop();

      await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2));

      console.log('Останній контакт успішно видалено.');
    } else {
      console.log('Немає контактів для видалення.');
    }
  } catch (error) {
    console.error('Помилка під час видалення контакту:', error.message);
  }
};

removeLastContact();
