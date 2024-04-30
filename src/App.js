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
  Avatar,
  Icon,
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
              <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 2, lg: 8, xl: 8 }}>
                <Card>
                  <BlockStack gap="300">
                    <Text as="h2" variant="headingSm">
                      Services
                    </Text>

                    <Text as="p" variant="bodyMd">
                      Having built hundreds of workflow automations for Shopify
                      using 3rd party apps, Flow, and custom code, if there's
                      something that's possible to do in Shopify, I should be
                      able to do it for you. And usually pretty quickly.
                    </Text>
                    <Text as="p" variant="bodyMd">
                      I can also understand requirements and communicate well,
                      so that you won't have to bang your head against the wall
                      trying to articulate exactly what needs to happen and
                      every potential edge case that may need to be handled.
                      I'll figure it out.
                    </Text>
                  </BlockStack>
                </Card>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}>
                <Card>
                  <BlockStack gap="300">
                    <InlineStack gap="200">
                      <Avatar size="xs" source="flow-helper-icon.png" />
                      <Text as="h2" variant="headingSm">
                        Flow Helper Shopify App
                      </Text>
                    </InlineStack>
                    <Text as="p" variant="bodyMd">
                      Flow Helper is a Shopify app that helps you build more
                      powerful workflows with Shopify Flow by adding more
                      triggers and actions, such as product, customer, and order
                      update triggers.
                    </Text>
                    <span>
                      <Badge as="span" tone="info">
                        Pending Review
                      </Badge>
                    </span>
                  </BlockStack>
                </Card>
              </Grid.Cell>
            </Grid>
            <Grid columns={{ sm: 3 }}>
              <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}>
                <Card>
                  <BlockStack gap="300" as="lfdsafdsa">
                    <Text as="h2" variant="headingSm">
                      10 Hours
                    </Text>
                    <Text as="p" variant="bodyMd">
                      With 10 hours of consulting, let's get off to the races
                      with a quick win.
                    </Text>
                    <span>
                      <Button
                        icon={CartIcon}
                        url="https://buy.stripe.com/dR601u0mX4eP9vafZ4"
                        target="_blank"
                      >
                        $1,200
                      </Button>
                    </span>
                  </BlockStack>
                </Card>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}>
                <Card>
                  <BlockStack gap="300">
                    <Text as="h2" variant="headingSm">
                      20 Hours
                    </Text>
                    <Text as="p" variant="bodyMd">
                      With 20 hours of consulting, we'll have a little more time
                      to get things just right.
                    </Text>
                    <span>
                      <Button
                        url="https://buy.stripe.com/7sI15yedNeTtazeeV1"
                        target="_blank"
                        icon={CartIcon}
                      >
                        $2,100
                      </Button>
                    </span>
                  </BlockStack>
                </Card>
              </Grid.Cell>
              <Grid.Cell columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}>
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
                      With a 30 hour consulting package, we're ready to start
                      cooking with gas.
                    </Text>
                    <span>
                      <Button
                        url="https://buy.stripe.com/28oaG85Hh3aL6iY3ch"
                        target="_blank"
                        icon={CartIcon}
                      >
                        $3,000
                      </Button>
                    </span>
                  </BlockStack>
                </Card>
              </Grid.Cell>
            </Grid>
            <FooterHelp>
              <BlockStack gap="500">
                <BlockStack gap="100">
                  <Text alignment="center" tone="subdued">
                    Brands I've worked with
                  </Text>
                  <InlineStack gap="600" align="center">
                    <img
                      className="logo chubbies"
                      src="logo-chubbies.png"
                      style={{ height: "40px" }}
                    />
                    <img
                      className="logo rothys"
                      src="logo-rothys.png"
                      style={{ height: "45px" }}
                    />
                  </InlineStack>
                </BlockStack>
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
                  <Text>
                    Hit me on{" "}
                    <Link monochrome url="https://twitter.com/kalenjordan">
                      twitter
                    </Link>
                    {",  "}
                    <Link monochrome url="https://linkedin.com/in/kalen">
                      linkedin
                    </Link>
                    {", or "}
                    <Link monochrome url="mailto:kalenj@gmail.com">
                      email
                    </Link>
                    .
                  </Text>
                </InlineStack>
                <InlineStack align="center">
                  <span>
                    <Thumbnail
                      as="span"
                      size="extraSmall"
                      source="kalen-avatar-circle.png"
                    />
                  </span>
                </InlineStack>
              </BlockStack>
            </FooterHelp>
          </BlockStack>
        </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
