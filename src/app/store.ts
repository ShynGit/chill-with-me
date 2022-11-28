import * as toolkit from "@reduxjs/toolkit";
import soundSlice from "../features/sound/soundSlice";

export const store = toolkit.configureStore({
    reducer: {
        sound: soundSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
