import { browser, by, element } from 'protractor';

export class RessourcePage {
  async navigateTo(): Promise<unknown> {
    return browser.get('/ressource');
  }

  async getDetailRessource(id){
      return  element (by.css('')).click();
  }
}