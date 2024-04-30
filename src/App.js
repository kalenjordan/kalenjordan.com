import "./App.css";

import enTranslations from "@shopify/polaris/locales/en.json";
import {
  AppProvider,
  Badge,
  Bleed,
  Button,
  Box,
  Card,
  Divider,
  Grid,
  Page,
  Text,
  Thumbnail,
  InlineStack,
  FooterHelp,
  Layout,
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
            <Box paddingInline={{ xs: "400", sm: "0" }}>
              <Card>
                <Bleed marginInline="400" marginBlock="400">
                  <video width="100%" autoPlay="autoplay" loop="loop" controls>
                    <source src="flow-hire.mp4" />
                  </video>
                </Bleed>
              </Card>
            </Box>
            <Layout>
              <Layout.Section>
                <BlockStack gap="500">
                  <Card title="Order details" sectioned>
                    <BlockStack gap="300">
                      <Text as="h2" variant="headingMd">
                        Services
                      </Text>

                      <Text as="p" variant="bodyLg">
                        Having built hundreds of workflow automations for
                        Shopify using 3rd party apps, Flow, and custom code, if
                        there's something that's possible to do in Shopify, I
                        should be able to do it for you. And usually pretty
                        quickly.
                      </Text>
                      <Text as="p" variant="bodyLg">
                        I can also understand requirements and communicate well,
                        so that you won't have to bang your head against the
                        wall trying to articulate exactly what needs to happen
                        and every potential edge case that may need to be
                        handled. I'll figure it out.
                      </Text>
                      <Text as="p" variant="bodyLg">
                        If you're looking for help with anything along these
                        lines, I can't wait to talk to you!
                      </Text>
                    </BlockStack>
                  </Card>
                  <Card>
                    <Grid columns={{ sm: 3 }}>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}
                      >
                        <BlockStack gap="300" as="lfdsafdsa">
                          <Text as="h2" variant="headingMd">
                            10 Hours
                          </Text>
                          <Text as="p" variant="bodyLg">
                            With 10 hours of consulting, let's get off to the
                            races with a quick win.
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
                      </Grid.Cell>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}
                      >
                        <BlockStack gap="300">
                          <Text as="h2" variant="headingMd">
                            20 Hours
                          </Text>
                          <Text as="p" variant="bodyLg">
                            With 20 hours, we'll have a little more time to get
                            things just right.
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
                      </Grid.Cell>
                      <Grid.Cell
                        columnSpan={{ xs: 6, sm: 4, md: 1, lg: 4, xl: 4 }}
                      >
                        <BlockStack gap="300">
                          <InlineStack gap="200">
                            <Text as="h2" variant="headingMd">
                              30 Hours
                            </Text>
                            <Badge gap="500" tone="success">
                              Best Value
                            </Badge>
                          </InlineStack>
                          <Text as="p" variant="bodyLg">
                            With a 30 hour consulting package, we're ready to
                            start cooking with fire.
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
                      </Grid.Cell>
                    </Grid>
                  </Card>
                </BlockStack>
              </Layout.Section>
              <Layout.Section variant="oneThird">
                <BlockStack gap="500">
                  <Card title="Tags" sectioned>
                    <BlockStack gap="300">
                      <InlineStack gap="200">
                        <Avatar size="xs" source="flow-helper-icon.png" />
                        <Text as="h2" variant="headingMd">
                          Flow Helper Shopify App
                        </Text>
                      </InlineStack>
                      <Text as="p" variant="bodyLg">
                        A Shopify app that adds missing triggers and actions to
                        use natively within Flow, including bulk flow runs.
                      </Text>
                      <span>
                        <Badge as="span" tone="info">
                          Pending Review
                        </Badge>
                      </span>
                    </BlockStack>
                  </Card>
                  <Card>
                    <Bleed marginInline="400" marginBlock="400">
                      <div className="video-container">
                        <iframe
                          width="300"
                          height="170"
                          src="https://www.youtube.com/embed/U9jsIxIb-k8?si=bOHL8TKMG7eZ5h60"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerpolicy="strict-origin-when-cross-origin"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </Bleed>
                  </Card>
                </BlockStack>
              </Layout.Section>
            </Layout>
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
                    <img
                      className="logo"
                      src="logo-rainbow.png"
                      style={{ height: "40px" }}
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
