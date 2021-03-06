import AbstractError from '../../../../error/abstract-error';

export default class MainFileIsDir extends AbstractError {
  mainFile: string;
  constructor(mainFile: string) {
    super();
    this.mainFile = mainFile;
  }
}
