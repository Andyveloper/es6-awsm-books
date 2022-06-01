import { DateTime } from './luxon.js';

const now = DateTime.now();

const dateTime = now.toLocaleString(DateTime.DATETIME_FULL);

const timeContainer = document.querySelector('.date-now__content');

const showTime = () => {
    timeContainer.innerHTML = dateTime;
};

export default showTime;

