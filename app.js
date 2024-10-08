
    const exampleText = ['Graphic Designer', 'graphic designer', 'freelancer', 'youtuber'];
    const exampleTyping = new AutoTyping('#move', exampleText, {
        typeSpeed: 50,
        deleteSpeed: 50,
        waitBeforeDelete: 2000,
        waitBetweenWords: 500,
    });
    exampleTyping.start()
