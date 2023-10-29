import { all } from "redux-saga/effects";
import { watchSkillsActions } from "./skillsSagas";

export default function* rootSaga() {
  yield all([watchSkillsActions()]);
}
