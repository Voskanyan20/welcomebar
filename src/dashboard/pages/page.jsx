import {
  Page,
  WixDesignSystemProvider
} from "@wix/design-system";
import "@wix/design-system/styles.global.css";
import React from "react";
import BarConfigs from "../../components/BarConfigs";

export default function Index() {
  return (
    <WixDesignSystemProvider>
      <Page>
        <Page.Header
          title="Welcome Bar App"
          // actionsBar={
          //   <Button
          //     onClick={() => {
          //       showToast({
          //         message: "Your first toast message!",
          //       });
          //     }}
          //     prefixIcon={<Icons.GetStarted />}
          //   >
          //     Show a toast
          //   </Button>
          // }
        />
        <Page.Content>
            <BarConfigs />
        </Page.Content>
      </Page>
    </WixDesignSystemProvider>
  );
}
