export class Email {
  constructor(private subject: string, private content: string) {
    this.subject = subject;
    this.content = content;
  }
  getSubject() {
    return this.subject;
  }
  getContent() {
    return this.content;
  }
}
