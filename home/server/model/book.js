module.exports.getBookList = function () {
  return {
      title: 'BOOK',
      bookList: [{
          title: '《tensorFlow实战》',
          author: 'hello',
          time: '2017-06-21'
      },
          {
              title: '《面向机器智能的TensorFlow实战》',
              author: 'world',
              time: '2017-05-21'
          },
          {
              title: '《浮生六记》',
              author: 'allen',
              time: '2017-10-1'
          },
          {
              title: '《皮囊》',
              author: 'tony',
              time: '2015-12-21'
          }
      ]
  };
};