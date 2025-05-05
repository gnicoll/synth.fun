import { useState } from "react";
import Screen from "../components/Screen/Screen";
import Pattern from "../components/Pattern/Pattern";
import Sequence from "../components/Sequence/Sequence";
import ScreenLayout from "../components/ScreenLayout/ScreenLayout";

function DefaultScreen() {

  return (
    <Screen>
        <ScreenLayout>
            <Pattern />
            <Sequence />
        </ScreenLayout>
    </Screen>
  );
}

export default DefaultScreen;
