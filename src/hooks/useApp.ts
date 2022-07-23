import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux';

import { AppDispatch, RootState } from '@/module/store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
