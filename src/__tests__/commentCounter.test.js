import commentCounter from '../modules/commentCounter.js';

describe('commentCounter', () => {
  const mockResponse = [{ id: 1 }, { id: 2 }, { id: 3 }];
  const mockJsonPromise = Promise.resolve(mockResponse);
  const mockFetchPromise = Promise.resolve({
    json: () => mockJsonPromise,
  });

  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should return the correct comment count', async () => {
    const showId = '1';

    const count = await commentCounter.getCommentCount(showId);

    expect(count).toBe(3);
    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/p01X0Mr4syDGinD4IhgC/comments?item_id=${showId}`);
  });

  test('should return a default value and display an error message when there is an error', async () => {
    const showId = '1';
    global.fetch = jest.fn().mockRejectedValueOnce(new Error('Fetch error'));

    const count = await commentCounter.getCommentCount(showId);

    expect(count).toBe(0);
    expect(document.getElementsByClassName('error-message')).not.toBeNull();
  });
});
