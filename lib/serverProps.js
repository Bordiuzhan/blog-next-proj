const BASE_URL = process.env.BASE_URL;

export async function getServerSideProps(id) {
  const response = await fetch(`${BASE_URL}/api/posts/${id}`);
  const data = await response.json();
  return data;
}
