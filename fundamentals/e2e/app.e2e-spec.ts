import { FundamentalsPage } from './app.po';

describe('fundamentals App', () => {
  let page: FundamentalsPage;

  beforeEach(() => {
    page = new FundamentalsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
