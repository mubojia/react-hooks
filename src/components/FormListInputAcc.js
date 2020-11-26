import React, { useContext } from "react";
import { Row, Col, Input } from "antd";

import { FormDemoContext } from "./FormDemo";

export default function FormListInputAcc() {
  const { state, dispatch } = useContext(FormDemoContext);

  return (
    <div>
      <Row>
        <Col>账号</Col>
        <Col>
          <Input
            type="text"
            value={state.account}
            placeholder="请输入"
            onChange={(e) => {
              dispatch({ type: "changeAccount", account: e.target.value });
            }}
          />
        </Col>
      </Row>
    </div>
  );
}
