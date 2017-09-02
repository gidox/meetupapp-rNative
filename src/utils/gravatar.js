import randomString from 'random-string';
export const generateAvatarUrl = () => {
  let hash = randomString({ length: 32 });
  return `https://www.gravatar.com/avatar/${hash}.jpg?d=retro`

}