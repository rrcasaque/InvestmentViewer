export class Error {
  constructor(private message: string, private status: number) {
    this.message = message;
  }
  getMessage() {
    return this.message;
  }
  getStatus() {
    return this.status;
  }
}
