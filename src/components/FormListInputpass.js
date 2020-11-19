import React, { useContext } from "react";
import { Row, Col, Input } from "antd";

import { FormDemoContext } from "./FormDemo";

export default function FormListInputpass() {
  const { password, dispatch2 } = useContext(FormDemoContext);

  return (
    <div>
      <Row>
        <Col>密码</Col>
        <Col>
          <Input
            type="password"
            value={password}
            placeholder="请输入"
            onChange={(e) =>
              dispatch2({ type: "changeValue", newValue: e.target.value })
            }
          />
        </Col>
      </Row>
    </div>
  );
}
