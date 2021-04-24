function tateyokomain(){
  //var tatestrcount = 5;
  var tatestr = "";
  var yokostr = "";
  var tateword = [];
  var yokoword = [];

  //縦の文字数をセレクトボックスから取得する。
  //var num = document.getElementById("id_tateselect").selectedIndex;
  var tatestrcount = document.getElementById("id_tateselect").value;

  //横文字を取得する。
  yokostr = document.getElementById("wordfield").value;
  //横文字の半角英数を全角英数にする。
  var yokostrrep = yokostr.replace(/[A-Za-z0-9]/g, function(s){
    return String.fromCharCode(s.charCodeAt(0) + 65248);
  });
  //横文字を1文字ずつ分割する。
  yokoword = String(yokostrrep).split('');

  //横書き文字列の長さを取得し、縦書きの文字数で割って列数を取得する。
  //余りが出る場合は列数に＋１。
  var yokostrcount = yokostr.length;
  var tatecol = Math.ceil(yokostrcount / tatestrcount);

  //縦書き文字列×列数で、多次元配列の最大数を取得する。
  var tblmax = tatestrcount * tatecol;

  //一文字目に格納したい文字位置を取得する。
  var mojicnt = tblmax - tatestrcount;
  var mojicntbk = mojicnt;

  //横文字を縦文字の多次元配列に格納する。
  var tbl = new Array(tatestrcount);
  for(var y=0 ; y<tatestrcount ; y++){
    tbl[y] = new Array(tatecol);
    mojicnt = mojicntbk + y;
    for(var x=0 ; x<tatecol ; x++){
      //何も文字がなければ空白を格納する。
      if(!yokoword[mojicnt]){
        tbl[y][x] = "　";
      }
      else{
        tbl[y][x] = yokoword[mojicnt];
      }
      mojicnt = mojicnt - tatestrcount;
    }
  }

  //横文字を縦文字に出力する（divへ）
  editor.innerHTML = "";
  var ary = new Array(yokostrcount);
  for(var i=0 ; i<yokostrcount ; i++){
    if(i > 0 && i % tatestrcount == 0){
      editor.innerHTML += "<br>";
    }
    editor.innerHTML += yokoword[i];
  }

  //多次元配列を出力する（Textareaへ）
  var outareatext = [];
  var strrep = "";
  for(var j=0 ; j<tatestrcount ; j++){
    for(var i=0 ; i<tatecol ; i++){
      strrep = henkan(tbl[j][i]);
      outareatext.push(strrep);
    }
    outareatext.push("\n");
    //outareatext.push("<br>");
  }

  outarea.innerHTML = outareatext.join('');
  //console.table(tbl);

}
