import React, { useContext } from "react";
import { Row, Col, Input } from "antd";

import { FormDemoContext } from "./FormDemo";

export default function FormListInputpass() {
  const { state, dispatch } = useContext(FormDemoContext);

  return (
    <div>
      <Row>
        <Col>密码</Col>
        <Col>
          <Input
            type="password"
            value={state.password}
            placeholder="请输入"
            onChange={(e) =>
              dispatch({ type: "changePassword", password: e.target.value })
            }
          />
        </Col>
      </Row>
    </div>
  );
}
