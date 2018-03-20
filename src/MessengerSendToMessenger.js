import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MessengerSendToMessenger extends Component {
  static propTypes = {
    pageId: PropTypes.string.isRequired,
    appId: PropTypes.string.isRequired,

    dataRef: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    enforceLogin: PropTypes.bool,
    autoLogAppEvents: PropTypes.bool,
    xfbml: PropTypes.bool,
    version: PropTypes.string,
    language: PropTypes.string,
    debug: PropTypes.bool,
  };

  static defaultProps = {
    dataRef: undefined,
    color: 'blue',
    size: 'large',
    enforceLogin: false,
    autoLogAppEvents: true,
    xfbml: true,
    version: '2.11',
    language: 'en_US',
    debug: false,
  };

  componentDidMount() {
    if (document.getElementById('facebook-jssdk')) {
      return;
    }
    this.setFbAsyncInit();
    this.loadSdkAsynchronously();
  }

  setFbAsyncInit() {
    const { appId, autoLogAppEvents, xfbml, version } = this.props;
    window.fbAsyncInit = () => {
      window.FB.init({
        appId,
        autoLogAppEvents,
        xfbml,
        version: `v${version}`,
      });
    };
  }

  loadSdkAsynchronously() {
    const { language, debug } = this.props;
    /* eslint-disable */
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        return;
      }
      js = d.createElement(s);
      js.id = id;
      js.src = `https://connect.facebook.net/${language}/sdk${
        debug ? '/debug' : ''
      }.js`;
      fjs.parentNode.insertBefore(js, fjs);
    })(document, 'script', 'facebook-jssdk');
    /* eslint-enable */
  }

  createMarkup() {
    const { pageId, appId, dataRef, color, size, enforceLogin } = this.props;

    const dataRefAttribute =
      dataRef !== undefined ? `data-ref="${dataRef}"` : '';

    return {
      __html: `<div
        class="fb-send-to-messenger"
        page_id="${pageId}"
        messenger_app_id="${appId}"
        color="${color}"
        size="${size}"
        enforce_login="${enforceLogin}"
        ${dataRefAttribute}
      ></div>`,
    };
  }

  render() {
    return <div dangerouslySetInnerHTML={this.createMarkup()} />;
  }
}
