import React, { useContext } from "react";
import { Row, Col, Input } from "antd";

import { FormDemoContext } from "./FormDemo";

export default function FormListInputAcc() {
  const { account, dispatch1 } = useContext(FormDemoContext);

  return (
    <div>
      <Row>
        <Col>账号</Col>
        <Col>
          <Input
            type="text"
            value={account}
            placeholder="请输入"
            onChange={(e) =>
              dispatch1({ type: "changeValue", newValue: e.target.value })
            }
          />
        </Col>
      </Row>
    </div>
  );
}
