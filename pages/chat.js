import React, { useState } from "react";

import BaseLayout from "../components/layouts/base.layout";
import { DrawerLeft } from "../components/generic/new";

export default function Chat() {
  return (
    <BaseLayout>
      <DrawerLeft />
    </BaseLayout>
  );
}
