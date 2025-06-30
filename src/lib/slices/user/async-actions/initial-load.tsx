import { createAsyncThunk } from '@reduxjs/toolkit'

const initialLoad = createAsyncThunk(
  'user/initialLoad',
  async () => {
    return null
  },
)

export default initialLoad