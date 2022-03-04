import { Router } from 'express';
import { User } from '../entities/User';

export const users = Router();

users.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await req.entityManager.findOneOrFail(User, { id });
    res.send(user);
  } catch (err) {
    res.status(400).send(err);
  }
});

users.post('', async (req, res) => {
  const { userInfo } = req.body;
  const newUser = new User(userInfo);
  await req.entityManager.persistAndFlush(newUser);
  res.send();
});

users.patch('', async (req, res) => {
  const { userInfo } = req.body;
  const newUser = new User(userInfo);
  await req.entityManager.persistAndFlush(newUser);
  res.send();
});
