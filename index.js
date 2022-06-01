import {
  storagedData, removeBookDiv, createNewBookDiv, createNewBook, populateData,
} from './modules/createElementsModule.js';
import { showContent } from './modules/showElementsModule.js';
import showTime from './modules/dateNowModule.js';

showTime();
storagedData();
removeBookDiv();
createNewBookDiv();
createNewBook();
populateData();
showContent();