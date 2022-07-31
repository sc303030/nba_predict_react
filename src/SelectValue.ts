import {
    atom,
  } from 'recoil';

export const selectValueState = atom<string>({
    key: "selectValueState",
    default : "all",
})

