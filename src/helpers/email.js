import emailjs from "@emailjs/browser";

export const sendEmail = (referencia) => {
  const serviceId = "service_4shr00f";
  const templateId = "template_4dtks3o";

  const apikey = "zgfMUyMwJopIxogQh";

  emailjs
    .sendForm(serviceId, templateId, referencia, apikey)
    .then((result) => console.log(result.text))
    .catch((error) => console.error(error));
};
