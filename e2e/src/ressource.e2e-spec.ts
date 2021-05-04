import { browser, logging } from 'protractor';
import { RessourcePage } from './ressource.po';

describe('workspace-project App', () => {
  let page: RessourcePage;

  beforeEach(() => {
    page = new RessourcePage();
  });

  it('should display page detail ressource', async () => {
    await page.navigateTo();
    const ressource = await page.getDetailRessource('6046076032636223fb000166');
    expect(ressource["entries"].titre).toEqual("Le muppets show");
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
