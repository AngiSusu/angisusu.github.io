const instagramParser = new Nanogram();
instagramParser.getMediaByUsername('angi.susu').then((media) => {
    console.log(media);
  });