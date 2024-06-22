const ProviderType = {
  IAP: 'iap'
}



class Iap {

  _channel = null;
  _channelError = null;
  _productIds = [];

  _ready = false;

  constructor({
    products
  }) {
    this._productIds = products;
  }

  init() {
    return new Promise((resolve, reject) => {
      this.getChannels((channel) => {
        this._ready = true;
        resolve(channel);
      }, (err) => {
        reject(err);
      })
    })
  }

  getProduct(productIds) {
    return new Promise((resolve, reject) => {
      this._channel.requestProduct(productIds || this._productIds, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  requestPayment(orderInfo) {
    return new Promise((resolve, reject) => {
      uni.requestPayment({
        provider: 'appleiap',
        orderInfo: orderInfo,
        success: (res) => {
          resolve(res);
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }

  restoreCompletedTransactions(username) {
    return new Promise((resolve, reject) => {
      this._channel.restoreCompletedTransactions({
        manualFinishTransaction: true,
        username
      }, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      })
    });
  }

  finishTransaction(transaction) {
    return new Promise((resolve, reject) => {
      this._channel.finishTransaction(transaction, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  }

  getChannels(success, fail) {
    if (this._channel !== null) {
      success(this._channel)
      return
    }

    if (this._channelError !== null) {
      fail(this._channelError)
      return
    }

    uni.getProvider({
      service: 'payment',
      success: (res) => {
        this._channel = res.providers.find((channel) => {
          return (channel.id === 'appleiap')
        })

        if (this._channel) {
          success(this._channel)
        } else {
          this._channelError = {
            errMsg: 'paymentContext:fail iap service not found'
          }
          fail(this._channelError)
        }
      }
    });
  }

  get channel() {
    return this._channel;
  }
}

export {
  Iap
}