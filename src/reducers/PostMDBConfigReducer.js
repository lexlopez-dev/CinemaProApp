import { POST_MDB_CONFIG } from "../actions/types";

const initialState = {
  apiKey: "13403154d9f3f6fc07972f58977a650b",
};

const PostMDBConfig = (state = initialState, action) => {
  switch (action.type) {
    case POST_MDB_CONFIG:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default PostMDBConfig;
