import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from './api';

const getProductInfo = createAsyncThunk('getProductInfo', async (id: number) => {
  try {
    return await api.getProductInfo(id);
  } catch (error) {
    console.error('Product info:', error);
  }
});

export default {
  getProductInfo
};
