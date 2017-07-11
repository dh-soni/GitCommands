import { DefaultAng2AppPage } from './app.po';

describe('default-ang2-app App', () => {
  let page: DefaultAng2AppPage;

  beforeEach(() => {
    page = new DefaultAng2AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
