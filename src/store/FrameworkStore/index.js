import { observable, computed } from "mobx";

import items from "./items";

export default class FrameworkStore {
  @observable frameworksList = items;
  @observable searchWord = "";
  @computed
  get filterFrameworks() {
    let currentRegex = new RegExp(this.searchWord, "i");
    return this.frameworksList.filter(framework => {
      return (
        currentRegex.test(framework.title) ||
        currentRegex.test(framework.description)
      );
    });
  }
}
