import { NextApiHandler } from 'next';
import getPosts from '@/features/posts/api';

const listPosts: NextApiHandler = async (req, res) => {
  const posts = await getPosts();
  return res.send(posts);
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case 'GET':
      return listPosts(req, res);
    default:
      return res.status(405).send(''); // sends Method Not Allowed response
  }
};

export default handler;
