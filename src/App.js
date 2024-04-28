import "./App.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Button,
  Card,
  Divider,
  Grid,
  Page,
  Text,
  Thumbnail,
  InlineStack,
  FooterHelp,
  Link,
  Frame,
  BlockStack,
  InlineGrid,
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
                      With 10 hours of consulting, let's get off to the races
                      with a quick win.
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
                      With 20 hours of consulting, we'll have a little more time
                      to get things just right.
                    </Text>
                    <Button icon={CartIcon}>$2100</Button>
                  </BlockStack>
                </Card>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 2, md: 2, lg: 4, xl: 4 }}>
                <Card>
                  <BlockStack gap="300">
                    <InlineStack gap="200">
                      <Text as="h2" variant="headingSm">
                        30 Hours
                      </Text>
                      <Badge gap="500" tone="success">
                        Best Value
                      </Badge>
                    </InlineStack>
                    <Text as="p" variant="bodyMd">
                      With a 30 hour consulting package, we're ready to cook.
                    </Text>
                    <Button icon={CartIcon}>$3000</Button>
                  </BlockStack>
                </Card>
              </Grid.Cell>
            </Grid>
            <BlockStack gap="400">
              <Text alignment="center" tone="subdued">
                Systems I've integrated with
              </Text>
              <InlineStack gap="600" align="center">
                <img
                  className="logo shopify"
                  src="logo-shopify.png"
                  alt="Shopify Logo"
                />
                <img
                  className="logo shopify-plus"
                  src="logo-shopify-plus.png"
                  alt="Shopify Plus Logo"
                />
                <img className="logo klaviyo" src="logo-klaviyo.png" />
                <img className="logo xero" src="logo-xero.png" />
                <img className="logo recharge" src="logo-recharge.png" />
              </InlineStack>
            </BlockStack>
            <Divider borderColor="border" />
            <InlineStack gap="200" align="center">
              <Thumbnail size="extraSmall" source="kalen-avatar-circle.png" />
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
          </BlockStack>
        </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
