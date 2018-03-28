import axios from 'axios';

// axios config
axios.defaults.baseURL = 'https://cdn.contentful.com/spaces';
// axios.defaults.withCredentials = true;

const SPACE_ID = 'n7eu4msyhu02';
const ACCESS_TOKEN =
  '8055074a7d598e39a79f67cd73a19af5222c862ae3209ef7a84fbbc18428f5cd';

const handleError = (error) => {
  // context.commit('getSpaceFail');
  console.log(error);
  return Promise.reject(error.response.data.message);
};

const STATE = {
  spaceData: {},
  allEntries: [],
};

const getters = {};

const mutations = {
  getSpaceSuccess: (state, spaceData) => {
    state.spaceData = spaceData;
  },
  getEntriesSuccess: (state, entriesData) => {
    state.allEntries = entriesData;
  },
  getEntrySuccess: (state, entryData) => {
    console.log(entryData);
  },
};

const actions = {
  getSpace: context => axios.get(`/${SPACE_ID}`, {
    params: {
      access_token: ACCESS_TOKEN,
    },
  })
    .then((res) => {
      context.commit('getSpaceSuccess', res.data);
      return res.data;
    }, handleError),
  getEntries: context => axios.get(`/${SPACE_ID}/entries`, {
    params: {
      access_token: ACCESS_TOKEN,
    },
  })
    .then((res) => {
      context.commit('getEntriesSuccess', res.data);
      return res.data;
    }, handleError),
};

export default {
  state: STATE,
  getters,
  mutations,
  actions,
};
