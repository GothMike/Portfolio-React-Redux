import { put, call, takeLatest } from "redux-saga/effects";
import axios from "axios";

import { skillsUrl, skillsFetched, skillsFetchingError } from "../actions/skills";

export function* fetchSkillsSaga() {
  try {
    const response = yield call(() => axios.get(skillsUrl()));
    yield put(skillsFetched(response.data));
  } catch (error) {
    yield put(skillsFetchingError());
  }
}

export function* watchSkillsActions() {
  yield takeLatest("SKILLS_FETCHING", fetchSkillsSaga);
}
