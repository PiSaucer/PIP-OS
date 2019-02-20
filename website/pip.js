var pip = {
  delayMultiplier: 1000,
  firstLyricsIndex: 0,
  init: function() {
    pip.lyricsdiv = document.getElementById('lyricstext');
    pip.processLyricLines();
  },


  blink: function(blinker) {
    nextChar = blinker.innerHTML;
    var newChar = '_';
    if (nextChar == '_')
      newChar = '&nbsp;';
    if (nextChar == '&nbsp;')
      newChar = '_';
    blinker.innerHTML = newChar;
    if (pip.blinkerTime != 300) {
      alert(pip.blinkerTime);
      pip.smash();
    }
    setTimeout(function() {
      pip.blink(blinker)
    }, pip.blinkerTime);
  },
  processLetter: function(type, lineindex, letter) {
    var line = document.getElementById(type + lineindex);
    if (line) {
      if (letter == "newline") {
        line.appendChild(document.createElement("br"));
      } else {
        if (letter == "<")
          letter = "&lt;";
        if (letter == ">")
          letter = "&gt;";
        if (letter == " ")
          letter = "&nbsp;";
        line.innerHTML = line.innerHTML + letter;
      }
    }
  },
  processLyricLine: function(index) {
    if (index < pip.firstLyricsIndex)
      return;
    var lastLineDiv;
    for (var lastIndex = index - 1; lastIndex >= 0 && !lastLineDiv && lyrics[lastIndex].clear == 0; lastIndex--) {
      lastLineDiv = document.getElementById('lyrics' + lastIndex);
    }
    var newlyrics = document.createElement("span");
    newlyrics.id = "lyrics" + index;
    if (lastLineDiv)
      pip.lyricsdiv.insertBefore(newlyrics, lastLineDiv.nextSibling);
    else {
      var nextLineDiv;
      for (var nextIndex = index + 1; nextIndex < index + 50 && !nextLineDiv; nextIndex++) {
        nextLineDiv = document.getElementById('lyrics' + nextIndex);
      }
      if (nextLineDiv)
        pip.lyricsdiv.insertBefore(newlyrics, nextLineDiv);
      else {
        pip.lyricsdiv.insertBefore(newlyrics, pip.lyricsBlinker);
      }
    }
    var curlyric = lyrics[index];
    var clear = curlyric['clear'];
    if (clear == 1) {
      pip.clearLyrics();
      pip.firstLyricsIndex = index;
    } else {
      var text = curlyric['text'];
      var delay = curlyric['delay'] * pip.delayMultiplier;
      var letterdelay = 0;
      if (text.length > 0) {
        letterdelay = delay / (text.length + 1);
      }
      for (var x = 0; x < text.length; x++) {
        timeout = setTimeout("pip.processLetter('lyrics'," + index + ",\"" + text.substring(x, x + 1) + "\")", letterdelay * x);
      }
      if (curlyric['nonewline'] == 0) {
        timeout = setTimeout("pip.processLetter('lyrics'," + index + ",'newline')", letterdelay * text.length);
      }
    }
  },
  processLyricLines: function() {
    var delay = 0;
    for (var index = 0; index < lyrics.length; index++) {
      timeout = setTimeout("pip.processLyricLine(" + (index) + ")", delay);
      delay += lyrics[index]['delay'] * pip.delayMultiplier;
    }
  },
  clearLyrics: function() {
    pip.lyricsdiv.innerHTML = "";
    pip.lyricsdiv.appendChild(pip.lyricsBlinker);
  },
}
window.onLoad = setTimeout("pip.init()", 2);


