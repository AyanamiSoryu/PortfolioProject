type ChatSpec = Array<{
  fieldName?: string;
  message: string;
  fallBackMessage: string | null;
  validation: RegExp | null;
}>;

type FormData = Record<string, string>;

type ChatComponentProps = {
  spec: ChatSpec;
  onSubmit: (formData: FormData) => void;
  title: string;
};

const yesFunc = (text: FormData) => {
  console.log(text);
};

const chat: ChatSpec = [
  {
    message: 'Heil Shrek !!!',
    fallBackMessage: null,
    validation: null
  },
  {
    fieldName: 'Name',
    message: 'Have you heard about our true god Saint-Shrek ? Tell us your name, NOW !!!',
    fallBackMessage: 'Heretic !!! true to Shrek',
    validation:
      // /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
      /.+/
  },
  {
    fieldName: 'email',
    message: 'Would you like to sacrifice your flesh and bones to Shrek saint-church ? Give us your email',
    fallBackMessage: 'Heretic !!! you should be pleased for that honor',
    validation: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },
  {
    fieldName: 'Yes or Yes',
    message: 'Shrek is Love ?',
    fallBackMessage: 'It does not matter, Shrek will find you, Shrek will love you',
    validation: /^(?:Yes)$/
  }
];

const ChatProps: ChatComponentProps = {
  spec: chat,
  onSubmit: yesFunc,
  title: 'Contact me'
};

export default ChatProps;
