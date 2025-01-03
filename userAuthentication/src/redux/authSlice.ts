import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface AuthState {
    isLoading: boolean;
    error: string | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    isLoading: false,
    error: null,
    isAuthenticated: false,
};

// Login Async Thunk
export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { email: string; password: string }, thunkAPI) => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return await response.json();
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

// Logout Reducer
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout(state) {
            state.isAuthenticated = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuthenticated = true;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export const register = createAsyncThunk(
    'auth/register',
    async (userData: { email: string; password: string }, thunkAPI) => {
        // Burada register ile ilgili aynı mantığı takip edebilirsiniz.
    }
);
export default authSlice.reducer;
