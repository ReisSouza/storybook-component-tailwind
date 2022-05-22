import { axios } from '@/lib/axios';
import { Post } from '../types';

export default function getPosts(): Promise<Post[]> {
  return axios.get('/posts');
}
