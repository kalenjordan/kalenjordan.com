import "./App.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Bleed,
  Box,
  Button,
  Card,
  Grid,
  Page,
  Text,
  Thumbnail,
  InlineStack,
  FooterHelp,
  Link,
  Frame,
  BlockStack,
} from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import { CartIcon } from "@shopify/polaris-icons";

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <Frame>
        <Page
          title="Shopify Automation With A Smile 😀"
          subtitle="I love building Shopify integrations. Whether using Flow, IPaaS systems, or building custom - if you need any integrations built for Shopify or other systems you integrate with, I'm your guy."
        >
          <BlockStack gap="500">
            <Card>
              <Bleed marginInline="400" marginBlock="400">
                <video width="100%" autoPlay="autoplay" loop="loop">
                  <source src="flow-hire.mp4" />
                </video>
              </Bleed>
            </Card>
            <Grid columns={{ sm: 3 }}>
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
                <Card>
                  <BlockStack gap="300" as="lfdsafdsa">
                    <Text as="h2" variant="headingSm">
                      10 Hours
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Tall
                    </Text>
                    <Button icon={CartIcon}>$1200</Button>
                  </BlockStack>
                </Card>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
                <Card>
                  <BlockStack gap="300">
                    <Text as="h2" variant="headingSm">
                      20 Hours
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Grande
                    </Text>
                    <Button icon={CartIcon}>$2100</Button>
                  </BlockStack>
                </Card>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
                <Card>
                  <BlockStack gap="300">
                    <Text as="h2" variant="headingSm">
                      30 Hours
                    </Text>
                    <Text as="p" variant="bodyMd">
                      Venti
                    </Text>
                    <Button icon={CartIcon}>$3000</Button>
                  </BlockStack>
                </Card>
              </Grid.Cell>
            </Grid>
          </BlockStack>
          <FooterHelp>
            <InlineStack gap="200">
              <Thumbnail size="extraSmall" source="kalen-circle.png" />
              <Text>
                Find me on{" "}
                <Link monochrome url="https://twitter.com/kalenjordan">
                  Twitter
                </Link>{" "}
                or{" "}
                <Link monochrome url="https://linkedin.com/in/kalen">
                  LinkedIn
                </Link>
                .
              </Text>
            </InlineStack>
          </FooterHelp>
        </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
