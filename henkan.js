function henkan(str){
  //変換前と変換後で文字が被るものは、ここでケース分けする。
  switch (str) {
    case "→":
      str = str.replace(/→/g, "↓a");
      break;
    case "←":
      str = str.replace(/←/g, "↑a");
      break;
    case "↓":
      str = str.replace(/↓/g, "←a");
      break;
    case "↑":
      str = str.replace(/↑/g, "→a");
      break;
    case "─":
      str = str.replace(/─/g, "│a");	// 普通の横棒（Shift-JIS で入力）
      break;
    case "－":
      str = str.replace(/－/g, "│a");	// 普通の横棒（Shift-JIS で入力）
      break;
    case "−":
      str = str.replace(/−/g, "│a"); 	// 普通の横棒（UTF-8 で入力）　全角横棒は、Shift_JIS と UTF-8でコード異なる？
      break;
    case "｜":
      str = str.replace(/｜/g, "─a");
      break;
    case "：":
      str = str.replace(/：/g, "‥a");
      break;
    case "‥":
      str = str.replace(/‥/g, "：a");
      break;
    case "＝":
      //str = str.replace(/＝/g, "∥a"); //こちらが推奨される縦棒？
      str = str.replace(/＝/g, "‖a");	//こちらの縦棒は、フォントの幅が異なるので、上のに統一。
      break;
    case "‖":
      str = str.replace(/‖/g, "＝a");
      break;
    case "／":
      str = str.replace(/／/g, "＼a");
      break;
    case "＼":
      str = str.replace(/＼/g, "／a");
      break;
    default:
      break;
  }
  str = str.replace(/a/g, "");	// 目印に使った'a' を削除

  //半角スペースを全角スペースに変換
  str = str.replace(/ /g,"　");

  //ここはスペースを考えないといけない？
  str = str.replace(/。/g, " ﾟ");
  str = str.replace(/、/g, " `");
  str = str.replace(/「/g, "￢");
  str = str.replace(/」/g, "∟");
	str = str.replace(/’/g, "ヽ");
	str = str.replace(/＿/g, "｜");
  //ここから下はスペースと半角・全角が絡んでくるため難しい…。
  // str = str.replace(/『/g, " ┓");
	// str = str.replace(/』/g, "┗ ");
  // str = str.replace(/【/g, "┏┓");
	// str = str.replace(/】/g, "┗┛");
	// str = str.replace(/（/g, "┌┐");
	// str = str.replace(/）/g, "└┘");
	// str = str.replace(/［/g, "┌┐");
	// str = str.replace(/］/g, "└┘");


  //こちらはスペースを考えなくていい。
  str = str.replace(/〜/g,"∫");
  str = str.replace(/～/g,"∫");
  str = str.replace(/[ー−—]/g,"｜");
  str = str.replace(/…/g,"：");
  str = str.replace(/＜/g,"∧");
	str = str.replace(/＞/g,"∨");
	str = str.replace(/《/g,"∧");
	str = str.replace(/》/g,"∨");
  str = str.replace(/‘/g,"´");

  return str;
}
