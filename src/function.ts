const generateString = async (length: number) => {
  var chars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var charLength: number = chars.length;

  var result: string = "";

  for (var i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * charLength));
  }

  return result;
};

// need to defined html
let randWord: HTMLElement = document.getElementById("randWord") as HTMLElement;
let playBtn: ElementCSSInlineStyle = document.getElementById(
  "playBtn"
) as ElementCSSInlineStyle;

let code: string = "";

let audio: any;

const handleGenerate = (): void => {
  generateString(10).then((result) => {
    randWord.innerText = result;
    code = result;
    playBtn.style.display = "inline-block";
  });
};

const handlePlay = (): void => {
  let letters: string[] = code.split("");

  letters.forEach((letter: string, index: number) => {
    setTimeout((): void => {
      audio = new Audio(`assets/audio/${letter.toLocaleUpperCase()}.wav`);
      audio.play();
    }, index * 800);
  });

  playBtn.style.display = "none";
};
