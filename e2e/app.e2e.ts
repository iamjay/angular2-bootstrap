import { WhatispendPage } from './app.po';

describe('whatispend App', function() {
  let page: WhatispendPage;

  beforeEach(() => {
    page = new WhatispendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('whatispend works!');
  });
});
