import { createContext, useContext } from "react";

const ProfileDataContext = createContext();
const setProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);