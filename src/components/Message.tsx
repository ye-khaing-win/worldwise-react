interface MessageProps {
  message: string;
}

const Message = (props: MessageProps) => {
  const { message } = props;
  return (
    <p className="text-center text-3xl w-4/5 my-8 mx-auto font-semibold">
      <span role="img">👋</span> {message}
    </p>
  );
};

export default Message;
