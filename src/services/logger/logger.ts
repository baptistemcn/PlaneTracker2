/* eslintdisable no-console: 0  */
/* eslint-disable no-console */

export class Logger {
  public INFO(message: string) {
    console.log(message);
  }

  public DEBUG(message: string) {
    console.info(message);
  }

  public WARN(message: string) {
    console.warn(message);
  }

  public ERROR(message: string) {
    console.error(message);
  }
}
