import { TesteBulmaPage } from './app.po';

describe('teste-bulma App', () => {
  let page: TesteBulmaPage;

  beforeEach(() => {
    page = new TesteBulmaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
