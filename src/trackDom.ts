import { store } from './index';

interface Options {
  click?: Function,
  init?:  Function,
  scroll?: Function,
  public:  string,
}

const trackDom = function(opts: Options) {
  window.onload = function() {
    if (opts.public) {
      store.set('pageData', opts.public);

      const pageData = store.get('pageData');

      if (opts.init) {
        opts.init(pageData);
      }
  
      if(opts.click) {
        const trackClick = generateTrackClick(opts.click, pageData);
        window.onclick = trackClick;
      }
  
      if(opts.scroll) {
        const trackScroll = generateTrackScroll(opts.scroll, pageData);
        window.onscroll = trackScroll;
      }
    }
  }
}
