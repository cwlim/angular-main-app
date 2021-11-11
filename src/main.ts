
let remote = {
  productsModuleUrl: 'http://demo-products-module.s3-website-us-east-1.amazonaws.com',
  profileComponentUrl: 'http://demo-profile-wc.s3-website-us-east-1.amazonaws.com',
};

(window as any).remote = remote;

import('./bootstrap')
	.catch(err => console.error(err));
