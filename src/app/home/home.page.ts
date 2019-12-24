import { Component } from '@angular/core';
import { WebSocialShareInputConfig, WebSocialShareInput } from '../types/web-social-share/web-social-share-input';
import { WebSocialShareWhatsapp } from '../utils/web-social-share/web-social-share-whatsapp';
import { WebSocialShareFacebook } from '../utils/web-social-share/web-social-share-facebook';
import { WebSocialShareLinkedin } from '../utils/web-social-share/web-social-share-linkedin';
import { BrowserStack } from 'protractor/built/driverProviders';
import { WebSocialShareTwitter } from '../utils/web-social-share/web-social-share-twitter';
import { WebSocialShareReddit } from '../utils/web-social-share/web-social-share-reddit';
import { WebSocialSharePinterest } from '../utils/web-social-share/web-social-share-pinterest';
import { WebSocialShareEmail } from '../utils/web-social-share/web-social-share-email';
import { WebSocialShareCopy } from '../utils/web-social-share/web-social-share-copy';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  config = [{
    type: 'facebook',
    facebook: {
      socialShareUrl: 'https://linktr.ee/mycustomlifeapp',
      socialSharePopupWidth: 400,
      socialSharePopupHeight: 400
    }
  },{
    type: 'twitter',
    twitter: {
      socialShareUrl: 'https://linktr.ee/mycustomlifeapp',
      socialSharePopupWidth: 300,
      socialSharePopupHeight: 400
    }
  },{
    type: 'reddit',
    reddit: {
      socialShareUrl: 'https://linktr.ee/mycustomlifeapp',
      socialSharePopupWidth: 300,
      socialSharePopupHeight: 500
    }
  },{
    type: 'linkedin',
    linkedin: {
      socialShareUrl: 'https://linktr.ee/mycustomlifeapp'
    }
  },{
    type: 'pinterest',
    pinterest: {
      socialShareUrl: 'https://linktr.ee/mycustomlifeapp'
    }
  },{
    type: 'email',
    email: {
      socialShareTo: 'contato@my-custom-life.com',
      socialShareBody: 'https://linktr.ee/mycustomlifeapp'
    }
  }, {
    type: 'whatsapp',
    whatsapp: {
      socialShareText: 'Hello, how are you?',
      socialShareUrl: 'https://linktr.ee/mycustomlifeapp'
    }
  },{
    type: 'copy',
    copy: {
      socialShareUrl: 'https://linktr.ee/mycustomlifeapp'
    }
  }]

  constructor() { }

  onClickShare(type: string, share: WebSocialShareInputConfig) {
    console.log(share)
    switch (type) {
      case 'facebook':
        WebSocialShareFacebook.share(share.facebook);
        break;
      case 'twitter':
      WebSocialShareTwitter.share(share.twitter);
        break;
      case 'reddit':
      WebSocialShareReddit.share(share.reddit);
        break;
      case 'linkedin':
      WebSocialShareLinkedin.share(share.linkedin);
        break;
      case 'pinterest':
        WebSocialSharePinterest.share(share.pinterest);
        break;
      case 'email':
        WebSocialShareEmail.share(share.email)
        break;
      case 'whatsapp':
        WebSocialShareWhatsapp.share(share.whatsapp);
        break;
      case 'copy':
       WebSocialShareCopy.share(share.copy);
        break
      default:
        break;
    }

  }

}
