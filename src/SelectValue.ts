import {
    atom,
  } from 'recoil';

export const selectValueState = atom<string>({
    key: "selectValueState",
    default : "all",
})

export const testvalue = atom<string>({
  key: "test",
  default : "test",
})
