import { RootState } from "@/store/store";

export const selectSidebar = (state: RootState) => state.sidebarReducer;