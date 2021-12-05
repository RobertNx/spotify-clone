import { atom } from "recoil";

export const playState = atom ({
    key: "playState",
    default: false,
});

export const playTrackingState = atom ({
    key: "playTrackingState",
    default: "",
});