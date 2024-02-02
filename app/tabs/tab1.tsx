import { H5, Tabs, Text } from "tamagui";

import { MyStack } from "../../components/MyStack";

export default function Tab1() {
  return (
    <MyStack>
    <div className="film-container">
      <Tabs defaultValue="tab1" orientation="vertical" flexDirection="row" width="100%">
        <Tabs.List>
          <Tabs.Tab value="tab1">
            <Text>Film 1</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content value="tab1">
          <H5>SubTab 1 Content</H5>
        </Tabs.Content>
      </Tabs>
    </div>

    <div className="film-container">
      <Tabs defaultValue="tab2" orientation="vertical" flexDirection="row" width="100%">
        <Tabs.List>
          <Tabs.Tab value="tab2">
            <Text>Film 2</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content value="tab2">
          <H5>SubTab 2 Content</H5>
        </Tabs.Content>
      </Tabs>
    </div>

    <div className="film-container">
      <Tabs defaultValue="tab3" orientation="vertical" flexDirection="row" width="100%">
        <Tabs.List>
          <Tabs.Tab value="tab3">
            <Text>Film 3</Text>
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Content value="tab3">
          <H5>SubTab 3 Content</H5>
        </Tabs.Content>
      </Tabs>
    </div>
  </MyStack>
);
}