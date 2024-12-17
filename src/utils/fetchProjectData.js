import { default as axios } from 'axios';

async function fetchProjectData(repo, path = '') {
  const url = `https://api.github.com/repos/linnkognito/${repo}/contents/${path}`;

  try {
    const res = await axios.get(url);
    return res.data;
  } catch (err) {
    if (err.response?.status === 403)
      console.error('GitHub API rate limit exceeded.');

    if (import.meta.env.MODE === 'development')
      console.error(`Failed to fetch data. (${err.message})`);

    throw err;
  }
}

export default fetchProjectData;
