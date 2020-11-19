import React, { useContext } from "react";
import { Row, Col, Button, Input } from "antd";

import { FormDemoContext } from "../components/FormDemo";

export default function FormList() {
  let { account, password } = useContext(FormDemoContext);
  return (
    <div>
      <Row>
        <Col>账号</Col>
        <Col>
          <Input type="text" value={account} placeholder="请输入" />
        </Col>
      </Row>
      <Row>
        <Col>密码</Col>
        <Col>
          <Input type="password" value={password} placeholder="请输入" />
        </Col>
      </Row>
      <Row>
        <Button>提交</Button>
      </Row>
    </div>
  );
}
