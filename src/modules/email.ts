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
      process.env.REACT_APP_SERVICE_MAIL_ID??"service_tcd76lf",
      process.env.REACT_APP_TEMPLATE_MAIL_ID??"template_moufnqi",
      {
        from_name: email.to_name,
        to_name: email.to_name,
        message: email.message,
        reply_to: email.from_email,
        subject:email.subject,
        telephone:email.tel
      },
      process.env.REACT_APP_USER_MAIL_ID??"user_IqJ4It0DMUudiOwBRh7dM");
  };
  
}