import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MessengerSendToMessenger from '../MessengerSendToMessenger';

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
  MessengerSendToMessenger.prototype.loadSdkAsynchronously = jest.fn();
});

describe('<MessengerSendToMessenger />', () => {
  it('render page_id to DOM element', () => {
    const wrapper = mount(
      <MessengerSendToMessenger pageId="<PAGE_ID>" appId="<APP_ID>" />
    );
    expect(
      wrapper
        .render()
        .find('.fb-send-to-messenger')
        .prop('page_id')
    ).toBe('<PAGE_ID>');
  });

  it('render color to DOM element', () => {
    const wrapper = mount(
      <MessengerSendToMessenger
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        color="white"
      />
    );
    expect(
      wrapper
        .render()
        .find('.fb-send-to-messenger')
        .prop('color')
    ).toBe('white');
  });

  it('render size to DOM element', () => {
    const wrapper = mount(
      <MessengerSendToMessenger
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        size="xlarge"
      />
    );
    expect(
      wrapper
        .render()
        .find('.fb-send-to-messenger')
        .prop('size')
    ).toBe('xlarge');
  });

  it('render data-ref to DOM element', () => {
    const wrapper = mount(
      <MessengerSendToMessenger
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        dataRef="xxx"
      />
    );
    expect(
      wrapper
        .render()
        .find('.fb-send-to-messenger')
        .prop('data-ref')
    ).toBe('xxx');
  });

  it('render enforce_login to DOM element', () => {
    const wrapper = mount(
      <MessengerSendToMessenger
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        enforceLogin
      />
    );
    expect(
      wrapper
        .render()
        .find('.fb-send-to-messenger')
        .prop('enforce_login')
    ).toBe('true');
  });

  it('render cta_text to DOM element', () => {
    const wrapper = mount(
      <MessengerSendToMessenger
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        ctaText="GET_THIS_IN_MESSENGER"
      />
    );
    expect(
      wrapper
        .render()
        .find('.fb-send-to-messenger')
        .prop('cta_text')
    ).toBe('GET_THIS_IN_MESSENGER');
  });

  it('define fbAsyncInit and call loadSdkAsynchronously when facebook-jssdk does not exist', () => {
    mount(<MessengerSendToMessenger pageId="<PAGE_ID>" appId="<APP_ID>" />);

    expect(global.fbAsyncInit).toBeDefined();
    expect(
      MessengerSendToMessenger.prototype.loadSdkAsynchronously
    ).toBeCalled();
  });

  it('should not call loadSdkAsynchronously when facebook-jssdk exists', () => {
    const div = global.document.createElement('div');
    div.id = 'facebook-jssdk';
    global.document.body.appendChild(div);

    mount(<MessengerSendToMessenger pageId="<PAGE_ID>" appId="<APP_ID>" />);

    expect(
      MessengerSendToMessenger.prototype.loadSdkAsynchronously
    ).not.toBeCalled();
  });

  it('define fbAsyncInit and call loadSdkAsynchronously when facebook-jssdk does not exist', () => {
    global.FB = {
      init: jest.fn(),
    };

    mount(
      <MessengerSendToMessenger
        pageId="<PAGE_ID>"
        appId="<APP_ID>"
        autoLogAppEvents
        xfbml
        version="2.11"
      />
    );

    global.fbAsyncInit();

    expect(global.FB.init).toBeCalledWith({
      appId: '<APP_ID>',
      autoLogAppEvents: true,
      xfbml: true,
      version: 'v2.11',
    });
  });
});
