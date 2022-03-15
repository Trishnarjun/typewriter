const sentence = "hello there from lighthouse labs";
for (let i = 0; i < sentence.length; i++) {
  setTimeout(() => {
    // print the char here
    process.stdout.write(sentence.charAt(i));
  }, i * 50);// <= 1s delay to make it noticeable. Can dial it down later.
}