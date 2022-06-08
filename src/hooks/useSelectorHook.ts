import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState } from "../store";

export const useSelectorHook: TypedUseSelectorHook<RootState> = useSelector;
