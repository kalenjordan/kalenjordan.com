import './App.css';

import enTranslations from '@shopify/polaris/locales/en.json';
import { 
  AppProvider, Page, Grid, Text, TextField, Card,
  MediaCard, 
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
      <Frame>
      <Page title="Shopify Automation With A Smile" 
      subtitle="Whether you're looking for services or tools, we've got you covered."
      >
        <BlockStack gap="500">
          <img width="100%" src="/flow-hire.gif"></img>
          <MediaCard
            title="Getting Started"
            primaryAction={{
              content: 'Learn about getting started',
              onAction: () => {},
            }}
            description="Discover how Shopify can power up your entrepreneurial journey."
            popoverActions={[{content: 'Dismiss', onAction: () => {}}]}
          >
            <img
              alt=""
              width="100%"
              height="100%"
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              src="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"
            />
          </MediaCard>
          <Card>
            
          </Card>

        </BlockStack>
        <FooterHelp>
          Find me on  {' '}
          <Link monochrome url="https://twitter.com/kalenjordan">
            Twitter
          </Link>
          {' '} or {' '}
          <Link monochrome url="https://linkedin.com/in/kalen">
            LinkedIn
          </Link>.

        </FooterHelp>
      </Page>
      </Frame>
    </AppProvider>
  );
}

export default App;
