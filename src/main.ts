
let remote = {
  productsModuleUrl: 'http://localhost:4201',
  profileComponentUrl: 'http://localhost:4202',
};

(window as any).remote = remote;

import('./bootstrap')
	.catch(err => console.error(err));
