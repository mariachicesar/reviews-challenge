import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "../../App";
import { Row, Col, Button, Card, Form } from "react-bootstrap";

function DetailsReply({ id }) {
  const [inputValue, setInputValue] = useState("");
  const { replies, setReplies } = useContext(AppContext);

  const replyById = (id) => {
    return replies.find((obj) => obj.id === id);
  };

  const findReplyById = useMemo(() => replyById(id), [replies]);

  let onChangeInput = (e) => {
    let newValue = e.target.value;
    setInputValue(newValue);
  };

  const onReplyBtn = () => {
    console.log(replies, inputValue);
    let obj = {};
    obj["id"] = id;
    obj["reply"] = inputValue;
    obj["published_at"] = new Date().toDateString();
    console.log(obj, "submit");
    setReplies([...replies, obj]);
  };

  const onEditBtn = () => {
    let remove = replies.filter((obj) => obj.id !== id);
    setReplies([remove]);
    console.log(replies, "remove");
  };

  console.log(replies, findReplyById, "replies");

  return (
    <div>
      <Card className="m-4" border="info">
        {/* <Card.Header>Header</Card.Header> */}
        {findReplyById !== undefined ? (
          <Card.Body>
            <Card.Title>{findReplyById.reply}</Card.Title>
            <Card.Text>{findReplyById.published_at}</Card.Text>
            <Button type="button" onClick={onEditBtn}>
              Edit
            </Button>
          </Card.Body>
        ) : (
          <Card.Body>
            <Form
            // onSubmit={onReplyBtn}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Reply to Review</Form.Label>
                <Form.Control as="textarea" rows={3} onChange={onChangeInput} />
              </Form.Group>
              <Button type="button" onClick={onReplyBtn}>
                Submit
              </Button>
            </Form>
          </Card.Body>
        )}

        {/* <Card.Footer>Footer</Card.Footer> */}
      </Card>
    </div>
  );
}

export default DetailsReply;
