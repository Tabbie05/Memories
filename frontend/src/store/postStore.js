import { create } from 'zustand';
import { fetchPost } from '../api/index.js';  // Make sure the path is correct
import { createPost } from '../api/index.js';

const usePostStore = create((set) => ({
  posts: [],
  loading: false,

  fetchPosts: async () => {
    try {
      set({ loading: true });
      const res = await fetchPost();
      set({ posts: res.data, loading: false });  // ✅ Ensure res.data is correct
    } catch (err) {
      console.error("Failed to fetch posts:", err);
      set({ loading: false });
    }
  },

  addPost: async (postData) => {
    try {
      const res = await createPost(postData);
      set((state) => ({ posts: [...state.posts, res.data] }));
    } catch (err) {
      console.error("Failed to add post:", err);
    }
  }
}));


export default usePostStore;
