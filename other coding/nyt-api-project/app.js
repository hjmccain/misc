// STATE

const BASE_URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
      API_KEY = '1b4a231dfd4449f28a0a4849d46dade1',

const query = {
  q: '',
  begin_date: '',
  end_date: '',
}

// MANIPULATE
const getDate = () => {
  today = new Date();
  month = today.getMonth() + 1).toString();
  day = today.getDate()).toString();
  if (month.length < 2) {
    month = '0' + month;
  }
}
TODAY = new Date(),
MONTH = (TODAY.getMonth() + 1).toString())
DAY = (TODAY.getDate()).toString())
TODAYS_DATE = ((TODAY.getFullYear()).toString() + MONTH + DAY);

// RENDER

// LISTEN
