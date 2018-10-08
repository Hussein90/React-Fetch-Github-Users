const toTitleCase = text => text[0].toUpperCase() + text.substring(1);

const toBookCase = text => {
  let texts = [];

  for (const word of text.split(" ")) {
    texts.push(toTitleCase(word));
  }

  return texts.join(" ");
};

export { toBookCase, toTitleCase };
