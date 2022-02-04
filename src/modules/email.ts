import emailjs, {init} from '@emailjs/browser';


export interface IMail {
  from_email : string,
  to_name : string,
  message:string,
  subject:string,
  tel:string,
}

export class Email {

  public static sendEmail = async (email : IMail) => {
    init("user_IqJ4It0DMUudiOwBRh7dM");
    return emailjs.send(
      process.env.SERVICE_MAIL_ID??"service_tcd76lf",
      process.env.TEMPLATE_MAIL_ID??"template_moufnqi",
      {
        from_name: email.to_name,
        to_name: email.to_name,
        message: email.message,
        reply_to: email.from_email,
        subject:"test Email",
        telephone:email.tel
      },
      process.env.USER_MAIL_ID??"user_IqJ4It0DMUudiOwBRh7dM");
  };
  
}