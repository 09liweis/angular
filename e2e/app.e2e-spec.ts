import { MyCliAppPage } from './app.po';

describe('my-cli-app App', () => {
  let page: MyCliAppPage;

  beforeEach(() => {
    page = new MyCliAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
