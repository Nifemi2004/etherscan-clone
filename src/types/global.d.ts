declare module "nodemailer-promise" {
  import nodemailer from "nodemailer";

  interface NodemailerPromiseOptions {
    transport: nodemailer.TransportOptions;
  }

  interface CallableMailer {
    (
      mailOptions: nodemailer.SendMailOptions
    ): Promise<nodemailer.SentMessageInfo>;
  }

  interface ConfigurableMailer {
    config: (
      options: nodemailer.TransportOptions
    ) => (optionsArray: nodemailer.TransportOptions) => CallableMailer;
  }

  const nodemailerPromise: ConfigurableMailer;

  export default nodemailerPromise;
}
