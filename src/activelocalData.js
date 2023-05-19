import { KEYS } from "./constants"
export const getCurrentUserInfo = () => JSON.parse((localStorage.getItem(KEYS.UserDetails))) || null

export const settingCurrentUserData  = (currentUser) => localStorage.setItem(KEYS.UserDetails, JSON.stringify(currentUser))