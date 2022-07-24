import {
    atom,
  } from 'recoil';

export const SelectValueState = atom<string>({
    key: 'selectValueState',
    default : 'all',
})
