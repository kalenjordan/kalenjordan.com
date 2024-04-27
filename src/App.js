import './App.css';

import enTranslations from '@shopify/polaris/locales/en.json';
import { 
  AppProvider, Page, Grid, Text, TextField, Card,
  MediaCard, Thumbnail,
  InlineStack,Button, FooterHelp, Link,
  Toast, Frame, Scrollable, BlockStack
} from '@shopify/polaris';
import '@shopify/polaris/build/esm/styles.css';
import { useState, useCallback } from 'react';
import { useLocalStorage } from "./useLocalStorage";
import { ClipboardIcon } from '@shopify/polaris-icons';

function App() {
  
  return (
    <AppProvider i18n={enTranslations}>
      <video width="100%" autoplay="autoplay" loop="loop">
        <source src="flow-hire.mp4"/>
      </video>
      <Frame>
      <Page>
        <BlockStack gap="500">
          <MediaCard
            title="Shopify automation with a smile"
            primaryAction={{
              content: 'Learn about getting started',
              onAction: () => {},
            }}
            description="Discover how Shopify can power up your entrepreneurial journey."
            popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
          >
          </MediaCard>
        </BlockStack>
        <FooterHelp>
          <InlineStack gap="200">
          <Thumbnail size="extraSmall" source="kalen-circle.png" />
          <Text>
            Find me on  {' '}
            <Link monochrome url="https://twitter.com/kalenjordan">
              Twitter
            </Link>
            {' '} or {' '}
            <Link monochrome url="https://linkedin.com/in/kalen">
              LinkedIn
            </Link>.
          </Text>
          </InlineStack>

        </FooterHelp>
      </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
