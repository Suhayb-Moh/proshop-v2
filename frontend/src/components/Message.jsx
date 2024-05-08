import { Alert } from "react-bootstrap";

const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
      <Alert.Heading>{children}</Alert.Heading>
    </Alert>
  );
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
