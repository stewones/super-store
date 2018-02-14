import { SuperStorePage } from './app.po';

describe('super-store App', () => {
  let page: SuperStorePage;

  beforeEach(() => {
    page = new SuperStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
