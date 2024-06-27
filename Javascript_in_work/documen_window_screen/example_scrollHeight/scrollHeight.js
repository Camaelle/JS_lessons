function checkReading() {
    if (checkReading.read) {
      return;
    }
    checkReading.read = this.scrollHeight - this.scrollTop === this.clientHeight;
    document.registration.accept.disabled = document.getElementById(
      'nextstep',
    ).disabled = !checkReading.read;
    checkReading.noticeBox.innerHTML = checkReading.read
      ? 'Спасибо вам.'
      : 'Пожалуйста, прокрутите и прочитайте следующий текст.';
  }
  
  onload = function () {
    var oToBeRead = document.getElementById('rules');
    checkReading.noticeBox = document.createElement('span');
    document.registration.accept.checked = false;
    checkReading.noticeBox.id = 'notice';
    oToBeRead.parentNode.insertBefore(checkReading.noticeBox, oToBeRead);
    oToBeRead.parentNode.insertBefore(document.createElement('br'), oToBeRead);
    oToBeRead.onscroll = checkReading;
    checkReading.call(oToBeRead);
  };
  