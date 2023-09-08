type TrueChatSpec = Array<{
  fieldName?: string;
  message: string;
  fallBackMessage: string | null;
  validation: RegExp | null;
}>;

type FormData = Record<string, string>;

type ChatComponentProps = {
  spec: TrueChatSpec;
  onSubmit: (formData: FormData) => void;
  title: string;
};

const yesFunc = (text: FormData) => {
  console.log(text);
};

const trueChat: TrueChatSpec = [
  {
    message: 'Wanna do something cool together? Write your thoughts here',
    fallBackMessage: null,
    validation: null
  },
  {
    fieldName: 'Name',
    message: 'What’s your name?',
    fallBackMessage: 'Please enter your name',
    validation:
      // /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u
      /.+/
  },
  {
    fieldName: 'email',
    message: 'Cool. And your email?',
    fallBackMessage: 'Please try another one',
    validation: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  },
  {
    fieldName: 'feedback',
    message: 'Say something about yourself and be nice to others bitch',
    fallBackMessage: 'Thank you for your message! I will answer you as fast as I can. Now you cal listen to some music',
    validation: /.+/
  }
];

const TrueChatProps: ChatComponentProps = {
  spec: trueChat,
  onSubmit: yesFunc,
  title: 'Contact me'
};

export default TrueChatProps;
