import React, { useContext } from "react";
import { Row, Button } from "antd";

import { FormDemoContext } from "./FormDemo";

export default function FormList() {
  const { dispatch } = useContext(FormDemoContext);

  return (
    <div>
      <Row>
        <Button>提交</Button>
      </Row>
    </div>
  );
}
