import { giphySearch } from "../../helpers/Giphy";

describe('Tests over Giphy helper', () => {
  test('debe traer 10 elementos', async () => {

    const query = 'Halo 4';
    const limit = 10;
    const response = await giphySearch(query, limit);

    expect(response.gifs.length).toBe(limit);
    expect(response.count).toBe(limit);
  });
})