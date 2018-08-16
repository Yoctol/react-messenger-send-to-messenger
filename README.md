# React Messenger Send To Messenger

> React component for [Messenger send to Messenger plugin](https://developers.facebook.com/docs/messenger-platform/discovery/send-to-messenger-plugin)

[![npm](https://img.shields.io/npm/v/react-messenger-send-to-messenger.svg?style=flat-square)](https://www.npmjs.com/package/react-messenger-send-to-messenger)
[![Build Status](https://travis-ci.org/Yoctol/react-messenger-send-to-messenger.svg?branch=master)](https://travis-ci.org/Yoctol/react-messenger-send-to-messenger)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Screenshot

![](https://user-images.githubusercontent.com/3382565/37636810-164ec576-2c3f-11e8-9d7e-da29a83eaf57.png)

## Prerequisite

Whitelist your domain to connect your Facebook Page to your website via the
Facebook tool.

* From UI: Facebook Page Settings > Messenger Platform > Whitelisted Domains
* From API: Use HTTP API or API client likes
  [messaging-api-messenger](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger#setwhitelisteddomainsdomains)

## Installation

```sh
npm install react-messenger-send-to-messenger
```

## Usage

```js
import React from 'react';
import ReactDOM from 'react-dom';
import MessengerSendToMessenger from 'react-messenger-send-to-messenger';

ReactDOM.render(
  <MessengerSendToMessenger pageId="<PAGE_ID>" appId="<APP_ID>" />,
  document.getElementById('demo')
);
```

> Note: It will handle sdk initialize automatically for you. See more details in
> [fbsdk official docs](https://developers.facebook.com/docs/javascript/quickstart/).

## Props

```js
static propTypes = {
  pageId: PropTypes.string.isRequired,
  appId: PropTypes.string.isRequired,

  dataRef: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  enforceLogin: PropTypes.bool,
  ctaText: PropTypes.oneOf([
    'GET_THIS_IN_MESSENGER',
    'RECEIVE_THIS_IN_MESSENGER',
    'SEND_THIS_TO_ME',
    'GET_CUSTOMER_ASSISTANCE',
    'GET_CUSTOMER_SERVICE',
    'GET_SUPPORT',
    'LET_US_CHAT',
    'SEND_ME_MESSAGES',
    'ALERT_ME_IN_MESSENGER',
    'SEND_ME_UPDATES',
    'MESSAGE_ME',
    'LET_ME_KNOW',
    'KEEP_ME_UPDATED',
    'TELL_ME_MORE',
    'SUBSCRIBE_IN_MESSENGER',
    'SUBSCRIBE_TO_UPDATES',
    'GET_MESSAGES',
    'SUBSCRIBE',
    'GET_STARTED_IN_MESSENGER',
    'LEARN_MORE_IN_MESSENGER',
    'GET_STARTED',
    'SEND_TO_MESSENGER',
  ]),
  autoLogAppEvents: PropTypes.bool,
  xfbml: PropTypes.bool,
  version: PropTypes.string,
  language: PropTypes.string,
  debug: PropTypes.bool,
  onSendToMessenger: PropTypes.func,
};

static defaultProps = {
  dataRef: undefined,
  color: 'blue',
  size: 'large',
  enforceLogin: false,
  ctaText: undefined,
  autoLogAppEvents: true,
  xfbml: true,
  version: '2.11',
  language: 'en_US',
  debug: false,
  onSendToMessenger: () => {},
};
```

## Related

* [react-messenger-customer-chat](https://github.com/Yoctol/react-messenger-customer-chat) - React component for messenger customer chat plugin.
* [react-messenger-checkbox](https://github.com/Yoctol/react-messenger-checkbox) - React component for messenger checkbox plugin.
* [react-messenger-message-us](https://github.com/Yoctol/react-messenger-message-us) - React component for messenger message us plugin.
* [messaging-api-messenger](https://github.com/Yoctol/messaging-apis/tree/master/packages/messaging-api-messenger) - Messaging APIs for Messenger.
* [bottender](https://github.com/Yoctol/bottender) - Make Bots in Your Way, Fast and Flexibly.

## License

MIT © [Yoctol](https://github.com/Yoctol/react-messenger-send-to-messenger)
